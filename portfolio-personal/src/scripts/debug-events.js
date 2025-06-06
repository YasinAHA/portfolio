// src/scripts/debug-events.js
const events = [
    'astro:page-load',       // Disparado al cargar cualquier página (inicial y SPA)
    'astro:after-swap',      // Disparado después de actualizar el DOM
    'astro:before-preparation',
    'astro:after-preparation',
    'astro:before-swap',
    'astro:view-transition-ready',
    'astro:navigate',
];

events.forEach(event => {
    document.addEventListener(event, (e) => {
        //console.log(`🔥 Evento capturado: ${event}`, e);
    });
});

//console.log("Debug de eventos SPA activado");