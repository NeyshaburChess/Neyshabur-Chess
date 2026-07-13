export default function EndgamesPage() {
  const endgames = [
    {
      title: "King and Pawn Endgames",
      description:
        "مهم‌ترین نوع آخر بازی. یادگیری حرکت شاه، ترفیع پیاده و استفاده صحیح از خانه‌های کلیدی.",
    },
    {
      title: "Opposition",
      description:
        "یکی از پایه‌ای‌ترین مفاهیم آخر بازی که به شاه اجازه نفوذ و کنترل خانه‌های مهم را می‌دهد.",
    },
    {
      title: "Triangulation",
      description:
        "از دست دادن عمدی یک حرکت برای رسیدن به وضعیت مطلوب و گرفتن اپوزیسیون.",
    },
    {
      title: "Rook Endgames",
      description:
        "رایج‌ترین آخر بازی در شطرنج. فعالیت رخ معمولاً از تعداد پیاده‌ها مهم‌تر است.",
    },
    {
      title: "Lucena Position",
      description:
        "روش استاندارد برد در آخر بازی رخ و پیاده با ساختن پل.",
    },
    {
      title: "Philidor Position",
      description:
        "مهم‌ترین روش دفاعی در آخر بازی رخ و پیاده.",
    },
    {
      title: "Queen Endgames",
      description:
        "آخر بازی‌های وزیر بسیار تاکتیکی هستند و معمولاً با کیش‌های متوالی همراه می‌شوند.",
    },
    {
      title: "Bishop Endgames",
      description:
        "شناخت فیل خوب و فیل بد و نقش پیاده‌های دو جناح در این آخر بازی‌ها اهمیت زیادی دارد.",
    },
    {
      title: "Knight Endgames",
      description:
        "اسب در موقعیت‌های بسته عملکرد خوبی دارد اما برای متوقف کردن پیاده‌های دور دشوارتر است.",
    },
    {
      title: "Basic Checkmates",
      description:
        "روش‌های مات با وزیر، رخ و دو فیل از اولین مهارت‌هایی هستند که هر شطرنج‌باز باید یاد بگیرد.",
    },
  ];
 
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 30,
      }}
    >
      <h1>Chess Endgames</h1>
 
      <p
        style={{
          color: "#666",
          fontSize: 18,
          marginBottom: 40,
        }}
      >
        آخر بازی مرحله‌ای از شطرنج است که تعداد مهره‌ها کمتر شده و نقش شاه
        بسیار پررنگ‌تر می‌شود. دانستن اصول آخر بازی باعث می‌شود موقعیت‌های
        مساوی را ببرید و از شکست در موقعیت‌های دشوار جلوگیری کنید.
      </p>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 20,
        }}
      >
        {endgames.map((item) => (
          <div
            key={item.title}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 20,
              background: "#fff",
            }}
          >
            <h2>{item.title}</h2>
 
            <p
              style={{
                color: "#555",
                lineHeight: 1.8,
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
 
      <section
        style={{
          marginTop: 60,
        }}
      >
        <h2>نکات مهم آخر بازی</h2>
 
        <ul style={{ lineHeight: 2 }}>
          <li>شاه را فعال کنید.</li>
          <li>رخ را پشت پیاده آزاد قرار دهید.</li>
          <li>برای ساختن پیاده آزاد تلاش کنید.</li>
          <li>اپوزیسیون را به‌خوبی یاد بگیرید.</li>
          <li>آخر بازی‌های رخ را بیشتر از همه تمرین کنید.</li>
        </ul>
      </section>
 
      <section
        style={{
          marginTop: 50,
          padding: 20,
          border: "1px solid #ddd",
          borderRadius: 12,
        }}
      >
        <h2>جمع‌بندی</h2>
 
        <p>
          بسیاری از بازی‌ها در آخر بازی تعیین می‌شوند. تمرین منظم آخر بازی‌ها
          باعث افزایش دقت، قدرت محاسبه و تبدیل برتری‌های کوچک به پیروزی خواهد
          شد.
        </p>
      </section>
    </main>
  );
}


