/** @type {import('tailwindcss').Config} */
export default {
    /*  Modo oscuro por clase .dark  (selector personalizado) */
    darkMode: ["class", ".dark"],

    /*  Archivos a escanear para utilidades */
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx}",
        "./public/**/*.html",
        "./src/styles/global.css",
    ],

    /*  Tema extendido (tokens) */
    theme: {
        extend: {
            /*  Colores OC-LCH + alpha */
            colors: {
                primary: "oklch(var(--color-primary) / <alpha-value>)",
                secondary: "oklch(var(--color-secondary) / <alpha-value>)",
                surface: "oklch(95% 0.005 250 / <alpha-value>)",
                "surface-dark": "oklch(24% 0.02 250 / <alpha-value>)",
                border: "oklch(var(--color-border) / <alpha-value>)",
                "border-dark": "oklch(var(--color-border-dark) / <alpha-value>)",
                muted: "oklch(var(--color-muted) / <alpha-value>)",
                glass: "rgba(255 255 255 / <alpha-value>)",
                "glass-dark": "rgba(24 24 27 / <alpha-value>)",
            },

            /* Radio semántico para tarjetas */
            borderRadius: {
                card: "var(--radius)",        // genera .rounded-card
            },

            /*  Tipografía */
            fontFamily: {
                sans: "var(--font-sans)",
            },
        },
    },

    /*  Safelist – utilidades que usas solo vía @apply */
    safelist: [
        { pattern: /(bg|text|border|ring)-(primary|secondary)(\/\d+)?/ },
        { pattern: /(bg|text|border)-(surface|surface-dark)(\/\d+)?/ },
        "bg-glass",          // ← añade esta línea
        "dark:bg-glass-dark" // ← y su versión dark
    ],

    plugins: [],
};
