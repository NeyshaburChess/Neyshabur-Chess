import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "English Opening"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.c4 e5
2.Nc3 Nf6
3.g3 d5
4.cxd5 Nxd5
5.Bg2 Nb6
6.Nf3 Nc6
7.O-O Be7
8.d3 O-O
9.Be3 *`;
 
export default function EnglishOpeningPage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>English Opening</h1>
 
      <p
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        شروع انگلیسی با حرکت <b>1.c4</b> آغاز می‌شود و یکی از انعطاف‌پذیرترین
        شروع‌های شطرنج است. این شروع معمولاً به بازی‌های موقعیتی و کنترل
        تدریجی مرکز منجر می‌شود.
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
 
          <p><b>ECO:</b> A10–A39</p>
 
          <p><b>حرکت‌های اصلی</b></p>
 
          <pre>
1.c4
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐☆</p>
 
          <p><b>سبک:</b> موقعیتی / انعطاف‌پذیر</p>
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
              href="/library/openings/flank-openings/english-opening/english-opening.pgn"
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
        شروع انگلیسی از محبوب‌ترین انتخاب‌های بازیکنان موقعیتی مانند کارلسن،
        کارپف و بوتوینیک بوده است. سفید بدون اشغال مستقیم مرکز، کنترل خانه d5
        را در اختیار می‌گیرد و بسته به پاسخ سیاه می‌تواند وارد ساختارهای بسیار
        متنوعی شود.
      </p>
 
      <h2>ایده‌های سفید</h2>
 
      <ul>
        <li>کنترل خانه d5</li>
        <li>فینکتوی فیل شاه</li>
        <li>توسعه آرام مهره‌ها</li>
        <li>تغییر ساختار بازی بر اساس پاسخ سیاه</li>
      </ul>
 
      <h2>ایده‌های سیاه</h2>
 
      <ul>
        <li>اشغال مرکز با ...e5 یا ...c5</li>
        <li>توسعه سریع مهره‌ها</li>
        <li>محدود کردن فضای سفید</li>
        <li>بازی فعال در مرکز</li>
      </ul>
 
      <h2>واریانت‌های معروف</h2>
 
      <ul>
        <li>Symmetrical Variation</li>
        <li>Reversed Sicilian</li>
        <li>Four Knights</li>
        <li>Botvinnik System</li>
        <li>Mikenas Attack</li>
      </ul>
 
      <h2>تله معروف</h2>
 
      <p>
        اگر سیاه بدون توجه به توسعه مهره‌ها تنها برای تصاحب مرکز تلاش کند،
        سفید می‌تواند با فشار بر خانه‌های ضعیف و توسعه سریع، ابتکار بازی را
        در دست بگیرد.
      </p>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn} />
      </section>
    </main>
  );
}