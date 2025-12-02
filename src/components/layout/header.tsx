"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchModal } from "@/components/ui/search-modal";
import { BUSINESS_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
];

interface HeaderProps {
    theme?: "light" | "dark"; // light = dark text (default), dark = white text
}

export function Header({ theme = "light" }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle ESC key to close search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSearchOpen(false);
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setSearchOpen(true);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const textColor = isScrolled
        ? "text-slate-600 hover:text-brand-primary"
        : theme === "dark"
            ? "text-white/90 hover:text-white"
            : "text-slate-600 hover:text-brand-primary";

    const logoFilter = !isScrolled && theme === "dark" ? "brightness(0) invert(1)" : "";

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-xl shadow-sm py-3 border-b border-white/20"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative h-10 w-32 md:h-12 md:w-40 group-hover:scale-105 transition-transform duration-300" style={{ filter: logoFilter }}>
                                <Image
                                    src="/logo.png"
                                    alt="Agilus Diagnostics Lab Mohali Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                    sizes="(max-width: 768px) 128px, 160px"
                                />
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/10 group",
                                        textColor
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute inset-x-0 bottom-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                                        isScrolled || theme === "light" ? "bg-brand-primary" : "bg-white"
                                    )} />
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden md:flex items-center gap-3">
                            {/* Search Button */}
                            <button
                                onClick={() => setSearchOpen(true)}
                                className={cn(
                                    "p-2 rounded-full transition-colors hover:bg-white/10",
                                    textColor
                                )}
                                aria-label="Search"
                            >
                                <Search className="h-5 w-5" />
                            </button>

                            <a
                                href={`tel:${BUSINESS_INFO.phone}`}
                                className={cn(
                                    "flex items-center gap-2 text-sm font-bold transition-colors px-4 py-2 rounded-full border hover:shadow-sm",
                                    isScrolled
                                        ? "text-slate-700 bg-white/50 border-slate-200 hover:border-brand-primary/30"
                                        : theme === "dark"
                                            ? "text-white bg-white/10 border-white/20 hover:bg-white/20"
                                            : "text-slate-700 bg-white/50 border-slate-200 hover:border-brand-primary/30"
                                )}
                            >
                                <Phone className="h-4 w-4" />
                                <span className="hidden lg:inline">{BUSINESS_INFO.phoneDisplay}</span>
                            </a>
                            <Button asChild className="shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all duration-300 hover:-translate-y-0.5">
                                <Link href="/book">Book Now</Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                onClick={() => setSearchOpen(true)}
                                className={cn(
                                    "p-2 rounded-lg transition-colors",
                                    isScrolled || theme === "light" ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
                                )}
                            >
                                <Search className="h-6 w-6" />
                            </button>
                            <button
                                className={cn(
                                    "p-2 rounded-lg transition-colors",
                                    isScrolled || theme === "light" ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
                                )}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden shadow-xl"
                        >
                            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-slate-700 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-brand-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-100">
                                    <Button asChild variant="outline" className="w-full justify-center gap-2 h-12 text-base">
                                        <a href={`tel:${BUSINESS_INFO.phone}`}>
                                            <Phone className="h-4 w-4" />
                                            Call {BUSINESS_INFO.phoneDisplay}
                                        </a>
                                    </Button>
                                    <Button asChild className="w-full h-12 text-base shadow-lg shadow-brand-primary/20">
                                        <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                                            Book Home Collection
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    );
}
