import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PackageCard } from "@/components/ui/package-card";
import { Button } from "@/components/ui/button";
import { PACKAGES } from "@/lib/packages";

export function FeaturedPackages() {
    const featuredPackages = PACKAGES.slice(0, 6);

    return (
        <Section className="bg-slate-50">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Health Packages</h2>
                <p className="text-slate-600">
                    Choose from our most booked health checkup packages designed to keep you and your family healthy.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredPackages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} featured={true} />
                ))}
            </div>

            <div className="text-center">
                <Button asChild size="lg" variant="outline">
                    <Link href="/packages">
                        View All Packages
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </Section>
    );
}
