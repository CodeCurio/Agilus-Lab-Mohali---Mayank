import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
    title: "Patient Reviews | Agilus Diagnostics Mohali",
    description: "Read what our patients say about our home collection and diagnostic services in Mohali & Chandigarh.",
};

const reviews = [
    {
        id: 1,
        name: "Rajesh Kumar",
        rating: 5,
        date: "2 days ago",
        text: "Excellent service! The phlebotomist arrived on time and was very professional. Reports were delivered within 24 hours as promised."
    },
    {
        id: 2,
        name: "Priya Singh",
        rating: 5,
        date: "1 week ago",
        text: "Very hygienic and safe process. I booked a full body checkup for my parents, and the team handled everything with great care. Highly recommended."
    },
    {
        id: 3,
        name: "Amit Sharma",
        rating: 4,
        date: "2 weeks ago",
        text: "Good experience overall. The booking process was smooth. Report delivery was slightly delayed but the accuracy is trusted."
    },
    {
        id: 4,
        location: "Zirakpur",
        text: "I was worried about the hygiene, but the technician was fully vaccinated and followed all safety protocols. Very impressed.",
        rating: 5,
        date: "2 months ago"
    },
    {
        id: 5,
        name: "Davinder Singh",
        location: "Kharar",
        text: "Quick and reliable. Reports are always on time. The app makes booking very easy.",
        rating: 4,
        date: "1 week ago"
    },
    {
        id: 6,
        name: "Meera Reddy",
        location: "Mohali Phase 7",
        text: "Good experience. The staff is knowledgeable and helpful. Will definitely use their services again.",
        rating: 5,
        date: "3 months ago"
    }
];

export default function ReviewsPage() {
    return (
        <main className="min-h-screen bg-slate-50">

            <PageHero
                title="Patient"
                highlight="Reviews"
                description="See what our patients have to say about their experience with Agilus Diagnostics Mohali."
            />

            <Section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                            <Quote className="absolute top-6 right-6 h-8 w-8 text-slate-100 fill-slate-100" />
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-slate-200"}`}
                                    />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 italic leading-relaxed">"{review.text}"</p>
                            <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                                <div>
                                    <p className="font-bold text-slate-900">{review.name}</p>
                                    <p className="text-xs text-slate-500">{review.location}</p>
                                </div>
                                <span className="text-xs text-slate-400">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <ContactCTA />
        </main>
    );
}
