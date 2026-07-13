import Link from "next/link";
 
const openings = [
  {
    title: "Queen's Gambit",
    subtitle: "گامبی وزیر",
    moves: "1.d4 d5 2.c4",
    eco: "D06-D69",
    difficulty: "⭐⭐⭐⭐⭐",
    href: "/library/openings/closed-games/queens-gambit",
  },
  {
    title: "Slav Defense",
    subtitle: "دفاع اسلاو",
    moves: "1.d4 d5 2.c4 c6",
    eco: "D10-D19",
    difficulty: "⭐⭐⭐⭐☆",
    href: "/library/openings/closed-games/slav-defense",
  },
  {
    title: "King's Indian Defense",
    subtitle: "دفاع هندی شاه",
    moves: "1.d4 Nf6 2.c4 g6",
    eco: "E60-E99",
    difficulty: "⭐⭐⭐⭐⭐",
    href: "/library/openings/closed-games/kings-indian-defense",
  },
  {
    title: "Nimzo-Indian Defense",
    subtitle: "دفاع نیمزو هندی",
    moves: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4",
    eco: "E20-E59",
    difficulty: "⭐⭐⭐⭐⭐",
    href: "/library/openings/closed-games/nimzo-indian-defense",
  },
  {
    title: "Grünfeld Defense",
    subtitle: "دفاع گرونفلد",
    moves: "1.d4 Nf6 2.c4 g6 3.Nc3 d5",
    eco: "D70-D99",
    difficulty: "⭐⭐⭐⭐⭐",
    href: "/library/openings/closed-games/grunfeld-defense",
  },
];
 
export default function ClosedGamesPage() {
  return (
    <main
      style={{
        maxWidth: 1250,
        margin: "0 auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Closed Games
      </h1>
 
      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: 18,
          marginBottom: 40,
        }}
      >
        خانواده شروع‌هایی که معمولاً با
        <strong> 1.d4 </strong>
        آغاز می‌شوند و بر پایه کنترل مرکز، بازی‌های موقعیتی و برنامه‌های
        بلندمدت شکل می‌گیرند.
      </p>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 25,
        }}
      >
        {openings.map((opening) => (
          <Link
            key={opening.title}
            href={opening.href}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: 15,
                padding: 22,
                background: "#fff",
                transition: "0.2s",
                cursor: "pointer",
                height: "100%",
              }}
            >
              <h2>{opening.title}</h2>
 
              <p
                style={{
                  color: "#666",
                  marginBottom: 15,
                }}
              >
                {opening.subtitle}
              </p>
 
              <p>
                <strong>حرکت آغازین</strong>
              </p>
 
              <code
                style={{
                  fontSize: 16,
                }}
              >
                {opening.moves}
              </code>
 
              <p
                style={{
                  marginTop: 18,
                }}
              >
                <strong>ECO:</strong> {opening.eco}
              </p>
 
              <p>
                <strong>درجه سختی:</strong> {opening.difficulty}
              </p>
 
              <button
                style={{
                  marginTop: 20,
                  width: "100%",
                  padding: 12,
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 15,
                }}
              >
                ورود به صفحه شروع بازی
              </button>
            </div>
          </Link>
        ))}
      </div>
 
      <section
        style={{
          marginTop: 60,
        }}
      >
        <h2>درباره Closed Games</h2>
 
        <p>
          شروع‌های بسته معمولاً با <b>1.d4</b> آغاز می‌شوند و نسبت به بازی‌های
          باز، ماهیتی آرام‌تر و استراتژیک‌تر دارند. در این نوع بازی‌ها کنترل
          خانه‌های مرکزی، ساختار پیاده‌ها و برنامه‌ریزی بلندمدت اهمیت زیادی
          دارد.
        </p>
 
        <p>
          بسیاری از قهرمانان جهان مانند
          <b> کارپف، آناند، کارلسن، کاسپاروف و کرامنیک </b>
          بارها از این شروع‌ها در مسابقات سطح اول جهان استفاده کرده‌اند.
        </p>
 
        <p>
          در این بخش می‌توانید با مهم‌ترین شروع‌های بسته آشنا شوید، فایل PGN
          هر کدام را دانلود کنید و بازی نمونه را روی صفحه شطرنج به‌صورت
          تعاملی حرکت به حرکت بررسی کنید.
        </p>
      </section>
    </main>
  );
}
