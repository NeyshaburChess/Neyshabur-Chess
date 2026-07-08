export default function ContactPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#001F3F",
          marginBottom: "35px",
        }}
      >
        تماس با هیأت شطرنج شهرستان نیشابور
      </h1>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {/* اطلاعات */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.12)",
          }}
        >
          <h2 style={{ color: "#001F3F" }}>📍 اطلاعات تماس</h2>
 
          <p>
            <b>آدرس:</b><br />
            نیشابور، خیابان فلسطین، درب ورودی هیأت فوتبال، طبقه دوم
          </p>
 
          <p>
            <b>🕒 ساعات کاری:</b><br />
            همه روزه
          </p>
        </div>
 
        {/* شماره‌ها */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.12)",
          }}
        >
          <h2 style={{ color: "#001F3F" }}>☎️ شماره‌های تماس</h2>
 
          <p>
            <b>مهدی بوژمهرانی</b><br />
            09153528177
          </p>
 
          <p>
            <b>مسعود مشایخان</b><br />
            09155516167
          </p>
        </div>
 
        {/* شبکه‌های اجتماعی */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.12)",
          }}
        >
          <h2 style={{ color: "#001F3F" }}>🌐 شبکه‌های اجتماعی</h2>
 
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <a
              href="https://www.instagram.com/chessneyshabur.official"
              target="_blank"
            >
              <img src="/icons/instagram.png" width={45} />
            </a>
 
            <a
              href="https://chat.whatsapp.com/JDk9FwIfeVZ4aEYpgQbs4l"
              target="_blank"
            >
              <img src="/icons/whatsapp.png" width={45} />
            </a>
 
            <a
              href="https://eitaa.com/CHESSABARSHAHR"
              target="_blank"
            >
              <img src="/icons/eitaa.png" width={45} />
            </a>
          </div>
        </div>
 
        {/* نقشه */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.12)",
          }}
        >
          <h2 style={{ color: "#001F3F" }}>🗺️ موقعیت مکانی</h2>
 
          <p>
            نیشابور، خیابان فلسطین، درب ورودی هیأت فوتبال، طبقه دوم
          </p>
 
          <a
            href="https://maps.app.goo.gl/bbgZBHJ7MwsvA6Qz9?g_st=ac"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "15px",
              background: "#001F3F",
              color: "white",
              padding: "10px 18px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            مشاهده روی نقشه
          </a>
        </div>
      </div>
    </main>
  );
}