/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./main.js"
    ],
    theme: {
        extend: {
            colors: {
                agentics: {
                    red: '#E11D48',    // A nice rose/red
                    blue: '#2563EB',   // A clean blue
                    green: '#10B981',  // An emerald green
                    yellow: '#F59E0B', // An amber yellow
                    dark: '#0F172A',   // Slate 900 for premium dark
                    light: '#F8FAFC',  // Slate 50
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
