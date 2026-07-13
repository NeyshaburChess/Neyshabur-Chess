import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Bird Opening"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.f4 d5
2.Nf3 Nf6
3.e3 g6
4.b3 Bg7
5.Bb2 O-O
6.Be2 c5
7.O-O Nc6
8.Ne5 Qc7
9.Bf3 *`;
 
export default function BirdOpeningPage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>Bird Opening</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        شروع برد با حرکت <b>1.f4</b> آغاز می‌شود و هدف آن کنترل خانه
        <b> e5 </b> و آماده‌سازی حمله در جناح شاه است. این شروع نسبت به بسیاری
        از شروع‌های دیگر کمتر رایج است، اما می‌تواند حریف را از همان ابتدا از
        آمادگی نظری خارج کند.
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
 
          <p><b>ECO:</b> A02–A03</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.f4
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐☆☆</p>
 
          <p><b>سبک:</b> تهاجمی / نامتعارف</p>
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
              href="/library/openings/flank-openings/bird-opening/bird-opening.pgn"
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
          شروع برد شباهت‌هایی به دفاع هلندی دارد، با این تفاوت که این بار سفید
          یک حرکت اضافی در اختیار دارد. این شروع برای بازیکنانی مناسب است که
          به دنبال بازی‌های تهاجمی، نامتقارن و کمتر بررسی‌شده هستند.
        </p>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سفید</h2>
 
        <ul>
          <li>کنترل خانه e5</li>
          <li>حمله در جناح شاه</li>
          <li>فینکتوی فیل شاه یا وزیر</li>
          <li>حفظ ابتکار عمل از ابتدای بازی</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>ایده‌های سیاه</h2>
 
        <ul>
          <li>فشار بر خانه e4</li>
          <li>اشغال مرکز با ...d5 و ...c5</li>
          <li>توسعه سریع مهره‌ها</li>
          <li>استفاده از ضعف خانه e1-h4</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>واریانت‌های معروف</h2>
 
        <ul>
          <li>Leningrad Variation</li>
          <li>From Gambit</li>
          <li>Stonewall Attack</li>
          <li>Classical Bird</li>
          <li>Hobbs Gambit</li>
        </ul>
      </section>
 
      <section style={{ marginBottom: 40 }}>
        <h2>تله معروف</h2>
 
        <p>
          مهم‌ترین دام مرتبط با این شروع، <b>From Gambit</b> است. اگر سفید
          بدون دقت بازی کند، سیاه می‌تواند با حملات سریع و باز کردن خطوط،
          ابتکار عمل را در همان ابتدای بازی به دست بگیرد.
        </p>
      </section>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}