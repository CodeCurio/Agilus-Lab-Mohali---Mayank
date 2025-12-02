"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/constants";

export function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <motion.a
                href={`https://wa.me/91${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-14 w-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
                title="Chat on WhatsApp"
            >
                <MessageCircle className="h-7 w-7" />
            </motion.a>

            {/* Call Button */}
            <motion.a
                href={`tel:${BUSINESS_INFO.phone}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-14 w-14 bg-brand-primary rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
                title="Call Now"
            >
                <Phone className="h-6 w-6" />
            </motion.a>
        </div>
    );
}
