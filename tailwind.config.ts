import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#005EB8", // Agilus Blue
                    secondary: "#00B5E2", // Agilus Cyan
                    accent: "#78BE20", // SRL Green
                    dark: "#003B73", // Darker Blue
                    light: "#E6F4FA", // Light Blue bg
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': "url('/hero-bg.svg')", // Placeholder if needed
                'gradient-brand': 'linear-gradient(to right, #005EB8, #00B5E2)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
export default config;
