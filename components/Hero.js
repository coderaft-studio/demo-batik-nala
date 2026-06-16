import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Koleksi Batik Nala"
        fill priority className="object-cover"
      />
      <div className="absolute inset-0 bg-indigo-950/70" />

      <div className="relative z-10 text-center px-4 md:px-6 max-w-3xl mx-auto pt-20">
        <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-4">
          Koleksi Premium
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Batik<span className="text-yellow-400"> Nala</span>
        </h1>
        <p className="text-indigo-100 text-lg md:text-xl mb-4 leading-relaxed">
          Warisan Budaya, Gaya Modern
        </p>
        <p className="text-indigo-200 text-base mb-10 max-w-xl mx-auto">
          Koleksi batik tulis dan cap premium dari pengrajin lokal Yogyakarta.
          Setiap helai kain menyimpan kisah dan keindahan budaya Nusantara.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#koleksi"
            className="bg-yellow-500 hover:bg-yellow-400 text-indigo-950 px-8 py-4 rounded-full font-bold text-lg transition-colors">
            Lihat Koleksi
          </a>
          <a href="#cara-order"
            className="border-2 border-white hover:bg-white hover:text-indigo-950 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
            Cara Pemesanan
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 text-white">
          {[
            { num: "500+", label: "Motif Tersedia" },
            { num: "15+", label: "Tahun Pengalaman" },
            { num: "10rb+", label: "Pelanggan Puas" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">{s.num}</div>
              <div className="text-xs md:text-sm text-indigo-200 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
