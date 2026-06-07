"use client";
import { useEffect } from "react";

export default function WhatsAppDemo() {
  useEffect(() => {
    function runWA() {
      const m1 = document.getElementById("waMsg1");
      const m2 = document.getElementById("waMsg2");
      const m3 = document.getElementById("waMsg3");
      const ty = document.getElementById("waTyping");
      const bg = document.getElementById("waBadge");
      if (!m1 || !m2 || !m3 || !ty || !bg) return;
      [m1, m2, m3].forEach((el) => el.classList.remove("show"));
      ty.classList.remove("show");
      bg.classList.remove("show");
      const t1 = setTimeout(() => m1.classList.add("show"), 500);
      const t2 = setTimeout(() => ty.classList.add("show"), 1400);
      const t3 = setTimeout(() => { ty.classList.remove("show"); m2.classList.add("show"); }, 2700);
      const t4 = setTimeout(() => bg.classList.add("show"), 3100);
      const t5 = setTimeout(() => m3.classList.add("show"), 4300);
      const t6 = setTimeout(runWA, 9000);
      return [t1, t2, t3, t4, t5, t6];
    }
    const init = setTimeout(runWA, 700);
    return () => clearTimeout(init);
  }, []);
  return null;
}
