export default function News() {
  const newsItems = [
    { title: "مسابقه قهرمانی نیشابور", date: "1405/04/10", desc: "برگزاری مسابقه قهرمانی در سالن ورزشی..." },
    { title: "کلاس آموزش شطرنج", date: "1405/04/15", desc: "شروع دوره جدید آموزش برای نوجوانان..." },
  ];

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>اخبار</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        {newsItems.map((item, i) => (
          <div
            key={i}
            style={{
              border: "3px solid #001F3F",   // هاله سورمه‌ای
              borderRadius: "12px",
              background: "#fff",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>{item.title}</h2>
            <p style={{ fontSize: "14px", opacity: 0.7 }}>{item.date}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}