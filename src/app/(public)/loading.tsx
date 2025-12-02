import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-8">
            {/* Breadcrumb/Header area */}
            <Skeleton className="h-8 w-48" />

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content Skeleton */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Hero/Title area */}
                    <div className="space-y-4">
                        <Skeleton className="h-12 w-3/4 rounded-xl" />
                        <Skeleton className="h-6 w-1/2" />
                    </div>

                    {/* Cards/Features grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Skeleton className="h-24 rounded-xl" />
                        <Skeleton className="h-24 rounded-xl" />
                    </div>

                    {/* Description block */}
                    <Skeleton className="h-64 rounded-2xl" />
                </div>

                {/* Sidebar Skeleton */}
                <div className="space-y-6">
                    <Skeleton className="h-96 rounded-2xl" />
                </div>
            </div>
        </div>
    );
}
