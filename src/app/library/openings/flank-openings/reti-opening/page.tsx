import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Réti Opening"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.Nf3 d5
2.c4 e6
3.g3 Nf6
4.Bg2 Be7
5.O-O O-O
6.b3 c5
7.Bb2 Nc6
8.e3 b6
9.d3 *`;
 
export default function RetiOpeningPage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>Réti Opening</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        شروع رتی با حرکت <b>1.Nf3</b> آغاز می‌شود و یکی از مشهورترین شروع‌های
        هایپرمدرن است. سفید به‌جای اشغال مستقیم مرکز، با توسعه مهره‌ها و کنترل
        خانه‌های مرکزی، انعطاف زیادی برای ورود به ساختارهای مختلف دارد.
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
 
          <p><b>ECO:</b> A04–A09</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.Nf3
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐☆</p>
 
          <p><b>سبک:</b> هایپرمدرن / موقعیتی</p>
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
              href="/library/openings/flank-openings/reti-opening/reti-opening.pgn"
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
 
      <h2>معرفی</h2>
 
      <p>
        رتی توسط استاد بزرگ ریچارد رتی محبوب شد و امروزه یکی از انعطاف‌پذیرترین
        شروع‌های شطرنج به شمار می‌رود. این شروع می‌تواند به ساختارهای انگلیسی،
        کاتالان، گامبی وزیر یا حتی دفاع هندی تبدیل شود.
      </p>
 
      <h2>ایده‌های سفید</h2>
 
      <ul>
        <li>کنترل غیرمستقیم مرکز</li>
        <li>فینکتوی فیل شاه</li>
        <li>توسعه سریع مهره‌ها</li>
        <li>انعطاف در انتخاب ساختار بازی</li>
      </ul>
 
      <h2>ایده‌های سیاه</h2>
 
      <ul>
        <li>اشغال مرکز با d5 یا e5</li>
        <li>توسعه طبیعی مهره‌ها</li>
        <li>کاهش آزادی عمل سفید</li>
        <li>استفاده از برتری فضایی</li>
      </ul>
 
      <h2>واریانت‌های معروف</h2>
 
      <ul>
        <li>King's Indian Attack</li>
        <li>Réti Gambit</li>
        <li>Anglo-Slav</li>
        <li>Anglo-Indian</li>
        <li>Classical Réti</li>
      </ul>
 
      <h2>تله معروف</h2>
 
      <p>
        اگر سیاه بدون توجه به توسعه مهره‌ها تنها به گسترش پیاده‌های مرکزی
        بپردازد، سفید می‌تواند با فشار بر خانه‌های مرکزی و توسعه سریع، ابتکار
        بازی را در اختیار بگیرد.
      </p>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}