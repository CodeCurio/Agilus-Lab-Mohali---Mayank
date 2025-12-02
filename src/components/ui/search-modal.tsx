"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { PACKAGES } from "@/lib/packages";
import { cn } from "@/lib/utils";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setQuery(""); // Reset on close
        }
    }, [isOpen]);

    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Filter packages
    const filteredPackages = query.trim() === ""
        ? []
        : PACKAGES.filter(pkg =>
            pkg.name.toLowerCase().includes(query.toLowerCase()) ||
            pkg.description.toLowerCase().includes(query.toLowerCase()) ||
            pkg.testsIncluded.some(test => test.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 5);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-4 top-24 md:top-32 max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl z-[70] overflow-hidden border border-slate-100"
                    >
                        {/* Search Header */}
                        <div className="flex items-center border-b border-slate-100 p-4">
                            <Search className="h-5 w-5 text-slate-400 mr-3" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search for tests (e.g., CBC, Thyroid) or packages..."
                                className="flex-1 text-lg outline-none placeholder:text-slate-400 text-slate-800"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button
                                onClick={onClose}
                                className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5 text-slate-500" />
                            </button>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto">
                            {query.trim() === "" ? (
                                <div className="p-8 text-center text-slate-500">
                                    <p className="text-sm">Type to start searching...</p>
                                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                                        {["Full Body", "Thyroid", "Diabetes", "Vitamin"].map(term => (
                                            <button
                                                key={term}
                                                onClick={() => setQuery(term)}
                                                className="px-3 py-1 bg-slate-50 hover:bg-slate-100 rounded-full text-xs font-medium transition-colors border border-slate-200"
                                            >
                                                {term}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : filteredPackages.length > 0 ? (
                                <div className="py-2">
                                    <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Packages & Tests
                                    </div>
                                    {filteredPackages.map((pkg) => (
                                        <Link
                                            key={pkg.id}
                                            href={`/packages/${pkg.slug}`}
                                            onClick={onClose}
                                            className="flex items-start gap-4 px-4 py-3 hover:bg-slate-50 transition-colors group"
                                        >
                                            <div className="p-2 bg-blue-50 text-brand-primary rounded-lg group-hover:bg-blue-100 transition-colors">
                                                <FileText className="h-5 w-5" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-slate-900 group-hover:text-brand-primary transition-colors">
                                                    {pkg.name}
                                                </h4>
                                                <p className="text-sm text-slate-500 line-clamp-1">
                                                    {pkg.description}
                                                </p>
                                                <div className="mt-1 flex flex-wrap gap-1">
                                                    {pkg.testsIncluded.slice(0, 3).map(test => (
                                                        <span key={test} className="text-[10px] px-1.5 py-0.5 bg-slate-100 rounded text-slate-600">
                                                            {test}
                                                        </span>
                                                    ))}
                                                    {pkg.testsIncluded.length > 3 && (
                                                        <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 rounded text-slate-600">
                                                            +{pkg.testsIncluded.length - 3} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="self-center">
                                                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-brand-primary -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 text-center text-slate-500">
                                    <p>No results found for "{query}"</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="bg-slate-50 px-4 py-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                            <span>Press ESC to close</span>
                            <span>Agilus Diagnostics Mohali</span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
