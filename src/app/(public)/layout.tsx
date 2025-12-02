import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/ui/floating-buttons";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <FloatingButtons />
            <Footer />
        </>
    );
}
