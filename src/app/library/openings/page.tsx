import Link from "next/link";
 
const openings = [
  {
    id: "sicilian",
    name: "دفاع سیسیلی",
    english: "Sicilian Defense",
    moves: "1. e4 c5",
    description:
      "یکی از محبوب‌ترین دفاع‌ها در برابر حرکت e4 با ساختارهای پیچیده و تهاجمی.",
  },
 
  {
    id: "ruy-lopez",
    name: "بازی اسپانیایی",
    english: "Ruy Lopez",
    moves: "1. e4 e5 2. Nf3 Nc6 3. Bb5",
    description:
      "یکی از قدیمی‌ترین و عمیق‌ترین شروع‌های کلاسیک شطرنج.",
  },
 
  {
    id: "italian",
    name: "بازی ایتالیایی",
    english: "Italian Game",
    moves: "1. e4 e5 2. Nf3 Nc6 3. Bc4",
    description:
      "شروعی مناسب برای یادگیری توسعه سریع مهره‌ها و حمله.",
  },
 
  {
    id: "queens-gambit",
    name: "گامبی وزیر",
    english: "Queen's Gambit",
    moves: "1. d4 d5 2. c4",
    description:
      "شروعی مشهور برای کنترل مرکز صفحه.",
  },
 
  {
    id: "french",
    name: "دفاع فرانسوی",
    english: "French Defense",
    moves: "1. e4 e6",
    description:
      "دفاعی محکم با ساختار پیاده‌ای خاص.",
  },
];
 
 
export default function OpeningsPage() {
 
return (
 
<main
style={{
padding:30,
maxWidth:1000,
margin:"auto"
}}
>
 
<h1
style={{
textAlign:"center",
marginBottom:30
}}
>
شروع‌های بازی شطرنج
</h1>
 
 
<p
style={{
textAlign:"center",
color:"#666"
}}
>
آموزش، بررسی حرکات اصلی و دانلود فایل PGN شروع‌های معروف
</p>
 
 
<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
gap:20,
marginTop:40
}}
>
 
 
{openings.map((opening)=>(
 
<Link
key={opening.id}
href={`/library/openings/${opening.id}`}
style={{
textDecoration:"none",
color:"inherit"
}}
>
 
 
<div
style={{
border:"1px solid #ddd",
borderRadius:15,
padding:20,
height:"100%",
background:"#fff",
boxShadow:"0 3px 10px #0001"
}}
>
 
 
<h2>
{opening.name}
</h2>
 
 
<h3
style={{
fontSize:16,
color:"#777"
}}
>
{opening.english}
</h3>
 
 
<p>
شروع:
<br/>
<b>{opening.moves}</b>
</p>
 
 
<p>
{opening.description}
</p>
 
 
<button
style={{
marginTop:15,
padding:"10px 20px",
borderRadius:8,
border:"none",
cursor:"pointer"
}}
>
مشاهده شروع بازی
</button>
 
 
</div>
 
 
</Link>
 
))}
 
 
</div>
 
 
</main>
 
)
 
}


