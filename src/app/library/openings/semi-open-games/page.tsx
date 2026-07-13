import Link from "next/link";
 
const openings = [
  {
    title: "Sicilian Defense",
    subtitle: "دفاع سیسیلی",
    moves: "1.e4 c5",
    eco: "B20-B99",
    href: "/library/openings/semi-open-games/sicilian-defense",
  },
  {
    title: "French Defense",
    subtitle: "دفاع فرانسه",
    moves: "1.e4 e6",
    eco: "C00-C19",
    href: "/library/openings/semi-open-games/french-defense",
  },
  {
    title: "Caro-Kann Defense",
    subtitle: "دفاع کاروکان",
    moves: "1.e4 c6",
    eco: "B10-B19",
    href: "/library/openings/semi-open-games/caro-kann-defense",
  },
  {
    title: "Pirc Defense",
    subtitle: "دفاع پیرک",
    moves: "1.e4 d6",
    eco: "B07-B09",
    href: "/library/openings/semi-open-games/pirc-defense",
  },
  {
    title: "Alekhine Defense",
    subtitle: "دفاع آلخین",
    moves: "1.e4 Nf6",
    eco: "B02-B05",
    href: "/library/openings/semi-open-games/alekhine-defense",
  },
];
 
export default function SemiOpenGamesPage() {
  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Semi-Open Games
      </h1>
 
      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: 40,
          fontSize: 17,
        }}
      >
        شروع‌هایی که با حرکت <strong>1.e4</strong> آغاز شده و سیاه پاسخی
        غیر از <strong>1...e5</strong> انتخاب می‌کند.
      </p>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 24,
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
                borderRadius: 14,
                padding: 22,
                background: "#fff",
                transition: "0.2s",
                height: "100%",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                }}
              >
                {opening.title}
              </h2>
 
              <p
                style={{
                  color: "#777",
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
 
              <button
                style={{
                  marginTop: 20,
                  width: "100%",
                  padding: 12,
                  borderRadius: 8,
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
        <h2>درباره Semi-Open Games</h2>
 
        <p>
          در این خانواده از شروع‌ها، سفید بازی را با <b>1.e4</b> آغاز می‌کند،
          اما سیاه به جای پاسخ کلاسیک <b>1...e5</b>، دفاع دیگری را انتخاب
          می‌کند. این موضوع باعث ایجاد ساختارهای متنوع، بازی‌های نامتقارن و
          ایده‌های استراتژیک گوناگون می‌شود.
        </p>
 
        <p>
          بسیاری از محبوب‌ترین دفاع‌های تاریخ شطرنج، مانند دفاع سیسیلی، دفاع
          فرانسه و دفاع کاروکان، در این دسته قرار می‌گیرند و در مسابقات سطح
          بالای جهان بارها توسط قهرمانان بزرگ مورد استفاده قرار گرفته‌اند.
        </p>
      </section>
    </main>
  );
}
