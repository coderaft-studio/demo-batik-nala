"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#koleksi", label: "Koleksi" },
  { href: "#tentang", label: "Tentang" },
  { href: "#cara-order", label: "Cara Order" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-indigo-950 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-white font-bold text-xl tracking-wide">
          🪡 Batik<span className="text-yellow-400">Nala</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-indigo-100 hover:text-yellow-400 transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-indigo-950 px-5 py-2 rounded-full text-sm font-bold transition-colors">
            Pesan Sekarang
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Toggle menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <nav className={`md:hidden bg-indigo-950 border-t border-indigo-800 px-6 py-4 flex-col gap-4 ${open ? "flex" : "hidden"}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-indigo-100 hover:text-yellow-400 transition-colors font-medium">
            {l.label}
          </a>
        ))}
        <a href="https://wa.me/6281234567890" onClick={() => setOpen(false)}
          className="bg-yellow-500 text-indigo-950 px-5 py-2 rounded-full text-center font-bold">
          Pesan Sekarang
        </a>
      </nav>
    </header>
  );
}
