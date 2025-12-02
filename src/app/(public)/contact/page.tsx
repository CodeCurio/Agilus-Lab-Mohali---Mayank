import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { BUSINESS_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Agilus Diagnostics Mohali",
    description: "Contact Agilus Diagnostics Lab Mohali for home collection bookings and queries. Call 9115459115.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">

            <PageHero
                title="Contact"
                highlight="Us"
                description="We are here to help. Reach out to us for home collection bookings or any queries."
            />

            <Section>
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-primary mb-4">
                                <Phone className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Call Us</h3>
                            <p className="text-slate-600 mb-4 text-sm">
                                Mon-Sat from 7am to 8pm.
                            </p>
                            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xl font-bold text-brand-primary hover:underline">
                                {BUSINESS_INFO.phoneDisplay}
                            </a>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-primary mb-4">
                                <Mail className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Email Us</h3>
                            <p className="text-slate-600 mb-4 text-sm">
                                For reports and general queries.
                            </p>
                            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-lg font-medium text-brand-primary hover:underline">
                                {BUSINESS_INFO.email}
                            </a>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-primary mb-4">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Visit Lab</h3>
                            <p className="text-slate-600 text-sm">
                                {BUSINESS_INFO.address}
                            </p>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="lg:col-span-2 bg-white p-4 rounded-3xl shadow-sm border border-slate-100 h-[500px] relative overflow-hidden">
                        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.566774647366!2d76.7098!3d30.7022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzA3LjkiTiA3NsKwNDInMzUuMyJF!5e0!3m2!1sen!2sin!4v1635765432109!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            <ContactCTA />
        </main>
    );
}
