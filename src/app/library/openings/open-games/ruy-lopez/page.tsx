import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Ruy Lopez"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 *`;
 
export default function RuyLopezPage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1 style={{ marginBottom: 10 }}>
        Ruy Lopez (Spanish Opening)
      </h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        شروع اسپانیایی یکی از قوی‌ترین و پرکاربردترین شروع‌های تاریخ شطرنج است.
        این شروع بر توسعه صحیح مهره‌ها، کنترل مرکز و ایجاد برتری موقعیتی تمرکز دارد.
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
 
          <p><b>ECO:</b> C60-C99</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.e4 e5
2.Nf3 Nc6
3.Bb5
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐☆</p>
 
          <p><b>سبک:</b> موقعیتی / استراتژیک</p>
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
              href="/library/openings/open-games/ruy-lopez/ruy-lopez.pgn"
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
          در شروع اسپانیایی، سفید با حرکت Bb5 به صورت غیرمستقیم روی پیاده e5
          فشار وارد می‌کند. این شروع سال‌هاست که در مسابقات قهرمانی جهان توسط
          بزرگ‌ترین استادان مورد استفاده قرار می‌گیرد.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>کنترل مرکز</li>
          <li>توسعه سریع مهره‌ها</li>
          <li>قلعه کوتاه</li>
          <li>فشار روی پیاده e5</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>دفاع از e5</li>
          <li>گسترش در جناح وزیر</li>
          <li>ضدحمله در مرکز</li>
          <li>توسعه سریع مهره‌ها</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Berlin Defense</li>
          <li>Morphy Defense</li>
          <li>Closed Ruy Lopez</li>
          <li>Open Ruy Lopez</li>
          <li>Exchange Variation</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          در برخی واریانت‌ها، اگر سفید بدون برنامه حمله کند، سیاه می‌تواند با
          دفاع دقیق وارد آخر بازی بسیار مطلوبی شود.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}
