import Link from "next/link";
 
const categories = [
  {
    title: "📖 افتتاحیه‌ها",
    description:
      "آشنایی با مهم‌ترین سیستم‌های شروع بازی و ایده‌های اصلی هر افتتاحیه.",
    link: "/library/openings",
  },
  {
    title: "🎯 تاکتیک",
    description:
      "آموزش تاکتیک‌های پایه و پیشرفته همراه با مثال‌ها و تمرین‌های کاربردی.",
    link: "/library/tactics",
  },
  {
    title: "♟️ استراتژی",
    description:
      "اصول بازی در وسط‌بازی، برنامه‌ریزی، ساختار پیاده و تصمیم‌گیری صحیح.",
    link: "/library/strategy",
  },
  {
    title: "👑 آخربازی",
    description:
      "آموزش انواع آخربازی و تکنیک‌های تبدیل برتری به پیروزی.",
    link: "/library/endgames",
  },
  {
    title: "📚 کتاب‌های آموزشی",
    description:
      "مجموعه‌ای از کتاب‌های آموزشی شطرنج برای تمامی سطوح.",
    link: "/library/books",
  },
  {
    title: "🏆 بازی‌های برتر تاریخ",
    description:
      "تحلیل مشهورترین و زیباترین بازی‌های تاریخ شطرنج.",
    link: "/library/great-games",
  },
];
 
export default function LibraryPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#001F3F",
          marginBottom: "15px",
          fontSize: "2.3rem",
        }}
      >
        📚 کتابخانه آنلاین
      </h1>
 
      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "45px",
          fontSize: "1.05rem",
        }}
      >
        مجموعه‌ای از منابع آموزشی شطرنج شامل افتتاحیه‌ها، تاکتیک، استراتژی،
        آخربازی، کتاب‌های آموزشی و بازی‌های برتر تاریخ.
      </p>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {categories.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,.12)",
              transition: "0.3s",
            }}
          >
            <h2
              style={{
                color: "#001F3F",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h2>
 
            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              {item.description}
            </p>
 
            <Link
              href={item.link}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                background: "#001F3F",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              ورود به بخش
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}


