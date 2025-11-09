import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";

const dict = {
  hu: {
    meta: {
      title: "Szeltersz • Seltersz – Panzió a természet ölelésében",
      description:
        "Modern, gyors és többnyelvű panzió weboldal Szelterszen. Online foglalás, fizetés és programok egy helyen.",
    },
    nav: { rooms: "Szobák", booking: "Foglalás", language: "Nyelv", cta: "Foglalok" },
    hero: {
      badge: "Hargita megye • Sóskút, erdők és tiszta levegő",
      title: "Szeltersz – pihenés a Hargita lábánál",
      subtitle:
        "Barátságos vendégház családoknak és pároknak. Válasszon dátumot, foglaljon szobát, és fedezze fel programjainkat!",
      ctaPrimary: "Foglalás most",
      ctaSecondary: "Szobáink megtekintése",
      imageAlt: "Hangulatos panzió erdei környezetben",
    },
    rooms: { standard: "Standard", family: "Családi", suite: "Lakosztály" },
    booking: {
      title: "Foglalás",
      subtitle: "Válassza ki az érkezés és távozás dátumát, és adja meg a vendégek számát.",
      checkin: "Érkezés",
      checkout: "Távozás",
      guests: "Vendégek",
      room: "Szoba",
      cta: "Elérhetőség ellenőrzése",
      mock: "Demó: itt indulna a foglalási folyamat és a fizetés.",
    },
    faq: {
      subtitle: "Gyakran ismételt kérdések Szelterszről és a foglalásról.",
      items: [
        { q: "Lehet-e online fizetni?", a: "Igen, Stripe integrációval bankkártyával fizethet." },
        { q: "Kapok számlát?", a: "Igen, a rendszer Oblio.eu-n keresztül állít ki számlát." },
        { q: "Van-e parkoló?", a: "Ingyenes parkoló elérhető a vendégek számára." },
        { q: "Beszélünk magyarul és románul?", a: "Igen, magyarul, románul és angolul is segítünk." },
      ],
    },
  },
  ro: {
    meta: {
      title: "Szeltersz • Selters – Pensiune în mijlocul naturii",
      description:
        "Site modern și rapid, multilingv. Rezervări online, plăți și experiențe într-un singur loc.",
    },
    nav: { rooms: "Camere", booking: "Rezervare", language: "Limbă", cta: "Rezervă" },
    hero: {
      badge: "Județul Harghita • Izvor sărat și păduri",
      title: "Szelters – relaxare la poalele Hășmașului",
      subtitle:
        "Pensiune primitoare pentru familii și cupluri. Alege datele, rezervă camera și descoperă experiențele noastre!",
      ctaPrimary: "Rezervă acum",
      ctaSecondary: "Vezi camerele",
      imageAlt: "Pensiune cochetă în decor forestier",
    },
    rooms: { standard: "Standard", family: "Family", suite: "Suită" },
    booking: {
      title: "Rezervare",
      subtitle:
        "Selectează datele de sosire și plecare și numărul de oaspeți.",
      checkin: "Sosire",
      checkout: "Plecare",
      guests: "Oaspeți",
      room: "Cameră",
      cta: "Verifică disponibilitatea",
      mock: "Demo: aici ar porni procesul de rezervare și plată.",
    },
    faq: {
      subtitle: "Întrebări frecvente despre Szelters și rezervare.",
      items: [
        { q: "Pot plăti online?", a: "Da, integrăm Stripe pentru plăți cu cardul." },
        { q: "Primesc factură?", a: "Da, sistemul emite factură prin Oblio.eu." },
        { q: "Există parcare?", a: "Parcare gratuită pentru oaspeți." },
        { q: "Ce limbi vorbiți?", a: "Vorbim maghiară, română și engleză." },
      ],
    },
  },
  en: {
    meta: {
      title: "Szeltersz • Selters – Guesthouse in nature",
      description:
        "Modern, fast, multilingual website for the guesthouse. Reserve online, pay and add experiences in one flow.",
    },
    nav: { rooms: "Rooms", booking: "Booking", language: "Language", cta: "Book now" },
    hero: {
      badge: "Harghita County • Salt spring, forests and fresh air",
      title: "Szeltersz – retreat at the foot of the mountains",
      subtitle:
        "Friendly guesthouse for families and couples. Pick your dates, book a room and explore our experiences!",
      ctaPrimary: "Start booking",
      ctaSecondary: "View rooms",
      imageAlt: "Cozy guesthouse in a forest setting",
    },
    rooms: { standard: "Standard", family: "Family", suite: "Suite" },
    booking: {
      title: "Booking",
      subtitle: "Choose check‑in/out and number of guests.",
      checkin: "Check‑in",
      checkout: "Check‑out",
      guests: "Guests",
      room: "Room",
      cta: "Check availability",
      mock: "Demo: booking and payment would start here.",
    },
    faq: {
      subtitle: "Frequently asked questions about Szeltersz and booking.",
      items: [
        { q: "Can I pay online?", a: "Yes, Stripe card payments are supported." },
        { q: "Do I get an invoice?", a: "Yes, invoices are issued through Oblio.eu." },
        { q: "Is there parking?", a: "Free parking is available for guests." },
        { q: "What languages do you speak?", a: "We speak Hungarian, Romanian and English." },
      ],
    },
  },
};

function useI18n(lang) {
  return useMemo(() => {
    const d = dict[lang] ?? dict.hu;
    const t = (key) => key.split(".").reduce((acc, k) => acc?.[k], d);
    return { t, meta: d.meta };
  }, [lang]);
}

function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold">Szeltersz • Selters</h3>
          <p className="text-emerald-100/80 mt-2 text-sm">
            Vendégház a természet ölelésében – modern foglalással és többnyelvű kiszolgálással.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Információ</h3>
          <ul className="mt-2 space-y-1 text-sm text-emerald-100/80">
            <li><a href="#booking" className="hover:text-white">Foglalás</a></li>
            <li><a href="#faq" className="hover:text-white">GYIK</a></li>
            <li><a href="#rooms" className="hover:text-white">Szobák</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Elérhetőség</h3>
          <p className="text-emerald-100/80 mt-2 text-sm">Szeltersz, Hargita megye • +40 000 000 000</p>
        </div>
        <div>
          <h3 className="font-semibold">Közösségi</h3>
          <div className="mt-3 flex gap-3">
            <a href="#" className="text-emerald-100/80 hover:text-white">Facebook</a>
            <a href="#" className="text-emerald-100/80 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-emerald-100/70 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Szeltersz • Selters</span>
          <a href="#booking" className="hover:text-white">Foglalás</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState("hu");
  const { t, meta } = useI18n(lang);

  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900">
      {/* Basic SEO structure: title/description + semantic headings */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Booking t={t} />
        <FAQ t={t} />
      </main>
      <Footer />
    </div>
  );
}
