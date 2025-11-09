export default function FAQ({ t }) {
  const faqs = t("faq.items");
  return (
    <section id="faq" className="bg-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-emerald-800">FAQ</h2>
        <p className="text-emerald-900/70 mt-1">{t("faq.subtitle")}</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl bg-white p-5 border border-emerald-900/10 shadow-sm">
              <h3 className="font-semibold text-emerald-900">{f.q}</h3>
              <p className="text-emerald-900/80 mt-1 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
