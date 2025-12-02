"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How do I book a home collection?",
        answer: "You can book a home collection by calling us at +91 75289 70484 or by filling out the booking form on our website. Our phlebotomist will visit your home at your preferred time."
    },
    {
        question: "When will I get my reports?",
        answer: "Most routine test reports are available within 12-24 hours. Specialized tests may take longer. You will receive a soft copy via email and WhatsApp."
    },
    {
        question: "Is fasting required for all tests?",
        answer: "No, fasting is not required for all tests. However, for tests like Lipid Profile, Fasting Blood Sugar, and Thyroid Profile, 10-12 hours of fasting is recommended. Please check the specific package details."
    },
    {
        question: "Do you service all areas in Mohali and Chandigarh?",
        answer: "Yes, we cover all sectors in Mohali (SAS Nagar), Chandigarh, and nearby areas like Kharar and Zirakpur."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section className="bg-slate-50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-600">Common questions about our diagnostic services.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-slate-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-brand-primary shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-slate-400 shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
