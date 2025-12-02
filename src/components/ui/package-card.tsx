import Link from "next/link";
import { Check, Clock, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Package } from "@/lib/packages";
import { cn } from "@/lib/utils";

interface PackageCardProps {
    pkg: Package;
    featured?: boolean;
}

export function PackageCard({ pkg, featured = false }: PackageCardProps) {
    return (
        <div
            className={cn(
                "group relative flex flex-col rounded-3xl transition-all duration-300 overflow-hidden",
                featured
                    ? "bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-primary/30 hover:-translate-y-1"
            )}
        >
            <div className="p-6 md:p-8 flex-1 flex flex-col">
                {pkg.isPopular && (
                    <div className={cn(
                        "absolute top-0 right-0 text-xs font-bold px-4 py-1.5 rounded-bl-2xl",
                        featured ? "bg-white/20 text-white backdrop-blur-sm" : "bg-brand-accent text-white"
                    )}>
                        MOST POPULAR
                    </div>
                )}

                <div className="mb-6">
                    <h3 className={cn("text-xl font-bold mb-2 leading-tight", featured ? "text-white" : "text-slate-900")}>
                        {pkg.name}
                    </h3>
                    <p className={cn("text-sm line-clamp-2", featured ? "text-white/80" : "text-slate-500")}>
                        {pkg.description}
                    </p>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                    <span className={cn("text-4xl font-bold tracking-tight", featured ? "text-white" : "text-brand-primary")}>
                        ₹{pkg.price}
                    </span>
                    {pkg.originalPrice && (
                        <span className={cn("text-sm line-through decoration-red-500/50", featured ? "text-white/60" : "text-slate-400")}>
                            ₹{pkg.originalPrice}
                        </span>
                    )}
                </div>

                <div className="space-y-3 mb-8 flex-1">
                    <div className={cn("flex items-center gap-3 text-sm p-3 rounded-xl transition-colors", featured ? "bg-white/10 hover:bg-white/20" : "bg-slate-50 hover:bg-slate-100")}>
                        <Clock className={cn("h-4 w-4", featured ? "text-white" : "text-brand-secondary")} />
                        <span className={featured ? "text-white/90" : "text-slate-700"}>
                            Report in <span className="font-semibold">{pkg.turnaroundTime}</span>
                        </span>
                    </div>
                    <div className={cn("flex items-center gap-3 text-sm p-3 rounded-xl transition-colors", featured ? "bg-white/10 hover:bg-white/20" : "bg-slate-50 hover:bg-slate-100")}>
                        <FileText className={cn("h-4 w-4", featured ? "text-white" : "text-brand-secondary")} />
                        <span className={featured ? "text-white/90" : "text-slate-700"}>
                            Includes <span className="font-semibold">{pkg.testsIncluded.length} Tests</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Button asChild variant={featured ? "secondary" : "outline"} className={cn("w-full transition-colors", featured ? "bg-white text-brand-primary hover:bg-white/90" : "border-slate-200 hover:border-brand-primary hover:text-brand-primary")}>
                        <Link href={`/packages/${pkg.slug}`}>Details</Link>
                    </Button>
                    <Button asChild className={cn("w-full shadow-lg transition-all", featured ? "bg-brand-dark text-white hover:bg-brand-dark/90" : "bg-brand-primary text-white hover:bg-brand-dark")}>
                        <Link href={`/book?package=${pkg.slug}`}>
                            Book <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
