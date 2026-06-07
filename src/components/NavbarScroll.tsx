"use client";
import { useEffect } from "react";

export default function NavbarScroll() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    const handler = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return null;
}
