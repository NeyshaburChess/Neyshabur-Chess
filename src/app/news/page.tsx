export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "بیست و نهمین دوره مسابقات سریع",
      date: "۱۹ تیر ۱۴۰۵",
      image: "/news/news1.jpg",
      description: "ثبت‌نام مسابقات سریع آغاز شد.",
    },
    {
      id: 2,
      title: "شروع کلاس‌های تابستان",
      date: "۲۱ تیر ۱۴۰۵",
      image: "/news/news2.jpg",
      description: "ثبت‌نام کلاس‌های آموزشی آغاز شد.",
    },
    {
      id: 3,
      title: "انتشار قوانین جدید فیده",
      date: "۲۵ تیر ۱۴۰۵",
      image: "/news/news3.jpg",
      description: "آخرین قوانین رسمی فیده منتشر شد.",
    },
  ];
 
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#001F3F",
          marginBottom: "40px",
        }}
      >
        آخرین اخبار
      </h1>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "25px",
        }}
      >
        {news.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,.12)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />
 
            <div style={{ padding: "20px" }}>
              <h3>{item.title}</h3>
 
              <p
                style={{
                  color: "#888",
                }}
              >
                {item.date}
              </p>
 
              <p>{item.description}</p>
 
              <button
                style={{
                  background: "#001F3F",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                مطالعه خبر
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}