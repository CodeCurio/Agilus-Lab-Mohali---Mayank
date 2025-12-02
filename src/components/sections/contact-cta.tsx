import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export function ContactCTA() {
    return (
        <Section className="relative overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary py-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/hero-bg.svg')] bg-cover bg-center" />

            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                    Ready to Prioritize Your Health?
                </h2>
                <p className="text-blue-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    Book a home collection today and get accurate reports delivered to your phone.
                    No waiting in queues, no hassle.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Button asChild size="lg" className="h-14 px-8 text-lg bg-white text-brand-primary hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full">
                        <a href={`tel:${BUSINESS_INFO.phone}`}>
                            <Phone className="mr-2 h-5 w-5" />
                            Call {BUSINESS_INFO.phoneDisplay}
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white hover:border-white shadow-lg rounded-full">
                        <Link href="/book">
                            <Calendar className="mr-2 h-5 w-5" />
                            Book Online
                        </Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
