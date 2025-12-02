import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ContactCTA } from "@/components/sections/contact-cta";
import { PACKAGES } from "@/lib/packages";
import { BUSINESS_INFO } from "@/lib/constants";
import { CheckCircle2, Clock, FileText, AlertCircle } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const pkg = PACKAGES.find((p) => p.slug === slug);
    if (!pkg) return {};

    return {
        title: `${pkg.name} - Diagnostic Test in Mohali`,
        description: `Book ${pkg.name} at Agilus Diagnostics Lab Mohali. Includes ${pkg.testsIncluded.slice(0, 3).join(", ")}. Price: ₹${pkg.price}. Home collection available.`,
    };
}

export async function generateStaticParams() {
    return PACKAGES.map((pkg) => ({
        slug: pkg.slug,
    }));
}

export default async function PackageDetailPage({ params }: Props) {
    const { slug } = await params;
    const pkg = PACKAGES.find((p) => p.slug === slug);

    if (!pkg) {
        notFound();
    }

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": pkg.name,
        "description": pkg.description,
        "offers": {
            "@type": "Offer",
            "price": pkg.price,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
        },
        "provider": {
            "@type": "MedicalOrganization",
            "name": BUSINESS_INFO.name,
            "address": BUSINESS_INFO.address
        }
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            {/* Hero */}
            <div className="bg-brand-primary text-white pt-32 pb-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                            {pkg.category} Package
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{pkg.name}</h1>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl">{pkg.description}</p>

                        <div className="flex flex-wrap gap-6 items-end">
                            <div>
                                <p className="text-blue-200 text-sm mb-1">Package Price</p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl font-bold">₹{pkg.price}</span>
                                    {pkg.originalPrice && (
                                        <span className="text-xl text-blue-300 line-through">₹{pkg.originalPrice}</span>
                                    )}
                                </div>
                            </div>
                            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-blue-50">
                                <Link href={`/book?package=${pkg.slug}`}>Book Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Section>
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Key Features */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                                <Clock className="h-6 w-6 text-brand-secondary shrink-0" />
                                <div>
                                    <p className="font-semibold text-slate-900">Turnaround Time</p>
                                    <p className="text-slate-600 text-sm">{pkg.turnaroundTime}</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                                <AlertCircle className="h-6 w-6 text-brand-secondary shrink-0" />
                                <div>
                                    <p className="font-semibold text-slate-900">Preparation</p>
                                    <p className="text-slate-600 text-sm">{pkg.preparation}</p>
                                </div>
                            </div>
                        </div>

                        {/* Tests Included */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <FileText className="h-6 w-6 text-brand-primary" />
                                Tests Included ({pkg.testsIncluded.length})
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {pkg.testsIncluded.map((test, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{test}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
                            <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                            <p className="text-slate-600 mb-6 text-sm">
                                Not sure if this is the right package for you? Call our experts for free consultation.
                            </p>
                            <Button asChild variant="outline" className="w-full mb-3">
                                <a href={`tel:${BUSINESS_INFO.phone}`}>Call {BUSINESS_INFO.phoneDisplay}</a>
                            </Button>
                            <Button asChild className="w-full">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            <ContactCTA />

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    );
}
