import { useState, useRef } from "react";
import { useLocation } from "wouter";

export default function HomePage() {
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const trimmed = bookingId.trim();
    if (!trimmed) {
      setError("Пожалуйста, введите номер бронирования");
      inputRef.current?.focus();
      return;
    }
    setError("");
    navigate(`/booking/${trimmed}`);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem 1rem", position: "relative" }}>
      <div className="grid-bg" />

      {/* Glow */}
      <div style={{ position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="fade-in" style={{ width: "100%", maxWidth: "580px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #D4AF37)" }} />
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <path d="M20 2L24.5 14H38L27.3 21.5L31.8 33.5L20 26L8.2 33.5L12.7 21.5L2 14H15.5L20 2Z" fill="#D4AF37" opacity="0.9"/>
            </svg>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #D4AF37)" }} />
          </div>

          <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: "#9A7A30", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Эксклюзивный Сервис
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", fontWeight: 800, letterSpacing: "0.02em", lineHeight: 1.1, marginBottom: "0.5rem" }}>
            <span className="gold-text">VIP</span>
            <span style={{ color: "rgba(255,255,255,0.92)", marginLeft: "0.4rem" }}>Бронирование</span>
          </h1>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#7A6020", textTransform: "uppercase" }}>
            Артистов &amp; Премиум Проживание
          </p>
        </div>

        {/* Dots divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "2.5rem" }}>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4))" }} />
          {[0,1,2].map(i => <span key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: i===1 ? "#D4AF37" : "rgba(212,175,55,0.5)", display: "block" }} />)}
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.4))" }} />
        </div>

        {/* Card */}
        <div className="card-luxury fade-in-up" style={{ padding: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "rgba(255,255,255,0.92)", textAlign: "center", marginBottom: "0.5rem" }}>
            Проверить Бронирование
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#4a5280", textAlign: "center", marginBottom: "2rem", lineHeight: 1.6 }}>
            Введите ваш уникальный номер бронирования для просмотра<br/>подробной информации о вашем VIP-событии
          </p>

          <div style={{ position: "relative", marginBottom: "1rem" }}>
            <div style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9A7A30" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={bookingId}
              onChange={e => { setBookingId(e.target.value); setError(""); }}
              onKeyDown={e => e.key === "Enter" && handleSearch()}
              placeholder="Введите номер (например: 011356739)"
              className="input-luxury"
              style={{ padding: "1rem 1rem 1rem 3rem" }}
            />
          </div>

          {error && (
            <p style={{ color: "#f87171", fontSize: "0.85rem", marginBottom: "0.75rem", paddingLeft: "0.25rem" }}>
              {error}
            </p>
          )}

          <button
            onClick={handleSearch}
            className="btn-gold shimmer"
            style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", fontSize: "1rem", letterSpacing: "0.05em", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Найти Бронирование
          </button>

          <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
            <p style={{ fontSize: "0.75rem", color: "#3a4060" }}>
              Для тестирования введите:{" "}
              <button
                onClick={() => setBookingId("011356739")}
                style={{ color: "#C9A832", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}
              >
                #011356739
              </button>
            </p>
          </div>
        </div>

        <p className="fade-in-delayed" style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.72rem", color: "#2a3050" }}>
          Все бронирования защищены и конфиденциальны
        </p>
      </div>
    </div>
  );
}
