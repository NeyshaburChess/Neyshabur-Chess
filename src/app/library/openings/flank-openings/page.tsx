import Link from "next/link";
 
const openings = [
  {
    title: "English Opening",
    subtitle: "شروع انگلیسی",
    moves: "1.c4",
    eco: "A10-A39",
    difficulty: "⭐⭐⭐⭐☆",
    href: "/library/openings/flank-openings/english-opening",
  },
  {
    title: "Réti Opening",
    subtitle: "شروع رتی",
    moves: "1.Nf3",
    eco: "A04-A09",
    difficulty: "⭐⭐⭐⭐☆",
    href: "/library/openings/flank-openings/reti-opening",
  },
  {
    title: "Bird Opening",
    subtitle: "شروع برد",
    moves: "1.f4",
    eco: "A02-A03",
    difficulty: "⭐⭐⭐☆☆",
    href: "/library/openings/flank-openings/bird-opening",
  },
];
 
export default function FlankOpeningsPage() {
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
        Flank Openings
      </h1>
 
      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: 18,
          marginBottom: 40,
        }}
      >
        شروع‌های جناحی با حرکاتی مانند <strong>1.c4</strong>،
        <strong>1.Nf3</strong> و <strong>1.f4</strong> آغاز می‌شوند. در این
        شروع‌ها، سفید به‌جای اشغال مستقیم مرکز، ابتدا مهره‌ها را توسعه داده و
        سپس با فشار تدریجی کنترل مرکز را به دست می‌گیرد.
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
                cursor: "pointer",
                transition: "0.2s",
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
        <h2>درباره Flank Openings</h2>
 
        <p>
          شروع‌های جناحی از انعطاف‌پذیرترین خانواده‌های شروع در شطرنج هستند.
          در این شروع‌ها سفید معمولاً مرکز را به‌صورت غیرمستقیم کنترل می‌کند و
          بسته به واکنش سیاه می‌تواند وارد ساختارهای کاملاً متفاوتی شود.
        </p>
 
        <p>
          بسیاری از استادان بزرگ مانند <b>مگنوس کارلسن، آناتولی کارپف، ریچارد
          رتی و بوتوینیک</b> بارها از این شروع‌ها در مسابقات مهم استفاده
          کرده‌اند.
        </p>
 
        <p>
          در هر صفحه می‌توانید توضیحات کامل شروع، ایده‌های استراتژیک،
          واریانت‌های مشهور، فایل PGN قابل دانلود و نمایش تعاملی بازی با
          <b> ChessViewer </b> را مشاهده کنید.
        </p>
      </section>
    </main>
  );
}