// public/init-motion.js
import { animate } from "https://esm.sh/motion";

/* ---------- keyframes ---------- */
const kf = {
    'fade-up': { opacity: [0, 1], transform: ['translateY(2rem)', 'translateY(0)'] },
    'fade-down': { opacity: [0, 1], transform: ['translateY(-2rem)', 'translateY(0)'] },
    'fade-right': { opacity: [0, 1], transform: ['translateX(-2rem)', 'translateX(0)'] },
    'fade-left': { opacity: [0, 1], transform: ['translateX(2rem)', 'translateX(0)'] },
    'zoom-in': { opacity: [0, 1], scale: [.8, 1] },
    'zoom-out': { opacity: [0, 1], scale: [1.2, 1] },
}

/* ---------- observer ---------- */
const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            play(e.target)
            obs.unobserve(e.target)
        }
    })
}, { threshold: 0.1 })

/* ---------- funciones ---------- */
const play = el => {
    const type = kf[el.dataset.motion] ?? kf['fade-up']
    const delay = parseFloat(el.dataset.delay || '0')
    animate(el, type, { duration: 0.7, delay, easing: 'ease-out', fill: 'forwards' })
}

const register = el => {
    if (el.dataset.motionInit) return
    el.dataset.motionInit = '1'
    el.classList.add('opacity-0', 'translate-y-4')

    const { top, bottom } = el.getBoundingClientRect()
    const inView = top < window.innerHeight && bottom > 0
    inView ? play(el) : io.observe(el)
}

const init = (ctx = document) => {
    ctx.querySelectorAll('[data-motion]').forEach(register)
}

/* ---------- primera carga ---------- */
document.addEventListener('DOMContentLoaded', () => init())

/* ---------- navegación SPA ---------- */
window.addEventListener('astro:after-swap', () => init())

/* ---------- fallback global ---------- */
new MutationObserver(muts => {
    muts.forEach(m =>
        m.addedNodes.forEach(n => {
            if (n.nodeType === 1) init(n)
        })
    )
}).observe(document, { childList: true, subtree: true })
