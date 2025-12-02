import { cn } from "@/lib/utils"
// Skeleton component for loading states

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-slate-200", className)}
            {...props}
        />
    )
}

export { Skeleton }
