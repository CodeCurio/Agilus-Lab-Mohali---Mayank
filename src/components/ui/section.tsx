import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "alternate" | "brand";
    curved?: "top" | "bottom" | "both" | "none";
}

export function Section({
    children,
    className,
    variant = "default",
    curved = "none",
    ...props
}: SectionProps) {
    const bgColors = {
        default: "bg-white",
        alternate: "bg-slate-50",
        brand: "bg-brand-primary text-white",
    };

    return (
        <section
            className={cn(
                "relative py-16 md:py-24",
                bgColors[variant],
                className
            )}
            {...props}
        >
            {/* Curved SVG Separators could go here if needed, keeping it simple for now or adding later */}
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
