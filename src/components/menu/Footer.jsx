import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-b from-amber-900 to-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Logo */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-wide">
            The Pipe Cafe
          </h2>

          <p className="mt-3 text-amber-200">
            Kaliteli Kahve • Tatlı • Nargile • Lezzetli Atıştırmalıklar
          </p>
        </div>

        {/* Bilgiler */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Adres */}
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/20">
            <h3 className="mb-4 text-xl font-bold">📍 Adres</h3>

            <p className="text-amber-100">Serik / Antalya </p>

            <p className="mt-2 text-sm text-gray-300">
              Antalya, Serik, Merkez Mah., Yıldırım Beyazıt Cad., 22
            </p>
          </div>

          {/* İletişim */}
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/20">
            <h3 className="mb-4 text-xl font-bold">📞 İletişim</h3>

            <p>+90 554 799 03 55</p>
            <p>+90 534 209 30 90</p>

            <a
              href="https://instagram.com/thepipecoffee?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              <FaInstagram size={24} />
              Instagram'da Takip Et
            </a>
          </div>

          {/* Çalışma Saatleri */}
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/20">
            <h3 className="mb-4 text-xl font-bold">🕒 Çalışma Saatleri</h3>

            <div className="space-y-2">
              <p>Pazartesi - Perşembe</p>
              <p className="font-semibold text-amber-300">08:00 - 00:00</p>

              <hr className="border-white/20" />

              <p>Cuma - Pazar</p>
              <p className="font-semibold text-amber-300">08:00 - 02:00</p>
            </div>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Kafe Menüsü • Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
}
