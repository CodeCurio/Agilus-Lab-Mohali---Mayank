import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/booking-schema";
import { storage, Booking } from "@/lib/storage";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const result = bookingSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json({ error: "Invalid input", details: result.error }, { status: 400 });
        }

        const booking: Booking = {
            id: Date.now().toString(),
            ...result.data,
            packageName: result.data.packageName || "General Booking",
            createdAt: new Date().toISOString(),
            status: "pending"
        };

        // Save to persistent storage
        storage.addBooking(booking);

        // Send Email Notification (Simulated if no env vars)
        if (process.env.SMTP_HOST && process.env.SMTP_USER) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT) || 587,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            await transporter.sendMail({
                from: process.env.SMTP_FROM || '"Agilus Mohali" <noreply@agilusmohali.com>',
                to: process.env.ADMIN_EMAIL || "admin@agilusmohali.com", // Send to admin
                subject: `New Booking: ${booking.name} - ${booking.packageName}`,
                text: `
          New Booking Received:
          Name: ${booking.name}
          Phone: ${booking.phone}
          Package: ${booking.packageName}
          Date: ${booking.date}
          Address: ${booking.address}
        `,
                html: `
          <h2>New Booking Received</h2>
          <p><strong>Name:</strong> ${booking.name}</p>
          <p><strong>Phone:</strong> ${booking.phone}</p>
          <p><strong>Package:</strong> ${booking.packageName}</p>
          <p><strong>Date:</strong> ${booking.date}</p>
          <p><strong>Address:</strong> ${booking.address}</p>
        `,
            });
        } else {
            console.log("SMTP not configured. Booking saved:", booking.id);
        }

        return NextResponse.json({ success: true, bookingId: booking.id });
    } catch (error) {
        console.error("Booking error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// Simple GET endpoint to retrieve bookings (for Admin stub)
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (key !== process.env.ADMIN_PASSWORD && key !== "admin123") { // Fallback for demo
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const bookings = storage.getBookings();
    return NextResponse.json({ bookings });
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { id, status, key } = body;

        if (key !== process.env.ADMIN_PASSWORD && key !== "admin123") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (!id || !status) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        storage.updateBooking(id, { status });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const key = searchParams.get("key");
        const id = searchParams.get("id");

        if (key !== process.env.ADMIN_PASSWORD && key !== "admin123") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (!id) {
            return NextResponse.json({ error: "Missing booking ID" }, { status: 400 });
        }

        storage.deleteBooking(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
