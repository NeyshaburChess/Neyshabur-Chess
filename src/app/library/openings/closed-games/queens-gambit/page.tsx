import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Queen's Gambit"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.d4 d5
2.c4 e6
3.Nc3 Nf6
4.Bg5 Be7
5.e3 O-O
6.Nf3 Nbd7
7.Rc1 c6
8.Bd3 dxc4
9.Bxc4 *`;
 
export default function QueensGambitPage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>Queen's Gambit</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        گامبی وزیر یکی از قدیمی‌ترین و معتبرترین شروع‌های شطرنج است. سفید با
        قربانی ظاهری پیاده c4 تلاش می‌کند کنترل مرکز را به دست بگیرد و توسعه
        سریع‌تری داشته باشد.
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
 
          <p><b>ECO:</b> D06-D69</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.d4 d5
2.c4
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐⭐</p>
 
          <p><b>سبک:</b> موقعیتی / کلاسیک</p>
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
              href="/library/openings/closed-games/queens-gambit/queens-gambit.pgn"
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
          برخلاف نام آن، گامبی وزیر معمولاً یک گامبی واقعی نیست، زیرا سیاه در
          اغلب واریانت‌ها نمی‌تواند پیاده c4 را برای مدت طولانی حفظ کند. این
          شروع پایه بسیاری از بازی‌های قهرمانان جهان بوده است.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>کنترل مرکز</li>
          <li>توسعه سریع مهره‌ها</li>
          <li>ایجاد برتری فضایی</li>
          <li>فشار روی جناح وزیر</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>مقاومت در مرکز</li>
          <li>توسعه هماهنگ مهره‌ها</li>
          <li>شکستن مرکز با ...c5 یا ...e5</li>
          <li>فعال کردن فیل‌ها</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Queen's Gambit Declined</li>
          <li>Queen's Gambit Accepted</li>
          <li>Semi-Slav Defense</li>
          <li>Lasker Defense</li>
          <li>Tartakower Variation</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          گرفتن زودهنگام پیاده c4 بدون تکمیل توسعه، معمولاً باعث عقب‌ماندن
          سیاه در توسعه و از دست دادن زمان می‌شود.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}