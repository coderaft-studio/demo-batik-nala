export default function Kontak() {
  return (
    <section id="kontak" className="py-24 bg-indigo-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-3">Hubungi Kami</p>
          <h2 className="text-4xl font-bold mb-4">
            Siap <span className="text-yellow-400">Membantu</span> Anda
          </h2>
          <p className="text-indigo-300 max-w-xl mx-auto">
            Ada pertanyaan tentang produk, custom order, atau pembelian dalam jumlah besar? Hubungi kami sekarang.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[
            { icon: "📍", title: "Alamat Workshop", lines: ["Jl. Batik Nala No. 12", "Kotagede, Yogyakarta 55172"] },
            { icon: "📞", title: "WhatsApp & Telepon", lines: ["+62 812-3456-7890", "Senin–Sabtu, 08.00–17.00"] },
            { icon: "📧", title: "Email", lines: ["hello@batiknala.id", "Balasan dalam 1x24 jam"] },
          ].map((item) => (
            <div key={item.title} className="bg-indigo-900 rounded-2xl p-7 text-center hover:bg-indigo-800 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-white mb-3">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-indigo-300 text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-indigo-300 mb-6 text-lg">Cara termudah menghubungi kami:</p>
          <a href="https://wa.me/6281234567890?text=Halo%20Batik%20Nala!%20Saya%20tertarik%20dengan%20koleksi%20Anda."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-12 py-5 rounded-full font-bold text-xl transition-colors shadow-2xl">
            <span>Chat WhatsApp Sekarang</span>
            <span>💬</span>
          </a>
          <div className="flex justify-center gap-4 mt-8">
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
