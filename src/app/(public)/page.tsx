import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { FeaturedPackages } from "@/components/sections/featured-packages";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Section } from "@/components/ui/section";
import { CheckCircle2, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Hero />

      {/* Why Choose Us / Quick Info */}
      <Section className="py-12 bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100">
            <div className="p-3 bg-brand-light rounded-lg text-brand-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">NABL Accredited</h3>
              <p className="text-slate-600 text-sm">Highest quality standards and accurate reports you can trust.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100">
            <div className="p-3 bg-brand-light rounded-lg text-brand-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Home Collection</h3>
              <p className="text-slate-600 text-sm">Free home sample collection across Mohali, Chandigarh, Kharar, Zirakpur & Panchkula.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100">
            <div className="p-3 bg-brand-light rounded-lg text-brand-primary">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Fast Reports</h3>
              <p className="text-slate-600 text-sm">Get your reports delivered via Email & WhatsApp within 24 hours.</p>
            </div>
          </div>
        </div>
      </Section>

      <FeaturedPackages />

      <Testimonials />

      <FAQ />

      <ContactCTA />
    </main>
  );
}
