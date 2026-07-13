export default function TacticsPage() {
  const tactics = [
    {
      title: "Fork (چنگال)",
      description:
        "یک مهره، معمولاً اسب، به دو یا چند مهره حریف به طور همزمان حمله می‌کند.",
    },
    {
      title: "Pin (سنجاق)",
      description:
        "مهره‌ای نمی‌تواند حرکت کند زیرا پشت آن مهره ارزشمندتری قرار دارد.",
    },
    {
      title: "Skewer (سیخ)",
      description:
        "ابتدا به مهره با ارزش‌تر حمله می‌شود و پس از حرکت آن، مهره پشت سرش از دست می‌رود.",
    },
    {
      title: "Discovered Attack",
      description:
        "با کنار رفتن یک مهره، حمله مهره دیگری آشکار می‌شود.",
    },
    {
      title: "Double Attack",
      description:
        "حمله همزمان به دو هدف مختلف که دفاع از هر دو ممکن نیست.",
    },
    {
      title: "Discovered Check",
      description:
        "کنار رفتن یک مهره باعث کیش شدن شاه توسط مهره دیگر می‌شود.",
    },
    {
      title: "Double Check",
      description:
        "شاه به طور همزمان توسط دو مهره کیش می‌شود و تنها راه دفاع، حرکت شاه است.",
    },
    {
      title: "Deflection",
      description:
        "وادار کردن مهره مدافع به ترک خانه مهم.",
    },
    {
      title: "Decoy",
      description:
        "کشاندن مهره یا شاه حریف به خانه‌ای نامناسب.",
    },
    {
      title: "Zwischenzug",
      description:
        "اجرای یک حرکت میانی غیرمنتظره قبل از انجام حرکت مورد انتظار.",
    },
    {
      title: "X-Ray",
      description:
        "فشار یک مهره از میان مهره‌های دیگر روی هدف اصلی.",
    },
    {
      title: "Back Rank Mate",
      description:
        "مات کردن شاه در ردیف آخر به علت محدود بودن خانه‌های فرار.",
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
      <h1>Chess Tactics</h1>
 
      <p
        style={{
          color: "#666",
          fontSize: 18,
          marginBottom: 40,
        }}
      >
        تاکتیک‌ها مهم‌ترین بخش شطرنج هستند. شناخت الگوهای تاکتیکی باعث افزایش
        قدرت محاسبه، پیدا کردن ترکیب‌ها و جلوگیری از اشتباهات می‌شود.
      </p>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 20,
        }}
      >
        {tactics.map((item) => (
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
        <h2>نکات مهم</h2>
 
        <ul
          style={{
            lineHeight: 2,
          }}
        >
          <li>قبل از هر حرکت تمام کیش‌ها را بررسی کنید.</li>
          <li>حرکت‌های گرفتن مهره را بررسی کنید.</li>
          <li>تهدیدهای مستقیم را پیدا کنید.</li>
          <li>همیشه به دنبال حمله همزمان باشید.</li>
          <li>هر روز چند معمای تاکتیکی حل کنید.</li>
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
        <h2>تمرین روزانه</h2>
 
        <p>
          پیشنهاد می‌شود روزانه حداقل ۲۰ تا ۳۰ معمای تاکتیکی حل کنید. تمرین
          مداوم باعث می‌شود الگوهای تاکتیکی را سریع‌تر تشخیص دهید و در مسابقات
          عملکرد بهتری داشته باشید.
        </p>
      </section>
    </main>
  );
}