import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="relative h-12 w-40 mb-6 bg-white/10 rounded-lg p-2">
                            <Image
                                src="/logo.png"
                                alt="Agilus Diagnostics"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400">
                            Trusted diagnostic services in Mohali & Chandigarh. We provide accurate pathology tests with convenient home sample collection.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li><Link href="/packages" className="hover:text-brand-secondary transition-colors">Health Packages</Link></li>
                            <li><Link href="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-secondary transition-colors">Contact Us</Link></li>
                            <li><Link href="/book" className="hover:text-brand-secondary transition-colors">Book a Test</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/packages/full-body-checkup-advanced" className="hover:text-brand-secondary transition-colors">Full Body Checkup</Link></li>
                            <li><Link href="/packages/thyroid-profile-total" className="hover:text-brand-secondary transition-colors">Thyroid Profile</Link></li>
                            <li><Link href="/packages/diabetes-screening-basic" className="hover:text-brand-secondary transition-colors">Diabetes Screening</Link></li>
                            <li><Link href="/packages/covid-19-rt-pcr" className="hover:text-brand-secondary transition-colors">COVID-19 RT-PCR</Link></li>
                            <li><Link href="/packages" className="hover:text-brand-secondary transition-colors">Home Collection</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-brand-secondary shrink-0 mt-1" />
                                <span>{BUSINESS_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-brand-secondary shrink-0" />
                                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phoneDisplay}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-brand-secondary shrink-0" />
                                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">{BUSINESS_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Agilus Diagnostics Lab Mohali. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
