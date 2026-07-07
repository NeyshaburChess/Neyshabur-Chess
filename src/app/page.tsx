"use client";
 
export default function Home() {
  const sections = [
    { title: "کلاس‌های آموزشی", icon: "/icons/training.png", link: "/training" },
    { title: "مقالات شطرنج", icon: "/icons/articles.png", link: "/articles" },
    { title: "کتابخانه آنلاین", icon: "/icons/library.png", link: "/library" },
    { title: "قوانین جهانی شطرنج", icon: "/icons/rules.png", link: "/rules" },
    { title: "رویدادها و دوره‌ها", icon: "/icons/events.png", link: "/events" },
 
    // مسابقات → سه بخش
    { title: "جدول زمان‌بندی مسابقات", icon: "/icons/schedule.png", link: "/tournaments/schedule" },
    { title: "آیین‌نامه مسابقات", icon: "/icons/regulations.png", link: "/tournaments/rules" },
    { title: "آرشیو نتایج", icon: "/icons/results.png", link: "/tournaments/results" },
 
    // رزومه و افتخارات
    { title: "رزومه و افتخارات بازیکنان", icon: "/icons/achievements.png", link: "/achievements" },
 
    // حساب کاربری
    { title: "حساب کاربری", icon: "/icons/account.png", link: "/account" },
  ];
 
  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", fontFamily: "sans-serif" }}>
      
      {/* عنوان سایت */}
      <h1
        style={{
          textAlign: "center",
          color: "#001F3F",
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "25px",
        }}
      >
        هیأت شطرنج شهرستان نیشابور
      </h1>
 
      {/* هدر */}
      <header
        style={{
          background: "#001F3F",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <nav style={{ display: "flex", gap: "15px" }}>
          <a href="/" style={{ color: "white" }}>خانه</a>
          <a href="/gallery" style={{ color: "white" }}>گالری</a>
          <a href="/news" style={{ color: "white" }}>اخبار</a>
          <a href="/players" style={{ color: "white" }}>بازیکنان</a>
          <a href="/register" style={{ color: "white" }}>ثبت‌نام</a>
        </nav>
 
        {/* حساب کاربری + تماس با ما */}
        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href="/account"
            style={{
              background: "white",
              color: "#001F3F",
              padding: "5px 10px",
              borderRadius: "6px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            حساب کاربری
          </a>
 
          <a
            href="/contact"
            style={{
              background: "white",
              color: "#001F3F",
              padding: "5px 10px",
              borderRadius: "6px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            تماس با ما
          </a>
        </div>
      </header>
 
      {/* لوگو */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <img src="/neyshabur-chess-logo.png" style={{ width: "180px" }} />
      </div>
 
      {/* بخش‌ها + آیکون‌ها */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {sections.map((item) => (
          <a
            key={item.title}
            href={item.link}
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "2px solid #001F3F",
              borderRadius: "12px",
              width: "200px",
              textAlign: "center",
              padding: "20px",
              color: "#001F3F",
              textDecoration: "none",
              transition: "0.2s",
            }}
          >
            <img src={item.icon} style={{ width: "70px", marginBottom: "10px" }} />
            <h3 style={{ fontSize: "17px" }}>{item.title}</h3>
          </a>
        ))}
      </div>
 
      {/* فوتر */}
      <footer
        style={{
          background: "#001F3F",
          color: "white",
          padding: "20px 10px",
          borderRadius: "10px",
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <a href="https://www.instagram.com/chessneyshabur.official" target="_blank">
            <img src="/icons/instagram.png" style={{ width: "40px", margin: "0 10px" }} />
          </a>
          <a href="https://chat.whatsapp.com/JDk9FwIfeVZ4aEYpgQbs4l" target="_blank">
            <img src="/icons/whatsapp.png" style={{ width: "40px", margin: "0 10px" }} />
          </a>
          <a href="https://eitaa.com/CHESSABARSHAHR" target="_blank">
            <img src="/icons/eitaa.png" style={{ width: "40px", margin: "0 10px" }} />
          </a>
        </div>
 
        <p style={{ fontSize: "14px" }}>
          © هیأت شطرنج شهرستان نیشابور - تمامی حقوق محفوظ است
        </p>
 
        <p style={{ fontSize: "14px", marginTop: "10px" }}>
          Design & Development by <strong>Mehrab Boozhmehrani</strong>
        </p>
      </footer>
 
    </main>
  );
}