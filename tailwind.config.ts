import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)', 'sans-serif'],
                display: ['var(--font-montserrat)', 'sans-serif'],
                script: ['var(--font-permanent-marker)', 'cursive'],
            },
            colors: {
                pool: {
                    50: '#e0fcfb',
                    100: '#bdfaf7',
                    300: '#5ceaec',
                    500: '#00d5db',
                    700: '#008b8f',
                    900: '#0B2B4A', // Deep aquatic blue from poster background
                },
                neon: {
                    cyan: '#00E5FF',    // Vibrant Cyan
                    magenta: '#FF00FF', // Neon pink/magenta
                    pink: '#D5006D',
                    yellow: '#FFE600',  // Bright Yellow
                },
                sunset: {
                    300: '#fdba74',
                    500: '#f97316',
                    600: '#ea580c',
                },
                festival: {
                    pink: '#ec4899',
                    purple: '#8b5cf6',
                    yellow: '#fbbf24',
                }
            },
        },
    },
    plugins: [],
};
export default config;
