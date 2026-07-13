import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Nimzo-Indian Defense"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.d4 Nf6
2.c4 e6
3.Nc3 Bb4
4.e3 O-O
5.Bd3 d5
6.Nf3 c5
7.O-O Nc6
8.a3 Bxc3
9.bxc3 *`;
 
export default function NimzoIndianDefensePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>Nimzo-Indian Defense</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        دفاع نیمزو هندی یکی از معتبرترین و محبوب‌ترین دفاع‌ها در برابر
        <strong> 1.d4 </strong>
        است. سیاه با سنجاق کردن اسب c3 تلاش می‌کند کنترل مرکز را کاهش داده و
        ساختار پیاده‌های سفید را تضعیف کند.
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
 
          <p><b>ECO:</b> E20-E59</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.d4 Nf6
2.c4 e6
3.Nc3 Bb4
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐⭐</p>
 
          <p><b>سبک:</b> موقعیتی / هایپرمدرن</p>
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
              href="/library/openings/closed-games/nimzo-indian-defense/nimzo-indian-defense.pgn"
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
          نیمزو هندی از قرن بیستم تاکنون یکی از انتخاب‌های اصلی بسیاری از
          قهرمانان جهان بوده است. این شروع تعادل فوق‌العاده‌ای میان بازی
          استراتژیک و فرصت‌های تاکتیکی ایجاد می‌کند.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>حفظ مرکز قدرتمند</li>
          <li>گسترش فضای بازی</li>
          <li>جفت فیل‌ها</li>
          <li>توسعه سریع مهره‌ها</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>فشار بر اسب c3</li>
          <li>تضعیف ساختار پیاده‌های سفید</li>
          <li>ضربه به مرکز با ...c5 یا ...d5</li>
          <li>توسعه سریع و هماهنگ مهره‌ها</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Classical Variation</li>
          <li>Rubinstein Variation</li>
          <li>Leningrad Variation</li>
          <li>Saemisch Variation</li>
          <li>Kasparov Variation</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          بی‌توجهی سفید به سنجاق اسب c3 می‌تواند باعث دوبل شدن پیاده‌ها و ایجاد
          ضعف‌های بلندمدت در ساختار جناح وزیر شود.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}