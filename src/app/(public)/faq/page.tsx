import { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
    title: "FAQ - Agilus Diagnostics Mohali",
    description: "Frequently asked questions about our diagnostic services, home collection, and reports.",
};

const faqs = [
    {
        question: "How can I book a home collection?",
        answer: "You can book a home collection by calling us directly or filling out the booking form on our website. Our phlebotomist will visit your home at the scheduled time."
    },
    {
        question: "When will I get my reports?",
        answer: "Most routine test reports are available within 24 hours. Specialized tests may take longer. You will receive a link to download your report via SMS/Email."
    },
    {
        question: "Is fasting required for all tests?",
        answer: "No, not all tests require fasting. However, tests like Fasting Blood Sugar, Lipid Profile, and Thyroid Profile usually require 10-12 hours of fasting. Please check the specific test instructions."
    },
    {
        question: "Do you offer full body checkup packages?",
        answer: "Yes, we offer a variety of comprehensive health packages tailored for different age groups and health needs. You can view them on our Packages page."
    },
    {
        question: "Are your labs NABL accredited?",
        answer: "Yes, Agilus Diagnostics is India's largest diagnostic network with NABL accredited labs, ensuring the highest standards of quality and accuracy."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept cash, credit/debit cards, UPI, and online wallets. You can pay at the center or to the phlebotomist during home collection."
    },
    {
        question: "Can I reschedule my appointment?",
        answer: "Yes, you can reschedule your appointment by calling our support team at least 2 hours before the scheduled time."
    },
    {
        question: "Do you provide pediatric blood collection?",
        answer: "Yes, our phlebotomists are trained to handle blood collection for children and infants with care and minimal discomfort."
    }
];

export default function FAQPage() {
    return (
        <main>
            <PageHero
                title="Frequently Asked Questions"
                description="Find answers to common questions about our services and procedures."
            />

            <section className="py-16 container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-xl px-4 shadow-sm">
                                <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-brand-primary hover:no-underline py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <ContactCTA />
        </main>
    );
}
