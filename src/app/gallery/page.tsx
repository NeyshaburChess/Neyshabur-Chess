export default function Gallery() {
  // اینجا فقط یک آرایه نمونه گذاشتم، می‌تونی عکس‌های واقعی خودت رو جایگزین کنی
  const images = [
    { src: "/images/photo1.jpg", title: "عکس ۱" },
    { src: "/images/photo2.jpg", title: "عکس ۲" },
    { src: "/images/photo3.jpg", title: "عکس ۳" },
    // هر تعداد عکس که بخوای اضافه کن
  ];

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>گالری تصاویر</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              border: "3px solid #001F3F",   // هاله سورمه‌ای
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              textAlign: "center",
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <p style={{ padding: "10px", fontSize: "14px" }}>{img.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}