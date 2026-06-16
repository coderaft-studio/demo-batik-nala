import Image from "next/image";

const produk = [
  {
    nama: "Batik Kawung Premium",
    deskripsi: "Motif kawung klasik, kain primissima, cocok untuk acara formal & pernikahan",
    harga: "450.000",
    img: "/images/batik1.jpg",
    badge: "Best Seller",
    badgeColor: "bg-yellow-500 text-indigo-950",
  },
  {
    nama: "Batik Parang Kusumo",
    deskripsi: "Motif parang tulis tangan, filosofi kekuatan dan keberanian, limited edition",
    harga: "650.000",
    img: "/images/batik2.jpg",
    badge: "Limited",
    badgeColor: "bg-red-500 text-white",
  },
  {
    nama: "Batik Mega Mendung",
    deskripsi: "Motif khas Cirebon, perpaduan warna biru dan merah yang elegan dan memukau",
    harga: "380.000",
    img: "/images/batik3.jpg",
    badge: "New",
    badgeColor: "bg-indigo-600 text-white",
  },
  {
    nama: "Batik Sido Mukti",
    deskripsi: "Simbol kemakmuran dan kebahagiaan, pilihan favorit untuk seserahan & hantaran",
    harga: "520.000",
    img: "/images/batik4.jpg",
    badge: null,
    badgeColor: "",
  },
  {
    nama: "Batik Truntum Cap",
    deskripsi: "Motif truntum cap dengan warna natural soga, ringan dan nyaman dipakai sehari-hari",
    harga: "280.000",
    img: "/images/batik5.jpg",
    badge: "Favorit",
    badgeColor: "bg-emerald-500 text-white",
  },
  {
    nama: "Batik Sekar Jagad",
    deskripsi: "Koleksi eksklusif motif sekar jagad, simbolisasi keberagaman dan keindahan alam",
    harga: "750.000",
    img: "/images/batik6.jpg",
    badge: "Premium",
    badgeColor: "bg-purple-600 text-white",
  },
];

export default function Koleksi() {
  return (
    <section id="koleksi" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-3">Pilihan Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
            Koleksi <span className="text-indigo-600">Unggulan</span>
          </h2>
          <p className="text-indigo-400 max-w-xl mx-auto text-sm md:text-base">
            Setiap kain batik kami dibuat dengan tangan oleh pengrajin berpengalaman menggunakan bahan-bahan pilihan berkualitas tinggi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {produk.map((p) => (
            <div key={p.nama} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-indigo-50">
              <div className="relative h-56 overflow-hidden bg-indigo-50">
                <Image src={p.img} alt={p.nama} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                {p.badge && (
                  <span className={`absolute top-3 left-3 ${p.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-indigo-900 text-base md:text-lg mb-1">{p.nama}</h3>
                <p className="text-indigo-400 text-sm leading-relaxed mb-4">{p.deskripsi}</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-indigo-700 font-bold text-base md:text-lg">Rp {p.harga}</span>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                    className="bg-indigo-50 hover:bg-indigo-600 hover:text-white text-indigo-600 border border-indigo-200 hover:border-indigo-600 px-4 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap">
                    Pesan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-colors text-sm md:text-base">
            Lihat Semua Koleksi
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
