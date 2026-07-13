import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Italian Game"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.c3 Nf6 5.d3 d6 *`;
 
export default function ItalianGamePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1 style={{ marginBottom: 10 }}>
        Italian Game
      </h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        یکی از قدیمی‌ترین و محبوب‌ترین شروع‌های شطرنج که بر توسعه سریع
        مهره‌ها و کنترل مرکز تمرکز دارد.
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
 
          <p><b>ECO:</b> C50-C54</p>
 
          <p><b>حرکت‌ها:</b></p>
 
          <pre>
1.e4 e5
2.Nf3 Nc6
3.Bc4
          </pre>
 
          <p><b>سطح:</b> ⭐⭐☆☆☆</p>
 
          <p><b>سبک:</b> تهاجمی / کلاسیک</p>
        </div>
 
        <div
          style={{
            padding: 20,
            border: "1px solid #ddd",
            borderRadius: 12,
          }}
        >
          <h3>دکمه‌ها</h3>
 
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <a
              href="/library/openings/open-games/italian-game/italian-game.pgn"
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
 
      <section
        style={{
          marginBottom: 40,
        }}
      >
        <h2>معرفی</h2>
 
        <p>
          بازی ایتالیایی یکی از بهترین انتخاب‌ها برای یادگیری اصول اولیه
          شطرنج است. سفید با حرکت فیل به خانه c4 روی خانه ضعیف f7 فشار
          وارد می‌کند و هم‌زمان مهره‌های خود را سریع توسعه می‌دهد.
        </p>
      </section>
 
      <section
        style={{
          marginBottom: 40,
        }}
      >
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>توسعه سریع مهره‌ها</li>
          <li>قلعه کوتاه</li>
          <li>کنترل مرکز</li>
          <li>حمله به f7</li>
        </ul>
      </section>
 
      <section
        style={{
          marginBottom: 40,
        }}
      >
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>توسعه سریع</li>
          <li>دفاع از e5</li>
          <li>ضدحمله در مرکز</li>
          <li>قلعه سریع</li>
        </ul>
      </section>
 
      <section
        style={{
          marginBottom: 40,
        }}
      >
        <h2>واریانت‌های مهم</h2>
 
        <ul>
          <li>Giuoco Piano</li>
          <li>Two Knights Defense</li>
          <li>Evans Gambit</li>
        </ul>
      </section>
 
      <section
        style={{
          marginBottom: 40,
        }}
      >
        <h2>تله معروف</h2>
 
        <p>
          اگر سیاه بدون دقت توسعه پیدا کند، حملات سریع روی خانه f7 می‌تواند
          باعث از دست رفتن وزیر یا مات زودهنگام شود.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}
 