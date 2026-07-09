import Link from "next/link";
 
const articles = [
  {
    title: "تاریخچه شطرنج؛ از هند تا جهان امروز",
    description:
      "آشنایی با تاریخچه شطرنج، مسیر گسترش آن در جهان و روند شکل‌گیری قوانین امروزی.",
    link: "/articles/chess-history",
  },
  {
    title: "اهمیت آموزش شطرنج در رشد فکری کودکان",
    description:
      "بررسی تأثیر شطرنج بر افزایش تمرکز، حافظه، خلاقیت و مهارت حل مسئله در کودکان.",
    link: "/articles/children-chess",
  },
  {
    title: "اصول اولیه شروع بازی برای بازیکنان تازه‌کار",
    description:
      "مهم‌ترین اصول آغاز بازی شامل کنترل مرکز، توسعه مهره‌ها، امنیت شاه و اشتباهات رایج.",
    link: "/articles/opening-principles",
  },
  {
    title: "چگونه برنامه تمرینی مناسب برای پیشرفت در شطرنج داشته باشیم؟",
    description:
      "راهنمای جامع برنامه‌ریزی تمرین روزانه برای افزایش قدرت بازی و پیشرفت مستمر.",
    link: "/articles/training-plan",
  },
  {
    title: "اشتباهات رایج بازیکنان آماتور در مسابقات",
    description:
      "اشتباهاتی که باعث از دست رفتن امتیاز می‌شوند و راهکارهایی برای جلوگیری از آن‌ها.",
    link: "/articles/common-mistakes",
  },
  {
    title: "اهمیت مسابقات رسمی و ریتد در پیشرفت شطرنج‌بازان",
    description:
      "نقش مسابقات رسمی در افزایش تجربه، کسب ریتینگ و پیشرفت بازیکنان.",
    link: "/articles/rated-tournaments",
  },
];
 
export default function ArticlesPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2.2rem",
        }}
      >
        مقالات شطرنج
      </h1>
 
      <div
        style={{
          display: "grid",
          gap: "25px",
        }}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "24px",
              backgroundColor: "#fff",
              boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginBottom: "12px" }}>
              {article.title}
            </h2>
 
            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              {article.description}
            </p>
 
            <Link
              href={article.link}
              style={{
                display: "inline-block",
                backgroundColor: "#0f172a",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              مطالعه مقاله
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
