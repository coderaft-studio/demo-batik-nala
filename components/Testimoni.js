const reviews = [
  { name: "Ratna Kusuma", role: "Pelanggan Setia, Jakarta", avatar: "RK", color: "bg-indigo-600",
    text: "Sudah 3 kali pesan batik di sini. Kualitasnya luar biasa, motifnya presisi, dan warnanya tidak luntur meski sudah dicuci berkali-kali. Packaging-nya juga sangat cantik, cocok untuk hadiah!" },
  { name: "Dewi Sartika", role: "Blogger Fashion, Bandung", avatar: "DS", color: "bg-yellow-600",
    text: "Batik Nala adalah temuan terbaik saya tahun ini. Motif kawungnya benar-benar autentik dan kain primissimanya terasa premium. Harga sangat sepadan dengan kualitas yang didapat." },
  { name: "Hendra Wijaya", role: "Pengusaha, Surabaya", avatar: "HW", color: "bg-emerald-600",
    text: "Saya pesan batik dalam jumlah besar untuk seragam kantor. Pelayanan responsif, kualitas konsisten, dan pengiriman tepat waktu. Pasti akan repeat order untuk acara berikutnya!" },
];

export default function Testimoni() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-3">Kata Pelanggan</p>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
            Mereka Sudah <span className="text-indigo-600">Percaya</span> Kami
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-xl md:text-2xl font-bold text-indigo-900">4.9</span>
            <span className="text-yellow-400 text-xl md:text-2xl">★★★★★</span>
            <span className="text-indigo-400 text-sm">(800+ ulasan)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-indigo-50 rounded-2xl p-5 md:p-7 hover:shadow-md transition-shadow">
              <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-indigo-600 leading-relaxed mb-6 italic text-sm">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`${r.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-indigo-900 text-sm">{r.name}</div>
                  <div className="text-indigo-400 text-xs">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
