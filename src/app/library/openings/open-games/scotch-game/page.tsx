import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Scotch Game"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4 Nf6 5.Nxc6 bxc6 6.Bd3 d5 7.exd5 cxd5 8.O-O Be7 *`;
 
export default function ScotchGamePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1 style={{ marginBottom: 10 }}>
        Scotch Game
      </h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        بازی اسکاتلندی یک شروع کلاسیک و تهاجمی است که با باز کردن سریع مرکز،
        فرصت فعالیت زودهنگام مهره‌ها را برای سفید فراهم می‌کند.
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
 
          <p><b>ECO:</b> C44-C45</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.e4 e5
2.Nf3 Nc6
3.d4
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐☆☆</p>
 
          <p><b>سبک:</b> تهاجمی / تاکتیکی</p>
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
              href="/library/openings/open-games/scotch-game/scotch-game.pgn"
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
          بازی اسکاتلندی با حرکت 3.d4 مرکز را خیلی زود باز می‌کند و به سفید
          اجازه می‌دهد مهره‌هایش را با سرعت وارد بازی کند. این شروع برای
          بازیکنانی مناسب است که به دنبال بازی‌های فعال و پویا هستند.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>باز کردن سریع مرکز</li>
          <li>توسعه سریع مهره‌ها</li>
          <li>فعال کردن فیل خانه‌سیاه</li>
          <li>کسب برتری فضایی</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>پذیرش یا رد تعویض در مرکز</li>
          <li>ضدحمله به پیاده d4</li>
          <li>توسعه طبیعی مهره‌ها</li>
          <li>قلعه سریع</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Classical Variation</li>
          <li>Schmidt Variation</li>
          <li>Scotch Gambit</li>
          <li>Mieses Variation</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          اگر سیاه بدون دقت از پیاده e5 دفاع کند، سفید می‌تواند با توسعه سریع
          مهره‌ها ابتکار عمل را به دست بگیرد و حمله مؤثری روی شاه سیاه ایجاد کند.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}


