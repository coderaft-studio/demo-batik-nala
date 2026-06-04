import Image from "next/image";

export default function Tentang() {
  return (
    <section id="tentang" className="py-24 bg-indigo-950 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-3">Kisah Kami</p>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Warisan Generasi, <span className="text-yellow-400">Kualitas Terjaga</span>
          </h2>
          <p className="text-indigo-200 text-lg leading-relaxed mb-6">
            Batik Nala lahir dari kecintaan keluarga Nala terhadap seni batik Yogyakarta sejak tahun 2008.
            Bermula dari sebuah workshop kecil di Kotagede, kini kami melayani pelanggan dari seluruh Indonesia.
          </p>
          <p className="text-indigo-300 leading-relaxed mb-8">
            Setiap kain yang kami buat dikerjakan oleh pengrajin berpengalaman yang mewarisi teknik batik
            tradisional secara turun-temurun. Kami berkomitmen menjaga keaslian motif sambil menghadirkan
            desain yang relevan dengan gaya hidup modern.
          </p>

          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: "✋", title: "Handmade", desc: "Dibuat tangan pengrajin ahli" },
              { icon: "🌿", title: "Pewarna Alam", desc: "Bahan pewarna alami & aman" },
              { icon: "🏆", title: "Bersertifikat", desc: "SNI & Craft Mark Indonesia" },
              { icon: "📦", title: "Pengiriman Aman", desc: "Dikemas khusus anti-kusut" },
            ].map((item) => (
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

        <div className="relative grid grid-cols-2 gap-4 h-96">
          <div className="relative rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1695350121532-02d2720749d1?w=400&q=80" alt="Pengrajin batik" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden mt-8">
            <Image src="https://images.unsplash.com/photo-1695306441929-0082158cfc27?w=400&q=80" alt="Proses pembuatan batik" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-indigo-950 px-6 py-3 rounded-full shadow-lg text-sm font-bold whitespace-nowrap">
            🏅 Kerajinan Terbaik 2023
          </div>
        </div>
      </div>
    </section>
  );
}
