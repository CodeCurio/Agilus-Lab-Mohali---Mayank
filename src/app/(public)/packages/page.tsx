"use client";

import { useState } from "react";
import { PackageCard } from "@/components/ui/package-card";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { PACKAGES, Package } from "@/lib/packages";
import { cn } from "@/lib/utils";

const categories = ["All", "Full Body", "Routine", "Specialized", "Covid"];

export default function PackagesPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPackages = activeCategory === "All"
        ? PACKAGES
        : PACKAGES.filter(pkg => pkg.category === activeCategory);

    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="Health Checkup"
                highlight="Packages"
                description="Choose from our wide range of diagnostic packages tailored for your health needs."
            />

            <Section className="bg-slate-50 min-h-[60vh]">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                                activeCategory === cat
                                    ? "bg-brand-primary text-white shadow-md"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPackages.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>

                {filteredPackages.length === 0 && (
                    <div className="text-center py-12 text-slate-500">
                        No packages found in this category.
                    </div>
                )}
            </Section>
            <ContactCTA />
        </main>
    );
}
