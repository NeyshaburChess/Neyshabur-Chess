import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Slav Defense"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.d4 d5
2.c4 c6
3.Nf3 Nf6
4.Nc3 dxc4
5.a4 Bf5
6.e3 e6
7.Bxc4 Bb4
8.O-O Nbd7
9.Qe2 *`;
 
export default function SlavDefensePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>Slav Defense</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        دفاع اسلاو یکی از مستحکم‌ترین پاسخ‌ها به گامبی وزیر است. سیاه با
        پشتیبانی از پیاده d5 توسط پیاده c6، ساختاری مقاوم ایجاد کرده و در عین
        حال راه فیل خانه‌سفید خود را نیز باز نگه می‌دارد.
      </p>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20,
          marginBottom: 30,
        }}
      >
        <div
          style={{
            padding: 20,
            border: "1px solid #ddd",
            borderRadius: 12,
          }}
        >
          <h3>اطلاعات شروع</h3>
 
          <p><b>ECO:</b> D10-D19</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.d4 d5
2.c4 c6
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐☆</p>
 
          <p><b>سبک:</b> دفاعی / موقعیتی</p>
        </div>
 
        <div
          style={{
            padding: 20,
            border: "1px solid #ddd",
            borderRadius: 12,
          }}
        >
          <h3>عملیات</h3>
 
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <a
              href="/library/openings/closed-games/slav-defense/slav-defense.pgn"
              download
            >
              <button
                style={{
                  width: "100%",
                  padding: 12,
                }}
              >
                دانلود PGN
              </button>
            </a>
 
            <Link href="#viewer">
              <button
                style={{
                  width: "100%",
                  padding: 12,
                }}
              >
                شروع بازی
              </button>
            </Link>
          </div>
        </div>
      </div>
 
      <section style={{ marginBottom: 40 }}>
        <h2>معرفی</h2>
 
        <p>
          دفاع اسلاو به دلیل استحکام ساختار پیاده‌ها و توسعه آسان فیل
          خانه‌سفید، یکی از محبوب‌ترین دفاع‌ها در سطح حرفه‌ای است و بارها در
          مسابقات قهرمانی جهان مورد استفاده قرار گرفته است.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>کنترل مرکز</li>
          <li>بازپس‌گیری پیاده c4</li>
          <li>توسعه سریع مهره‌ها</li>
          <li>ایجاد برتری فضایی</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>حفظ ساختار مستحکم</li>
          <li>توسعه فیل خانه‌سفید</li>
          <li>شکستن مرکز با ...c5 یا ...e5</li>
          <li>ورود به آخر بازی مناسب</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Main Line</li>
          <li>Chebanenko Slav</li>
          <li>Modern Slav</li>
          <li>Exchange Slav</li>
          <li>Quiet Variation</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          اگر سفید بدون تکمیل توسعه برای حمله زودهنگام تلاش کند، سیاه می‌تواند
          با توسعه طبیعی مهره‌ها و فشار بر مرکز، برتری موقعیتی به دست آورد.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}
