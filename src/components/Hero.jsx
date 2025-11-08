import { Phone, Mail, MapPin, Star } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-emerald-700 via-emerald-600 to-emerald-500 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm mb-4">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>Barátságos panzió a természet ölelésében</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Üdvözöljük a Zöld Liget Panzióban
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              Pihentető szobák, házias reggeli és nyugodt környezet – tökéletes
              választás pároknak, családoknak és kirándulóknak.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#rooms"
                className="inline-flex items-center justify-center rounded-lg bg-white text-emerald-700 font-medium px-5 py-3 shadow hover:shadow-md transition"
              >
                Szobák és árak
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white font-medium px-5 py-3 hover:bg-white/10 transition"
              >
                Foglalás és elérhetőség
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-md px-3 py-2">
                <MapPin className="w-4 h-4" />
                <span>Csendes, zöldövezeti elhelyezkedés</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-md px-3 py-2">
                <Phone className="w-4 h-4" />
                <span>+36 30 123 4567</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-md px-3 py-2">
                <Mail className="w-4 h-4" />
                <span>info@zoldligetpanzio.hu</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                alt="Hangulatos panzió homlokzata"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
