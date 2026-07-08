export default function MehrabPage() {
  return (
    <main
      style={{
        maxWidth: "950px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      {/* کارت معرفی */}
      <section
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 10px 25px rgba(0,0,0,.12)",
          textAlign: "center",
        }}
      >
        <img
          src="/players/mehrab.jpg"
          alt="Mehrab Boozhmehrani"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "6px solid #FFD700",
          }}
        />
 
        <h1
          style={{
            marginTop: "20px",
            color: "#001F3F",
            marginBottom: "8px",
            fontSize: "34px",
          }}
        >
          مهراب بوژمهرانی
        </h1>
 
        <h2
          style={{
            margin: 0,
            color: "#555",
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            fontWeight: "normal",
          }}
        >
          Boozhmehrani, Mehrab
        </h2>
 
        <p
          style={{
            color: "#777",
            marginTop: "15px",
            fontSize: "17px",
          }}
        >
        </p>
      </section>
 
      {/* اطلاعات */}
      <section
        style={{
          background: "#fff",
          marginTop: "35px",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(0,0,0,.12)",
        }}
      >
        <h2
          style={{
            color: "#001F3F",
            marginBottom: "25px",
          }}
        >
          اطلاعات بازیکن
        </h2>
 
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "17px",
          }}
        >
          <tbody>
            <tr>
              <td style={cellTitle}>تاریخ تولد</td>
              <td style={cell}>۱۳۹۰/۰۶/۱۵</td>
            </tr>
 
            <tr>
              <td style={cellTitle}>FIDE ID</td>
              <td style={cell}>32706731</td>
            </tr>
 
            <tr>
              <td style={cellTitle}>ریتینگ استاندارد</td>
              <td style={cell}>1677</td>
            </tr>
 
            <tr>
              <td style={cellTitle}>ریتینگ سریع</td>
              <td style={cell}>1769</td>
            </tr>
 
            <tr>
              <td style={cellTitle}>ریتینگ برق‌آسا</td>
              <td style={cell}>1758</td>
            </tr>
          </tbody>
        </table>
 
        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <a
            href="https://ratings.fide.com/profile/32706731"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#0057B8",
              color: "white",
              padding: "12px 22px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            🌐 مشاهده پروفایل FIDE
          </a>
        </div>
      </section>
 
      {/* افتخارات */}
      <section
        style={{
          background: "#fff",
          marginTop: "35px",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(0,0,0,.12)",
        }}
      >
        <h2
          style={{
            color: "#001F3F",
            marginBottom: "25px",
          }}
        >
          🏆 افتخارات
        </h2>
 
        <ul
          style={{
            lineHeight: "2.3",
            fontSize: "18px",
            paddingRight: "25px",
          }}
        >
          <li>🥇 قهرمان مسابقات زیر ۱۲ سال مشهد در سال ۱۴۰۱</li>
 
          <li>🥈 نائب قهرمان زیر ۱۲ سال استان خراسان رضوی در سال ۱۴۰۱</li>
 
          <li>🥈 نائب قهرمان زیر ۸ سال استان خراسان رضوی در سال ۱۳۹۸</li>
 
          <li>🥇 قهرمان زیر ۱۲ سال شهرستان‌های استان خراسان رضوی در سال ۱۳۹۸</li>
 
          <li>🥇 قهرمان زیر ۱۲ سال مسابقات برق‌آسا استان خراسان رضوی در سال ۱۴۰۱</li>
 
          <li>🥈 نائب قهرمان مسابقات سریع استان خراسان رضوی در سال ۱۴۰۱</li>
        </ul>
      </section>
    </main>
  );
}
 
const cellTitle = {
  border: "1px solid #ddd",
  padding: "14px",
  background: "#001F3F",
  color: "white",
  fontWeight: "bold",
  width: "35%",
};
 
const cell = {
  border: "1px solid #ddd",
  padding: "14px",
};
