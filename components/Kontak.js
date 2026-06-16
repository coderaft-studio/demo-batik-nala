export default function Kontak() {
  return (
    <section id="kontak" className="py-16 md:py-24 bg-indigo-950 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-3">Hubungi Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap <span className="text-yellow-400">Membantu</span> Anda
          </h2>
          <p className="text-indigo-300 max-w-xl mx-auto text-sm md:text-base">
            Ada pertanyaan tentang produk, custom order, atau pembelian dalam jumlah besar? Hubungi kami sekarang.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 md:mb-14">
          {[
            { icon: "📍", title: "Alamat Workshop", lines: ["Jl. Batik Nala No. 12", "Kotagede, Yogyakarta 55172"] },
            { icon: "📞", title: "WhatsApp & Telepon", lines: ["+62 812-3456-7890", "Senin–Sabtu, 08.00–17.00"] },
            { icon: "📧", title: "Email", lines: ["hello@batiknala.id", "Balasan dalam 1x24 jam"] },
          ].map((item) => (
            <div key={item.title} className="bg-indigo-900 rounded-2xl p-6 md:p-7 text-center hover:bg-indigo-800 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-white mb-3">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-indigo-300 text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-indigo-300 mb-6 text-base md:text-lg">Cara termudah menghubungi kami:</p>
          <a href="https://wa.me/6281234567890?text=Halo%20Batik%20Nala!%20Saya%20tertarik%20dengan%20koleksi%20Anda."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl transition-colors shadow-2xl">
            <span>Chat WhatsApp Sekarang</span>
            <span>💬</span>
          </a>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
            {["Instagram", "TikTok", "Tokopedia", "Shopee"].map((s) => (
              <a key={s} href="#"
                className="bg-indigo-800 hover:bg-yellow-500 hover:text-indigo-950 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium transition-all">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
