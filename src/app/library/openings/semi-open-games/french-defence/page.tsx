import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "French Defense"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.e4 e6
2.d4 d5
3.Nc3 Nf6
4.Bg5 Be7
5.e5 Nfd7
6.Bxe7 Qxe7
7.f4 O-O
8.Nf3 c5
9.Bd3 *`;
 
export default function FrenchDefensePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>French Defense</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        دفاع فرانسه یکی از دفاع‌های کلاسیک و بسیار مستحکم در برابر 1.e4 است.
        سیاه با حرکت e6 مرکز را تقویت کرده و برای ضدحمله با ...d5 آماده می‌شود.
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
 
          <p><b>ECO:</b> C00-C19</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.e4 e6
2.d4 d5
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐☆</p>
 
          <p><b>سبک:</b> دفاعی / استراتژیک</p>
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
              href="/library/openings/semi-open-games/french-defense/french-defense.pgn"
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
          دفاع فرانسه ساختار پیاده‌ای مستحکم ایجاد می‌کند و معمولاً به بازی‌های
          موقعیتی و عمیق منجر می‌شود. سفید فضای بیشتری در مرکز دارد، در حالی که
          سیاه برای شکستن این مرکز برنامه‌ریزی می‌کند.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>کسب فضای بیشتر در مرکز</li>
          <li>حمله در جناح شاه</li>
          <li>توسعه سریع مهره‌ها</li>
          <li>استفاده از برتری فضایی</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>شکستن مرکز با ...c5</li>
          <li>فشار روی پیاده d4</li>
          <li>فعال کردن فیل خانه‌سفید</li>
          <li>بازی در جناح وزیر</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Advance Variation</li>
          <li>Exchange Variation</li>
          <li>Tarrasch Variation</li>
          <li>Classical Variation</li>
          <li>Winawer Variation</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          در برخی واریانت‌ها، اگر سفید بیش از حد روی حمله تمرکز کند و توسعه
          مهره‌ها را نادیده بگیرد، سیاه می‌تواند با ضدحمله در مرکز ابتکار عمل
          را به دست بگیرد.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}
