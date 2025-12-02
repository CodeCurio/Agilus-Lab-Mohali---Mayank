"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Activity, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";

export function Hero() {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-secondary/10 rounded-full blur-3xl animate-pulse-soft" />
                <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-primary/20 text-brand-primary text-sm font-medium mb-8 shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
                            </span>
                            #1 Trusted Diagnostic Lab in Mohali
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-slate-900 tracking-tight">
                            Precision Diagnostics <br />
                            <span className="text-gradient">At Your Doorstep</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Experience world-class pathology services with NABL accredited accuracy.
                            Home collection available across Mohali, Chandigarh, Kharar & Zirakpur.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                <Link href="/book">
                                    Book Home Collection
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-slate-50">
                                <Link href="/packages">
                                    View Health Packages
                                </Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                            <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-100 shadow-sm">
                                <p className="text-4xl font-bold text-brand-primary mb-1">10k+</p>
                                <p className="text-sm text-slate-700 font-semibold">Happy Patients</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-100 shadow-sm">
                                <p className="text-4xl font-bold text-brand-primary mb-1">24h</p>
                                <p className="text-sm text-slate-700 font-semibold">Fast Reports</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-100 shadow-sm">
                                <p className="text-4xl font-bold text-brand-primary mb-1">4.9</p>
                                <div className="flex items-center gap-1 text-sm text-slate-700 font-semibold">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    Google Rating
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Glassmorphism Card Stack */}
                        <div className="relative z-10">
                            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                                {/* Main Image Card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[2rem] rotate-3 opacity-20 blur-lg transform translate-y-4"></div>
                                <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white/50">
                                    <Image
                                        src="/images/hero-bg.png"
                                        alt="Modern Diagnostic Lab"
                                        fill
                                        className="object-cover"
                                        priority
                                    />

                                    {/* Floating Elements */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md border-t border-white/50">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                <ShieldCheck className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">NABL Accredited</p>
                                                <p className="text-xs text-slate-500">ISO 9001:2015 Certified Lab</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Contact Card */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                    className="absolute -top-12 -right-12 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-[200px]"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Support</p>
                                    </div>
                                    <p className="font-bold text-slate-900 text-lg">{BUSINESS_INFO.phoneDisplay}</p>
                                    <p className="text-xs text-slate-500 mt-1">Available 7 AM - 8 PM</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
