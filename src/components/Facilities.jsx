import { Leaf, UtensilsCrossed, Waves, Car, Wifi, Coffee, Trees } from "lucide-react";

const items = [
  { icon: Wifi, title: "Gyors Wi‑Fi", desc: "Stabil internet a pihenéshez és munkához is." },
  { icon: Coffee, title: "Házias reggeli", desc: "Friss, helyi alapanyagokból minden reggel." },
  { icon: Car, title: "Ingyenes parkoló", desc: "Zárt udvari parkolási lehetőség vendégeinknek." },
  { icon: Waves, title: "Wellness sarok", desc: "Szauna és jacuzzi előzetes egyeztetéssel." },
  { icon: Trees, title: "Kert és terasz", desc: "Csendes pihenőkuckók és grill lehetőség." },
  { icon: UtensilsCrossed, title: "Étkezési lehetőség", desc: "Ebéd- és vacsorajavaslatok a közelben." },
];

export default function Facilities() {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Leaf className="w-6 h-6 text-emerald-700" />
          <h2 className="text-3xl font-semibold text-emerald-800">Szolgáltatások</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-6 border border-emerald-900/10 shadow-sm hover:shadow-md transition"
            >
              <Icon className="w-6 h-6 text-emerald-700" />
              <h3 className="mt-3 font-semibold text-emerald-900">{title}</h3>
              <p className="text-emerald-900/70 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
