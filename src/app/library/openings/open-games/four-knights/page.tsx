import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Four Knights Game"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5 Bb4 5.O-O O-O 6.d3 d6 7.Bg5 Bxc3 8.bxc3 h6 9.Bh4 *`;
 
export default function FourKnightsGamePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1 style={{ marginBottom: 10 }}>
        Four Knights Game
      </h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        بازی چهار اسب یکی از کلاسیک‌ترین شروع‌های شطرنج است که هر دو طرف
        مهره‌های خود را به شکلی طبیعی توسعه می‌دهند. این شروع برای یادگیری
        اصول اولیه توسعه مهره‌ها و کنترل مرکز بسیار مناسب است.
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
 
          <p><b>ECO:</b> C47-C49</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.e4 e5
2.Nf3 Nc6
3.Nc3 Nf6
          </pre>
 
          <p><b>سطح:</b> ⭐⭐☆☆☆</p>
 
          <p><b>سبک:</b> کلاسیک / موقعیتی</p>
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
              href="/library/openings/open-games/four-knights/four-knights.pgn"
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
          در بازی چهار اسب، هر دو بازیکن اسب‌های خود را به بهترین خانه‌های
          طبیعی توسعه می‌دهند. این شروع تعادل خوبی بین بازی تهاجمی و موقعیتی
          ایجاد می‌کند و برای بازیکنان مبتدی تا حرفه‌ای مناسب است.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>توسعه سریع مهره‌ها</li>
          <li>قلعه کوتاه</li>
          <li>کنترل خانه‌های مرکزی</li>
          <li>ورود به حمله پس از تکمیل توسعه</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>حفظ تعادل در مرکز</li>
          <li>توسعه هماهنگ مهره‌ها</li>
          <li>قلعه سریع</li>
          <li>آماده‌سازی ضدحمله</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Spanish Variation</li>
          <li>Scotch Variation</li>
          <li>Italian Variation</li>
          <li>Rubinstein Variation</li>
          <li>Belgrade Gambit</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          در برخی واریانت‌ها اگر یکی از طرفین بدون تکمیل توسعه برای گرفتن
          پیاده اقدام کند، ممکن است با از دست دادن زمان و ایجاد ضعف در
          جایگاه شاه روبه‌رو شود.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}


