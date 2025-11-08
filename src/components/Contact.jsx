import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    // In a real app we'd send this to the backend. For now, we just demo UI feedback.
    setStatus(`Köszönjük, ${data.name}! Hamarosan felvesszük Önnel a kapcsolatot.`);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-emerald-800">Kapcsolat és foglalás</h2>
            <p className="text-emerald-900/70 mt-2">
              Kérdése van, időpontot foglalna? Írjon nekünk vagy hívjon bizalommal.
            </p>
            <div className="mt-6 space-y-3 text-emerald-900/90">
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-700"/> +36 30 123 4567</div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-emerald-700"/> info@zoldligetpanzio.hu</div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-emerald-700"/> 1111 Budapest, Zöld liget utca 10.</div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden">
              <iframe
                title="Térkép"
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Budapest&output=embed"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-emerald-50 rounded-2xl p-6 border border-emerald-900/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-emerald-900/80">Név</label>
                <input name="name" required className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>
              <div>
                <label className="text-sm text-emerald-900/80">E-mail</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-emerald-900/80">Üzenet</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
            </div>
            <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-700 text-white font-medium px-5 py-3 hover:bg-emerald-600 transition">
              <Send className="w-4 h-4" /> Üzenet elküldése
            </button>
            {status && (
              <p className="mt-3 text-emerald-800 font-medium">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
