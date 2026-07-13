import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Grunfeld Defense"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.d4 Nf6
2.c4 g6
3.Nc3 d5
4.cxd5 Nxd5
5.e4 Nxc3
6.bxc3 Bg7
7.Bc4 O-O
8.Ne2 c5
9.O-O *`;
 
export default function GrunfeldDefensePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>Grünfeld Defense</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        دفاع گرونفلد یکی از فعال‌ترین دفاع‌های شطرنج در برابر 1.d4 است. سیاه
        اجازه می‌دهد سفید مرکز بزرگی ایجاد کند و سپس با فشار مهره‌ها و حملات
        پیاده‌ای آن مرکز را هدف قرار می‌دهد.
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
 
          <p><b>ECO:</b> D70-D99</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.d4 Nf6
2.c4 g6
3.Nc3 d5
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐⭐</p>
 
          <p><b>سبک:</b> هایپرمدرن / پویا</p>
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
              href="/library/openings/closed-games/grunfeld-defense/grunfeld-defense.pgn"
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
          دفاع گرونفلد از محبوب‌ترین انتخاب‌های بازیکنان تهاجمی است. این دفاع
          به جای اشغال مرکز، با فشار مداوم به پیاده‌های مرکزی سفید، بازی‌های
          بسیار پویا و تاکتیکی ایجاد می‌کند.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>ایجاد مرکز قدرتمند با پیاده‌ها</li>
          <li>توسعه سریع مهره‌ها</li>
          <li>حفظ برتری فضایی</li>
          <li>جلوگیری از فشار سیاه بر مرکز</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>فشار بر مرکز با ...c5</li>
          <li>فینکتوی فیل شاه</li>
          <li>فعالیت سریع مهره‌ها</li>
          <li>استفاده از ستون‌های باز</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Russian System</li>
          <li>Exchange Variation</li>
          <li>Classical Variation</li>
          <li>Fianchetto Variation</li>
          <li>Hungarian Variation</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          اگر سفید بدون دقت از مرکز خود محافظت نکند، سیاه با حرکاتی مانند
          ...c5 و ...Nc6 می‌تواند فشار شدیدی روی پیاده d4 وارد کرده و مرکز
          سفید را از هم بپاشد.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}