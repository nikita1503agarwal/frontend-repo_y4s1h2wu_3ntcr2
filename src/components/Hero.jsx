export default function Hero({ t }) {
  return (
    <header id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-700 via-emerald-600 to-emerald-500 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <p className="text-sm uppercase tracking-wider text-white/90">{t("hero.badge")}</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-semibold leading-tight">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-white/95 text-lg">{t("hero.subtitle")}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-lg bg-white text-emerald-700 font-medium px-5 py-3 shadow hover:shadow-md transition"
              >
                {t("hero.ctaPrimary")}
              </a>
              <a
                href="#rooms"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white font-medium px-5 py-3 hover:bg-white/10 transition"
              >
                {t("hero.ctaSecondary")}
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                alt={t("hero.imageAlt")}
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
