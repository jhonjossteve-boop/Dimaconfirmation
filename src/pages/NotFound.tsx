import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div className="card-luxury" style={{ padding: "3rem 2.5rem", maxWidth: "420px", width: "100%", textAlign: "center" }}>
        <h1 className="gold-text" style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "0.5rem" }}>404</h1>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2rem" }}>Страница не найдена</p>
        <button onClick={() => navigate("/")} className="btn-gold" style={{ padding: "0.75rem 1.75rem", borderRadius: "0.75rem", fontSize: "0.9rem" }}>
          На главную
        </button>
      </div>
    </div>
  );
}
