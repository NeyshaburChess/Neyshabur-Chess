export default function SchedulePage() {
 
const schedule = [
{
  title:"بیست و نهمین دوره مسابقات سریع",
  date:"۱۹ تیر ۱۴۰۵",
  time:"۱۰ صبح",
  place:"هیأت شطرنج نیشابور"
},
];
 
return(
<main
style={{
maxWidth:"1000px",
margin:"0 auto",
padding:"30px"
}}
>
 
<h1
style={{
textAlign:"center",
color:"#001F3F"
}}
>
جدول زمان‌بندی مسابقات
</h1>
 
 
<div
style={{
marginTop:"30px"
}}
>
 
{schedule.map(item=>(
 
<div
key={item.title}
style={{
background:"#001F3F",
color:"white",
padding:"20px",
borderRadius:"15px",
marginBottom:"15px"
}}
>
 
<h2 style={{color:"#FFD700"}}>
{item.title}
</h2>
 
<p>📅 تاریخ: {item.date}</p>
<p>⏰ ساعت: {item.time}</p>
<p>📍 مکان: {item.place}</p>
 
 
</div>
 
))}
 
</div>
 
 
</main>
)
 
}