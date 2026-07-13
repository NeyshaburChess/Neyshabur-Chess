export default function StrategyPage() {
  const strategies = [
    {
      title: "Pawn Structure",
      description:
        "ساختار پیاده‌ها پایه اصلی هر نقشه است. ضعف‌ها و قدرت‌های هر موقعیت از ساختار پیاده‌ها به وجود می‌آید.",
    },
    {
      title: "Open Files",
      description:
        "ستون‌های باز بهترین محل برای فعالیت رخ‌ها هستند و معمولاً کنترل آن‌ها برتری ایجاد می‌کند.",
    },
    {
      title: "Weak Squares",
      description:
        "خانه‌های ضعیف را اشغال کنید و اجازه ندهید حریف از آن‌ها استفاده کند.",
    },
    {
      title: "Outpost",
      description:
        "اسب یا فیل روی خانه‌ای امن و غیرقابل حمله می‌تواند بسیار قدرتمند باشد.",
    },
    {
      title: "Bishop Pair",
      description:
        "داشتن هر دو فیل در بسیاری از موقعیت‌های باز یک مزیت مهم محسوب می‌شود.",
    },
    {
      title: "Good Bishop vs Bad Bishop",
      description:
        "فیلی که توسط پیاده‌های خودی محدود شده باشد معمولاً ضعیف‌تر از فیل آزاد است.",
    },
    {
      title: "Knight vs Bishop",
      description:
        "اسب در موقعیت‌های بسته و فیل در موقعیت‌های باز معمولاً عملکرد بهتری دارند.",
    },
    {
      title: "King Safety",
      description:
        "امنیت شاه همیشه باید یکی از اولویت‌های اصلی شما باشد.",
    },
    {
      title: "Initiative",
      description:
        "بازیکنی که تهدید ایجاد می‌کند معمولاً کنترل جریان بازی را در اختیار دارد.",
    },
    {
      title: "Planning",
      description:
        "هر حرکت باید بخشی از یک برنامه مشخص باشد، نه صرفاً یک حرکت تصادفی.",
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
      <h1>Chess Strategy</h1>
 
      <p
        style={{
          color: "#666",
          fontSize: 18,
          marginBottom: 40,
        }}
      >
        استراتژی به تصمیم‌های بلندمدت در شطرنج مربوط می‌شود. برخلاف تاکتیک که
        معمولاً چند حرکت را در بر می‌گیرد، استراتژی بر برنامه‌ریزی و بهبود
        تدریجی وضعیت مهره‌ها تمرکز دارد.
      </p>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 20,
        }}
      >
        {strategies.map((item) => (
          <div
            key={item.title}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 20,
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
        <h2>اصول مهم استراتژی</h2>
 
        <ul style={{ lineHeight: 2 }}>
          <li>قبل از حمله، مهره‌های خود را توسعه دهید.</li>
          <li>از ضعف‌های حریف استفاده کنید.</li>
          <li>ساختار پیاده‌ها را بی‌دلیل خراب نکنید.</li>
          <li>رخ‌ها را روی ستون‌های باز قرار دهید.</li>
          <li>برای هر حرکت یک هدف مشخص داشته باشید.</li>
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
          بازیکنان قوی تنها به دنبال پیدا کردن حرکت خوب نیستند؛ آن‌ها برای
          موقعیت خود برنامه دارند. یادگیری مفاهیم استراتژیک باعث می‌شود در
          بازی‌های طولانی تصمیم‌های دقیق‌تر و مؤثرتری بگیرید.
        </p>
      </section>
    </main>
  );
}