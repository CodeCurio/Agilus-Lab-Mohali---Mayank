export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col animate-pulse">
            {/* Header Skeleton */}
            <div className="h-20 bg-white border-b border-slate-100" />

            {/* Hero Skeleton */}
            <div className="h-[60vh] bg-slate-200/50" />

            {/* Content Skeleton */}
            <div className="container mx-auto px-4 py-12 space-y-8">
                <div className="h-8 w-48 bg-slate-200 rounded-lg" />
                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-64 bg-white rounded-2xl border border-slate-100" />
                    ))}
                </div>
            </div>
        </div>
    );
}
