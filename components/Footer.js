export default function Footer() {
  return (
    <footer className="bg-black text-indigo-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="text-white font-bold text-2xl mb-3">🪡 Batik<span className="text-yellow-400">Nala</span></div>
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              Menghadirkan keindahan batik Nusantara dengan kualitas premium dan sentuhan modern sejak 2008.
            </p>
            <div className="flex gap-3">
              {["IG", "TK", "TO", "SH"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 bg-indigo-900 hover:bg-yellow-500 hover:text-indigo-950 rounded-full flex items-center justify-center text-xs font-bold transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Koleksi</h4>
            <ul className="space-y-2 text-sm">
              {["Batik Tulis", "Batik Cap", "Batik Kombinasi", "Custom Order", "Grosir"].map((m) => (
                <li key={m}><a href="#koleksi" className="hover:text-yellow-400 transition-colors">{m}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Info</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Kotagede, Yogyakarta</li>
              <li>📞 +62 812-3456-7890</li>
              <li>🕙 Senin–Sabtu 08.00–17.00</li>
              <li className="pt-2">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full text-xs font-semibold inline-block transition-colors">
                  WhatsApp Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-indigo-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Batik Nala. Hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
