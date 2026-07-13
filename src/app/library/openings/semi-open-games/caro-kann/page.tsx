import Link from "next/link";
import ChessViewer from "@/components/ChessViewer";
 
const pgn = `[Event "Caro-Kann Defense"]
[Site "Neyshabur Chess"]
[Result "*"]
 
1.e4 c6
2.d4 d5
3.Nc3 dxe4
4.Nxe4 Bf5
5.Ng3 Bg6
6.h4 h6
7.Nf3 Nd7
8.h5 Bh7
9.Bd3 *`;
 
export default function CaroKannDefensePage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 30 }}>
      <h1>Caro-Kann Defense</h1>
 
      <p style={{ color: "#666", marginBottom: 30 }}>
        دفاع کاروکان یکی از قابل اعتمادترین دفاع‌ها در برابر 1.e4 است.
        سیاه ساختاری مستحکم ایجاد می‌کند و به دنبال پایان‌بازی مطلوب و توسعه
        هماهنگ مهره‌ها است.
      </p>
 
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap:20,
        marginBottom:30
      }}>
 
        <div style={{
          padding:20,
          border:"1px solid #ddd",
          borderRadius:12
        }}>
          <h3>اطلاعات شروع</h3>
 
          <p><b>ECO:</b> B10-B19</p>
 
          <pre>
1.e4 c6
2.d4 d5
          </pre>
 
          <p><b>سطح:</b> ⭐⭐⭐⭐☆</p>
 
          <p><b>سبک:</b> دفاعی / موقعیتی</p>
 
        </div>
 
        <div style={{
          padding:20,
          border:"1px solid #ddd",
          borderRadius:12
        }}>
 
          <h3>عملیات</h3>
 
          <a href="/library/openings/semi-open-games/caro-kann-defense/caro-kann-defense.pgn" download>
            <button style={{width:"100%",padding:12,marginBottom:12}}>
              دانلود PGN
            </button>
          </a>
 
          <Link href="#viewer">
            <button style={{width:"100%",padding:12}}>
              شروع بازی
            </button>
          </Link>
 
        </div>
 
      </div>
 
      <h2>معرفی</h2>
 
      <p>
        کاروکان به خاطر ساختار محکم پیاده‌ها و امنیت شاه شناخته می‌شود.
        بسیاری از قهرمانان جهان از این دفاع استفاده کرده‌اند.
      </p>
 
      <h2>ایده‌های سفید</h2>
 
      <ul>
        <li>برتری فضایی</li>
        <li>توسعه سریع</li>
        <li>حمله در جناح شاه</li>
        <li>کنترل مرکز</li>
      </ul>
 
      <h2>ایده‌های سیاه</h2>
 
      <ul>
        <li>شکستن مرکز</li>
        <li>فعال کردن فیل خانه‌سفید</li>
        <li>ورود به آخر بازی مطلوب</li>
        <li>ساختار پیاده‌ای سالم</li>
      </ul>
 
      <h2>واریانت‌ها</h2>
 
      <ul>
        <li>Classical</li>
        <li>Advance</li>
        <li>Exchange</li>
        <li>Panov Attack</li>
        <li>Tartakower</li>
      </ul>
 
      <section id="viewer">
        <h2>نمایش بازی</h2>
 
        <ChessViewer pgn={pgn}/>
      </section>
 
    </main>
  );
}
