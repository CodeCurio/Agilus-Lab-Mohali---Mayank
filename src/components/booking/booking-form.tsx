"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingFormData } from "@/lib/booking-schema";
import { Button } from "@/components/ui/button";
import { PACKAGES } from "@/lib/packages";
import { Loader2, CheckCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export function BookingForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const preselectedPkg = searchParams.get("package");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            packageId: preselectedPkg || "",
        },
    });

    const onSubmit = async (data: BookingFormData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            // Find package name if ID is selected
            const selectedPkg = PACKAGES.find(p => p.slug === data.packageId);
            const payload = {
                ...data,
                packageName: selectedPkg ? selectedPkg.name : "General Inquiry / Home Collection",
            };

            const response = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Failed to submit booking");

            setIsSuccess(true);
            reset();
            // Optional: Redirect to success page
            // router.push("/booking-success");
        } catch (err) {
            setError("Something went wrong. Please try again or call us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Booking Received!</h3>
                <p className="text-green-700 mb-6">
                    Thank you for choosing Agilus. Our team will call you shortly to confirm your appointment.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="bg-white">
                    Book Another Test
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Select Package (Optional)</label>
                    <select
                        {...register("packageId")}
                        className="w-full rounded-lg border-slate-300 focus:border-brand-primary focus:ring-brand-primary"
                    >
                        <option value="">-- General Home Collection --</option>
                        {PACKAGES.map((pkg) => (
                            <option key={pkg.id} value={pkg.slug}>
                                {pkg.name} - ₹{pkg.price}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <input
                            type="text"
                            {...register("name")}
                            className="w-full rounded-lg border-slate-300 focus:border-brand-primary focus:ring-brand-primary"
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                        <input
                            type="tel"
                            {...register("phone")}
                            className="w-full rounded-lg border-slate-300 focus:border-brand-primary focus:ring-brand-primary"
                            placeholder="10-digit mobile number"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email (Optional)</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="w-full rounded-lg border-slate-300 focus:border-brand-primary focus:ring-brand-primary"
                        placeholder="For receiving reports"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Address *</label>
                    <textarea
                        {...register("address")}
                        rows={3}
                        className="w-full rounded-lg border-slate-300 focus:border-brand-primary focus:ring-brand-primary"
                        placeholder="House No, Sector, City"
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date *</label>
                    <input
                        type="date"
                        {...register("date")}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full rounded-lg border-slate-300 focus:border-brand-primary focus:ring-brand-primary"
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                </div>
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    "Confirm Booking"
                )}
            </Button>

            <p className="text-xs text-center text-slate-500">
                By booking, you agree to receive updates via WhatsApp/SMS.
            </p>
        </form>
    );
}
