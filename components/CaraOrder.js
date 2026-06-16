const steps = [
  { num: "01", icon: "📱", title: "Pilih Koleksi", desc: "Browse koleksi kami di website atau hubungi kami via WhatsApp untuk konsultasi motif yang sesuai kebutuhan Anda." },
  { num: "02", icon: "💬", title: "Konfirmasi Pesanan", desc: "Beritahu motif, ukuran kain, dan jumlah yang diinginkan. Tim kami akan mengkonfirmasi ketersediaan dan total harga." },
  { num: "03", icon: "💳", title: "Pembayaran", desc: "Transfer ke rekening kami atau bayar via QRIS, GoPay, OVO, dan Dana. DP 50% untuk pemesanan custom batik tulis." },
  { num: "04", icon: "📦", title: "Pengiriman", desc: "Pesanan dikemas dengan aman menggunakan box khusus. Kami kirim via JNE, J&T, atau SiCepat ke seluruh Indonesia." },
];

export default function CaraOrder() {
  return (
    <section id="cara-order" className="py-16 md:py-24 bg-indigo-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-3">Mudah & Aman</p>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
            Cara <span className="text-indigo-600">Pemesanan</span>
          </h2>
          <p className="text-indigo-400 max-w-xl mx-auto text-sm md:text-base">Proses pemesanan yang simpel, aman, dan terpercaya</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 h-0.5 bg-indigo-200 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(50% + 2rem)" }} />
              )}
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-indigo-700 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                  {s.icon}
                </div>
                <div className="text-yellow-500 font-bold text-sm mb-2">{s.num}</div>
                <h3 className="font-bold text-indigo-900 text-lg mb-3">{s.title}</h3>
                <p className="text-indigo-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <a href="https://wa.me/6281234567890?text=Halo%20Batik%20Nala!%20Saya%20ingin%20memesan%20batik."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg transition-colors shadow-lg">
            <span>Pesan via WhatsApp</span>
            <span>📲</span>
          </a>
          <p className="text-indigo-400 text-sm mt-3">Respons cepat • Senin–Sabtu, 08.00–17.00 WIB</p>
        </div>
      </div>
    </section>
  );
}
