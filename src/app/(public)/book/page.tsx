"use client";

import React, { Suspense } from "react";
import { Metadata } from "next";
import { BookingForm } from "@/components/booking/booking-form";
import { PageHero } from "@/components/ui/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function BookPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="Book a Home Collection"
                description="Schedule a convenient home sample collection at your preferred time."
            />

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
                    <Suspense fallback={<div className="text-center p-8">Loading booking form...</div>}>
                        <BookingForm />
                    </Suspense>
                </div>
            </div>

            <ContactCTA />
        </main>
    );
}
