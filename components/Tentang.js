"use client";
import Image from "next/image";
import { useRef } from "react";

const photos = [
  { src: "/images/about1.jpg", alt: "Pengrajin batik" },
  { src: "/images/about2.jpg", alt: "Proses membatik" },
  { src: "/images/hero.jpg", alt: "Motif batik" },
  { src: "/images/batik5.jpg", alt: "Koleksi batik" },
  { src: "/images/batik1.jpg", alt: "Detail batik" },
];

export default function Tentang() {
  const ref = useRef(null);
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 220, behavior: "smooth" });

  return (
    <section id="tentang" className="py-12 md:py-24 bg-indigo-950 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Text */}
        <div>
          <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-3">Kisah Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Warisan Generasi, <span className="text-yellow-400">Kualitas Terjaga</span>
          </h2>
          <p className="text-indigo-200 text-base md:text-lg leading-relaxed mb-6">
            Batik Nala lahir dari kecintaan keluarga Nala terhadap seni batik Yogyakarta sejak tahun 2008.
            Bermula dari sebuah workshop kecil di Kotagede, kini kami melayani pelanggan dari seluruh Indonesia.
          </p>
          <p className="text-indigo-300 leading-relaxed mb-8">
            Setiap kain yang kami buat dikerjakan oleh pengrajin berpengalaman yang mewarisi teknik batik
            tradisional secara turun-temurun. Kami berkomitmen menjaga keaslian motif sambil menghadirkan
            desain yang relevan dengan gaya hidup modern.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4 md:gap-5">
            {[
              { icon: "✋", title: "Handmade", desc: "Dibuat tangan pengrajin ahli" },
              { icon: "🌿", title: "Pewarna Alam", desc: "Bahan pewarna alami & aman" },
              { icon: "🏆", title: "Bersertifikat", desc: "SNI & Craft Mark Indonesia" },
              { icon: "📦", title: "Pengiriman Aman", desc: "Dikemas khusus anti-kusut" },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-semibold text-white text-sm">{item.title}</div>
                  <div className="text-indigo-300 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full">
          <div className="absolute top-3 right-3 z-10 bg-yellow-500 text-indigo-950 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg text-xs font-bold">
            🏅 Kerajinan Terbaik 2023
          </div>

          {/* Scrollable track */}
          <div ref={ref} className="flex gap-3 md:gap-4 overflow-x-auto pb-3 w-full"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
            {photos.map((p, i) => (
              <div key={p.alt} className="relative flex-shrink-0 rounded-2xl overflow-hidden group"
                style={{ width: "160px", height: i % 2 === 0 ? "240px" : "200px", marginTop: i % 2 !== 0 ? "40px" : "0", scrollSnapAlign: "start" }}>
                <Image src={p.src} alt={p.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              {[[-1, "←"], [1, "→"]].map(([dir, label]) => (
                <button key={dir} onClick={() => scroll(dir)}
                  className="w-9 h-9 rounded-full text-sm font-bold transition-all hover:scale-110 active:scale-95"
                  style={{ background: "#eab308", color: "#1e1b4b", border: "none", cursor: "pointer" }}>
                  {label}
                </button>
              ))}
            </div>
            <span className="text-xs font-medium text-indigo-300">
              Geser untuk lihat semua →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
