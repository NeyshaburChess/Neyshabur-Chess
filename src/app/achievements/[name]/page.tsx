export default function PlayerResume({ params }) {
  const name = decodeURIComponent(params.name);

  return (
    <main style={{ padding: 30, maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        رزومه و افتخارات: {name}
      </h1>

      <p style={{ textAlign: "center", color: "#555" }}>
        رزومه این بازیکن به‌زودی تکمیل می‌شود...
      </p>
    </main>
  );
}