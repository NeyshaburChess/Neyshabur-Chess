import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Sicilian Defense"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.e4 c5
2.Nf3 d6
3.d4 cxd4
4.Nxd4 Nf6
5.Nc3 a6
6.Be3 e6
7.f3 Be7
8.Qd2 O-O
9.O-O-O *`;
 
export default function SicilianDefensePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>Sicilian Defense</h1>
 
      <p style={{ color: "#666", marginBottom: 30 }}>
        دفاع سیسیلی محبوب‌ترین پاسخ سیاه به حرکت 1.e4 است و یکی از
        تهاجمی‌ترین و پیچیده‌ترین شروع‌های شطرنج محسوب می‌شود.
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
 
          <p><b>ECO:</b> B20-B99</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.e4 c5
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐⭐</p>
 
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
 
          <a
            href="/library/openings/semi-open-games/sicilian-defense/sicilian-defense.pgn"
            download
          >
            <button
              style={{
                width: "100%",
                padding: 12,
                marginBottom: 12,
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
 
      <h2>معرفی</h2>
 
      <p>
        سیاه با حرکت c5 از همان ابتدا برای کنترل مرکز به صورت نامتقارن
        مبارزه می‌کند. این شروع به بازی‌های بسیار پویا و پر از تاکتیک
        منجر می‌شود.
      </p>
 
      <h2>ایده‌های سفید</h2>
 
      <ul>
        <li>کنترل مرکز</li>
        <li>توسعه سریع مهره‌ها</li>
        <li>حمله در جناح شاه</li>
        <li>استفاده از برتری فضایی</li>
      </ul>
 
      <h2>ایده‌های سیاه</h2>
 
      <ul>
        <li>ضدحمله در جناح وزیر</li>
        <li>شکستن مرکز با ...d5</li>
        <li>فعال کردن رخ‌ها</li>
        <li>بازی نامتقارن برای برد</li>
      </ul>
 
      <h2>واریانت‌های معروف</h2>
 
      <ul>
        <li>Najdorf Variation</li>
        <li>Dragon Variation</li>
        <li>Scheveningen</li>
        <li>Classical</li>
        <li>Sveshnikov</li>
      </ul>
 
      <h2>تله معروف</h2>
 
      <p>
        در بسیاری از واریانت‌های سیسیلی، تأخیر در توسعه یا قلعه رفتن
        می‌تواند باعث حمله سریع حریف و از دست رفتن ابتکار عمل شود.
      </p>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}


