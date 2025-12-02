import { Header } from "@/components/layout/header";

interface PageHeroProps {
    title: string;
    highlight?: string;
    description?: string;
    bgImage?: string;
}

export function PageHero({
    title,
    highlight,
    description,
    bgImage = "/hero-bg.svg"
}: PageHeroProps) {
    return (
        <>
            <Header theme="dark" />
            <div className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: `url('${bgImage}')` }}
                />

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        {title} {highlight && <span className="text-brand-secondary">{highlight}</span>}
                    </h1>
                    {description && (
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
