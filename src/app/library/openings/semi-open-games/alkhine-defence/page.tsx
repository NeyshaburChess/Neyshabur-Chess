import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Alekhine Defense"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.e4 Nf6
2.e5 Nd5
3.d4 d6
4.Nf3 g6
5.Bc4 Nb6
6.Bb3 Bg7
7.O-O O-O
8.Re1 Nc6
9.h3 *`;
 
export default function AlekhineDefensePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>Alekhine Defense</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        دفاع آلخین یکی از دفاع‌های هایپرمدرن است که در آن سیاه با حرکت
        1...Nf6 سفید را تشویق می‌کند مرکز را بیش از حد گسترش دهد و سپس آن
        را هدف حمله قرار می‌دهد.
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
 
          <p><b>ECO:</b> B02-B05</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.e4 Nf6
2.e5 Nd5
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐☆</p>
 
          <p><b>سبک:</b> هایپرمدرن / ضدحمله</p>
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
              href="/library/openings/semi-open-games/alekhine-defense/alekhine-defense.pgn"
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
          آلخین دفاعی نامتقارن است که به جای اشغال مستقیم مرکز، سفید را به
          پیشروی بیش از حد پیاده‌های مرکزی تشویق می‌کند تا بعداً با فشار
          مهره‌ها آن‌ها را تضعیف کند.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>ایجاد مرکز قدرتمند با پیاده‌ها</li>
          <li>توسعه سریع مهره‌ها</li>
          <li>حفظ فضای بیشتر</li>
          <li>جلوگیری از ضدحمله سیاه</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>حمله به مرکز سفید</li>
          <li>فشار بر پیاده e5</li>
          <li>فینکتوی فیل شاه</li>
          <li>ضربه با ...d6 و ...c5</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Modern Variation</li>
          <li>Exchange Variation</li>
          <li>Four Pawns Attack</li>
          <li>Saemisch Attack</li>
          <li>Balogh Variation</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          اگر سفید بدون تکمیل توسعه تنها به پیشروی پیاده‌ها ادامه دهد،
          سیاه می‌تواند با حمله به مرکز، برتری فضایی سفید را به نقطه ضعف
          تبدیل کند.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}
