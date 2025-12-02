import { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: "About Us | Agilus Diagnostics Mohali",
    description: "Learn about Agilus Diagnostics Lab Mohali, our accreditation, and our commitment to accurate pathology services.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="About"
                highlight="Agilus Mohali"
                description="Committed to providing accurate, timely, and affordable diagnostic services to our community."
            />

            <section className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Intro */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-6 text-slate-800">Who We Are</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Agilus Diagnostics is India's largest diagnostic network, dedicated to providing accurate and timely diagnostic services.
                            Our Mohali center is equipped with state-of-the-art technology and staffed by experienced professionals to ensure
                            you receive the best care possible. We believe in empowering our patients with the knowledge they need to make
                            informed health decisions.
                        </p>
                        <p className="text-slate-600">
                            To be the most trusted diagnostic partner for patients and doctors alike, known for our quality, speed, and patient-centric approach.
                        </p>
                    </div>

                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/about-team.png"
                            alt="Agilus Medical Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <h3>Why Choose Agilus Mohali?</h3>
                <ul className="grid sm:grid-cols-2 gap-4 not-prose mt-6">
                    {[
                        "NABL Accredited Lab",
                        "Expert Pathologists",
                        "Latest Technology",
                        "Home Sample Collection",
                        "Digital Reports",
                        "Affordable Pricing"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-brand-secondary" />
                            <span className="font-medium text-slate-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <ContactCTA />
        </main>
    );
}
