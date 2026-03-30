import { useParams, useLocation } from "wouter";

const BOOKING = {
  id: "011356739",
  artist: "Дима Билан",
  artistTag: "Приватное Бронирование",
  fanName: "МАРИЯ",
  location: "Four Seasons Hotel Moscow",
  roomType: "Номер Premier King",
  dates: [" марта 2025", " марта 2026"],
  status: "ПОЛНОСТЬЮ ОПЛАЧЕНО И ПОДТВЕРЖДЕНО",
  category: "VIP Встреча",
  bookedOn: "26 марта 2026",
  reference: "FSM-VIP-2025-MB",
};

export default function BookingConfirmation() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const isValid = id === "011356739";

  if (!isValid) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
        <div className="card-luxury fade-in-up" style={{ padding: "3rem 2.5rem", maxWidth: "420px", width: "100%", textAlign: "center" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "0.75rem" }}>
            Бронирование не найдено
          </h2>
          <p style={{ color: "#4a5280", fontSize: "0.875rem", marginBottom: "0.5rem" }}>
            Номер <span style={{ color: "#C9A832", fontFamily: "monospace" }}>#{id}</span> не существует в системе.
          </p>
          <p style={{ color: "#3a4060", fontSize: "0.8rem", marginBottom: "2rem" }}>
            Проверьте номер и попробуйте снова.
          </p>
          <button onClick={() => navigate("/")} className="btn-gold" style={{ padding: "0.75rem 1.75rem", borderRadius: "0.75rem", fontSize: "0.9rem" }}>
            ← Вернуться к поиску
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", padding: "2.5rem 1rem" }}>
      <div className="grid-bg" />
      <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Top nav */}
        <div className="no-print fade-in" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
          <button onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#C9A832", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "0.875rem" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Назад к поиску
          </button>
          <button onClick={() => window.print()} className="btn-gold" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", borderRadius: "0.75rem", fontSize: "0.875rem" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Распечатать / PDF
          </button>
        </div>

        {/* Main card */}
        <div className="card-luxury fade-in-up" style={{ overflow: "hidden", marginBottom: "1rem" }}>
          {/* Gold top stripe */}
          <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #D4AF37, #A07820, #D4AF37, transparent)" }} />

          <div style={{ padding: "2.5rem 2.5rem 2rem" }}>
            {/* Status */}
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <div className="status-confirmed" style={{ margin: "0 auto", width: "fit-content" }}>
                <div className="dot-pulse" />
                <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#4ade80", textTransform: "uppercase" }}>
                  {BOOKING.status}
                </span>
              </div>
            </div>

            {/* Brand */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <div style={{ height: "1px", width: "40px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5))" }} />
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                  <path d="M20 2L24.5 14H38L27.3 21.5L31.8 33.5L20 26L8.2 33.5L12.7 21.5L2 14H15.5L20 2Z" fill="#D4AF37" opacity="0.9"/>
                </svg>
                <div style={{ height: "1px", width: "40px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.5))" }} />
              </div>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "#7A6020", textTransform: "uppercase" }}>
                Подтверждение VIP Бронирования
              </p>
            </div>

            {/* Booking ID */}
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#4a5280", textTransform: "uppercase", marginBottom: "0.5rem" }}>Номер бронирования</p>
              <div style={{ display: "inline-block", background: "#080b14", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "0.5rem", padding: "0.4rem 1.5rem" }}>
                <span style={{ fontFamily: "monospace", fontSize: "1.3rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.15em" }}>#{BOOKING.id}</span>
              </div>
            </div>

            {/* Artist */}
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.22)", borderRadius: "9999px", padding: "0.4rem 1rem", marginBottom: "0.75rem" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
                </svg>
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C9A832", textTransform: "uppercase", fontWeight: 600 }}>{BOOKING.artistTag}</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 6vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1 }} className="gold-text">
                {BOOKING.artist}
              </h1>
            </div>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.25))" }} />
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(212,175,55,0.5)" }} />
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.25))" }} />
            </div>

            {/* Guest */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#4a5280", textTransform: "uppercase", marginBottom: "0.4rem" }}>Гость</p>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "rgba(255,255,255,0.92)", letterSpacing: "0.12em" }}>{BOOKING.fanName}</h2>
            </div>
          </div>
        </div>

        {/* Detail cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1rem" }} className="fade-in-up-2">
          <div className="card-luxury" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ padding: "0.5rem", background: "rgba(212,175,55,0.1)", borderRadius: "0.5rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", color: "#9A7A30", textTransform: "uppercase", fontWeight: 600 }}>Место встречи</p>
            </div>
            <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", lineHeight: 1.3 }}>{BOOKING.location}</p>
          </div>
          <div className="card-luxury" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ padding: "0.5rem", background: "rgba(212,175,55,0.1)", borderRadius: "0.5rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", color: "#9A7A30", textTransform: "uppercase", fontWeight: 600 }}>Тип номера</p>
            </div>
            <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", lineHeight: 1.3 }}>{BOOKING.roomType}</p>
          </div>
        </div>

        {/* Dates */}
        <div className="card-luxury fade-in-up-2" style={{ padding: "1.75rem", marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ padding: "0.5rem", background: "rgba(212,175,55,0.1)", borderRadius: "0.5rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", color: "#9A7A30", textTransform: "uppercase", fontWeight: 600 }}>Даты оплаченного пребывания</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {BOOKING.dates.map((date, i) => (
              <div key={i} style={{ flex: 1, minWidth: "140px", padding: "1rem 1.25rem", borderRadius: "0.75rem", textAlign: "center", background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(160,120,32,0.06) 100%)", border: "1px solid rgba(212,175,55,0.28)" }}>
                <p style={{ fontSize: "0.65rem", color: "#7A6020", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.3rem" }}>День {i + 1}</p>
                <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "#D4AF37" }}>{date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="card-luxury fade-in-up-3" style={{ padding: "1.75rem", marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ padding: "0.5rem", background: "rgba(212,175,55,0.1)", borderRadius: "0.5rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", color: "#9A7A30", textTransform: "uppercase", fontWeight: 600 }}>Детали бронирования</p>
          </div>
          <div>
            {[
              { label: "Категория события", value: BOOKING.category, style: {} },
              { label: "Дата оформления", value: BOOKING.bookedOn, style: {} },
              { label: "Справочный номер", value: BOOKING.reference, style: { fontFamily: "monospace", color: "#C9A832" } },
              { label: "Статус оплаты", value: "Полностью оплачено", style: { color: "#4ade80" } },
            ].map((row, i) => (
              <div key={i} className="detail-row" style={{ paddingTop: i > 0 ? "1rem" : 0 }}>
                <span style={{ fontSize: "0.7rem", color: "#4a5280", textTransform: "uppercase", letterSpacing: "0.12em", flexShrink: 0 }}>{row.label}</span>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", textAlign: "right", ...row.style }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Confirmed note */}
        <div className="fade-in-up-3" style={{ borderRadius: "1rem", padding: "1.5rem", background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.28)", display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "2rem" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div>
            <p style={{ color: "#4ade80", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.35rem", letterSpacing: "0.03em" }}>Бронирование полностью подтверждено</p>
            <p style={{ color: "rgba(74,222,128,0.6)", fontSize: "0.8rem", lineHeight: 1.6 }}>
              Ваше VIP-бронирование подтверждено и полностью оплачено. Все детали вашей встречи с артистом согласованы. Пожалуйста, сохраните этот документ для вашей записи.
            </p>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="no-print" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <button
            onClick={() => window.print()}
            className="btn-gold shimmer"
            style={{ flex: 1, padding: "1rem", borderRadius: "0.75rem", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", minWidth: "180px" }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Распечатать бронирование
          </button>
          <button
            onClick={() => navigate("/")}
            className="btn-secondary"
            style={{ flex: 1, padding: "1rem", borderRadius: "0.75rem", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", minWidth: "160px" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Новый поиск
          </button>
        </div>
      </div>
    </div>
  );
}
