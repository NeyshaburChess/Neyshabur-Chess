import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Pirc Defense"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.e4 d6
2.d4 Nf6
3.Nc3 g6
4.Nf3 Bg7
5.Be2 O-O
6.O-O c5
7.d5 e6
8.Nd2 exd5
9.exd5 *`;
 
export default function PircDefensePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>Pirc Defense</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        دفاع پیرک یک دفاع انعطاف‌پذیر و هایپرمدرن است. سیاه اجازه می‌دهد
        سفید ابتدا مرکز را اشغال کند و سپس با فشار از جناحین آن را هدف قرار
        می‌دهد.
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
 
          <p><b>ECO:</b> B07-B09</p>
 
          <pre>
1.e4 d6
2.d4 Nf6
3.Nc3 g6
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
 
          <a
            href="/library/openings/semi-open-games/pirc-defense/pirc-defense.pgn"
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
        در دفاع پیرک، سیاه با فینکتوی فیل خانه‌سیاه و فشار تدریجی روی مرکز،
        به دنبال ایجاد ضدحمله است. این دفاع در میان بازیکنان تهاجمی و کسانی
        که از موقعیت‌های پویا لذت می‌برند، محبوب است.
      </p>
 
      <h2>ایده‌های سفید</h2>
 
      <ul>
        <li>اشغال کامل مرکز</li>
        <li>توسعه سریع مهره‌ها</li>
        <li>حمله در جناح شاه</li>
        <li>پیشروی پیاده‌های مرکزی</li>
      </ul>
 
      <h2>ایده‌های سیاه</h2>
 
      <ul>
        <li>فشار بر مرکز سفید</li>
        <li>فینکتوی فیل شاه</li>
        <li>شکستن مرکز با ...e5 یا ...c5</li>
        <li>بازی فعال در جناح وزیر</li>
      </ul>
 
      <h2>واریانت‌های معروف</h2>
 
      <ul>
        <li>Austrian Attack</li>
        <li>Classical System</li>
        <li>150 Attack</li>
        <li>Byrne Variation</li>
        <li>Czech Variation</li>
      </ul>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}
