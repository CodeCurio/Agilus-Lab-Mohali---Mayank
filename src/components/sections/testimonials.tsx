import { Section } from "@/components/ui/section";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        location: "Mohali, Sector 69",
        text: "Excellent service! The phlebotomist arrived on time for home collection. The report was delivered by email the same evening. Highly recommended.",
        rating: 5,
    },
    {
        id: 2,
        name: "Priya Sharma",
        location: "Chandigarh",
        text: "Very professional staff. I booked a full body checkup for my parents. The process was smooth and the staff was very polite.",
        rating: 5,
    },
    {
        id: 3,
        name: "Amit Singh",
        location: "Mohali",
        text: "Best diagnostic lab in Mohali. Accurate results and affordable packages. The home collection facility is a lifesaver.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <Section>
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
                <p className="text-slate-600">
                    Trusted by thousands of families in Mohali and Chandigarh for accurate diagnostics.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t) => (
                    <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex gap-1 mb-4 text-yellow-400">
                            {[...Array(t.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                        <div>
                            <p className="font-bold text-slate-900">{t.name}</p>
                            <p className="text-sm text-slate-500">{t.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
