"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    )

    for (const el of els) {
      el.classList.add("opacity-0", "translate-y-1")
      el.style.transitionProperty = "opacity, transform"
      el.style.transitionDuration = "500ms"
      el.style.transitionTimingFunction = "ease-out"
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            const delayMs = el.dataset.delay ? `${el.dataset.delay}ms` : "120ms"
            el.style.transitionDelay = delayMs
            el.classList.remove("opacity-0", "translate-y-1")
            el.classList.add("opacity-100", "translate-y-0")
            io.unobserve(el)
          }
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -12% 0px" },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
