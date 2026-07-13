import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "King's Indian Defense"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.d4 Nf6
2.c4 g6
3.Nc3 Bg7
4.e4 d6
5.Nf3 O-O
6.Be2 e5
7.O-O Nc6
8.d5 Ne7
9.Ne1 *`;
 
export default function KingsIndianDefensePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>King's Indian Defense</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        دفاع هندی شاه یکی از مشهورترین دفاع‌های هایپرمدرن است. سیاه مرکز را
        مستقیماً اشغال نمی‌کند، بلکه اجازه می‌دهد سفید فضای بیشتری بگیرد و سپس
        با ضدحمله قدرتمند، مخصوصاً در جناح شاه، بازی را به دست بگیرد.
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
 
          <p><b>ECO:</b> E60-E99</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.d4 Nf6
2.c4 g6
3.Nc3 Bg7
4.e4 d6
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐⭐</p>
 
          <p><b>سبک:</b> هایپرمدرن / تهاجمی</p>
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
              href="/library/openings/closed-games/kings-indian-defense/kings-indian-defense.pgn"
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
          دفاع هندی شاه یکی از محبوب‌ترین انتخاب‌های قهرمانانی مانند فیشر،
          کاسپاروف و ناکامورا بوده است. این دفاع معمولاً به بازی‌های پیچیده،
          نامتقارن و پر از ایده‌های تاکتیکی منجر می‌شود.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>اشغال کامل مرکز</li>
          <li>پیشروی در جناح وزیر</li>
          <li>توسعه سریع مهره‌ها</li>
          <li>محدود کردن ضدحمله سیاه</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>حمله در جناح شاه با ...f5</li>
          <li>فشار بر مرکز سفید</li>
          <li>فینکتوی فیل شاه</li>
          <li>ضدحمله سریع پس از تکمیل توسعه</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Classical Variation</li>
          <li>Sämisch Variation</li>
          <li>Fianchetto Variation</li>
          <li>Four Pawns Attack</li>
          <li>Makogonov Variation</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          اگر سفید در مرکز بیش از حد پیشروی کند اما توسعه مهره‌ها را کامل
          نکند، سیاه می‌تواند با شکستن مرکز و حمله در جناح شاه ابتکار عمل را
          به دست بگیرد.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}