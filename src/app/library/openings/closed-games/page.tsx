import Link from "next/link";
 
const openings = [
  {
    id: "sicilian-defense",
    name: "دفاع سیسیلی",
    english: "Sicilian Defense",
    moves: "1. e4 c5",
    description:
      "یکی از محبوب‌ترین دفاع‌ها در برابر حرکت e4 با ساختارهای پیچیده و تهاجمی.",
  },
 
  {
    id: "ruy-lopez",
    name: "بازی اسپانیایی",
    english: "Ruy Lopez",
    moves: "1. e4 e5 2. Nf3 Nc6 3. Bb5",
    description:
      "یکی از قدیمی‌ترین و عمیق‌ترین شروع‌های کلاسیک شطرنج.",
  },
 
  {
    id: "italian-game",
    name: "بازی ایتالیایی",
    english: "Italian Game",
    moves: "1. e4 e5 2. Nf3 Nc6 3. Bc4",
    description:
      "شروعی مناسب برای یادگیری توسعه سریع مهره‌ها و حمله.",
  },
 
  {
    id: "queens-gambit",
    name: "گامبی وزیر",
    english: "Queen's Gambit",
    moves: "1. d4 d5 2. c4",
    description:
      "شروعی مشهور برای کنترل مرکز صفحه.",
  },
 
  {
    id: "french-defense",
    name: "دفاع فرانسوی",
    english: "French Defense",
    moves: "1. e4 e6",
    description:
      "دفاعی محکم با ساختار پیاده‌ای خاص.",
  },
 
  {
    id: "caro-kann-defense",
    name: "دفاع کاروکان",
    english: "Caro-Kann Defense",
    moves: "1. e4 c6",
    description:
      "دفاعی سالم و محبوب برای سیاه.",
  },
 
  {
    id: "king-indian-defense",
    name: "هندی شاه",
    english: "King's Indian Defense",
    moves: "1. d4 Nf6 2. c4 g6",
    description:
      "شروعی تهاجمی با حمله‌های پیچیده.",
  },
 
  {
    id: "nimzo-indian-defense",
    name: "نیمزو هندی",
    english: "Nimzo-Indian Defense",
    moves: "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4",
    description:
      "یکی از بهترین پاسخ‌ها مقابل d4.",
  },
 
  {
    id: "grunfeld-defense",
    name: "دفاع گرونفلد",
    english: "Grunfeld Defense",
    moves: "1. d4 Nf6 2. c4 g6 3. Nc3 d5",
    description:
      "دفاعی فعال برای مبارزه با مرکز.",
  },
 
  {
    id: "slav-defense",
    name: "دفاع اسلاو",
    english: "Slav Defense",
    moves: "1. d4 d5 2. c4 c6",
    description:
      "شروعی محکم و قابل اعتماد.",
  },
 
  {
    id: "english-opening",
    name: "شروع انگلیسی",
    english: "English Opening",
    moves: "1. c4",
    description:
      "شروعی انعطاف‌پذیر با کنترل جناح وزیر.",
  },
 
  {
    id: "reti-opening",
    name: "شروع رتی",
    english: "Reti Opening",
    moves: "1. Nf3",
    description:
      "شروع مدرن با کنترل مرکز از فاصله دور.",
  },
 
  {
    id: "bird-opening",
    name: "شروع برد",
    english: "Bird Opening",
    moves: "1. f4",
    description:
      "شروع غیرمعمول و تهاجمی.",
  },
];
 
 
export default function OpeningsPage() {
  return (
    <main
      style={{
        padding: 30,
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
 
      <h1
        style={{
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        شروع‌های بازی شطرنج
      </h1>
 
 
      <p
        style={{
          textAlign: "center",
          color: "#666",
        }}
      >
        بررسی افتتاحیه‌ها، حرکات اصلی و نمایش بازی
      </p>
 
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: 20,
          marginTop: 40,
        }}
      >
 
        {openings.map((opening) => (
 
          <div
            key={opening.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 15,
              padding: 20,
              background: "#fff",
            }}
          >
 
            <h2>
              {opening.name}
            </h2>
 
 
            <h3
              style={{
                color: "#777",
                fontSize: 16,
              }}
            >
              {opening.english}
            </h3>
 
 
            <p>
              حرکت شروع:
              <br />
              <b>{opening.moves}</b>
            </p>
 
 
            <p>
              {opening.description}
            </p>
 
 
            <Link href={`/library/openings/${opening.id}`}>
              <button
                style={{
                  marginTop: 15,
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                مشاهده شروع بازی ♟
              </button>
            </Link>
 
          </div>
 
        ))}
 
      </div>
 
    </main>
  );
}