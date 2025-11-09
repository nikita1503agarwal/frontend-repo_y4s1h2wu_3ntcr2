import { CalendarDays, Users, BedDouble } from "lucide-react";
import { useState } from "react";

export default function Booking({ t }) {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    checkin: today,
    checkout: today,
    guests: 2,
    room: "standard",
  });

  function update(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e) {
    e.preventDefault();
    alert(t("booking.mock"));
  }

  return (
    <section id="booking" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-emerald-800">{t("booking.title")}</h2>
        <p className="text-emerald-900/70 mt-1">{t("booking.subtitle")}</p>

        <form onSubmit={submit} className="mt-6 grid md:grid-cols-5 gap-4 bg-emerald-50 p-4 rounded-2xl border border-emerald-900/10">
          <label className="flex flex-col text-sm text-emerald-900/80">
            <span className="mb-1 flex items-center gap-2"><CalendarDays className="w-4 h-4"/>{t("booking.checkin")}</span>
            <input type="date" value={form.checkin} min={today} onChange={(e)=>update("checkin", e.target.value)} className="rounded-lg border border-emerald-900/20 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
          </label>

          <label className="flex flex-col text-sm text-emerald-900/80">
            <span className="mb-1 flex items-center gap-2"><CalendarDays className="w-4 h-4"/>{t("booking.checkout")}</span>
            <input type="date" value={form.checkout} min={form.checkin} onChange={(e)=>update("checkout", e.target.value)} className="rounded-lg border border-emerald-900/20 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
          </label>

          <label className="flex flex-col text-sm text-emerald-900/80">
            <span className="mb-1 flex items-center gap-2"><Users className="w-4 h-4"/>{t("booking.guests")}</span>
            <input type="number" min="1" max="8" value={form.guests} onChange={(e)=>update("guests", e.target.value)} className="rounded-lg border border-emerald-900/20 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
          </label>

          <label className="flex flex-col text-sm text-emerald-900/80">
            <span className="mb-1 flex items-center gap-2"><BedDouble className="w-4 h-4"/>{t("booking.room")}</span>
            <select value={form.room} onChange={(e)=>update("room", e.target.value)} className="rounded-lg border border-emerald-900/20 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600">
              <option value="standard">{t("rooms.standard")}</option>
              <option value="family">{t("rooms.family")}</option>
              <option value="suite">{t("rooms.suite")}</option>
            </select>
          </label>

          <button className="self-end rounded-lg bg-emerald-700 text-white font-medium px-4 py-2 hover:bg-emerald-600 transition">
            {t("booking.cta")}
          </button>
        </form>
      </div>
    </section>
  );
}
