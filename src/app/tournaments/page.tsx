export default function Tournaments() {
  const tournaments = [
    {
      title: "پنجمین دوره مسابقات قهرمانان نیشابور",
      link: "https://s2.chess-results.com/tnr1431244.aspx?lan=5&SNode=S0",
    },
    {
      title: "چهارمین دوره مسابقات قهرمانان نیشابور",
      link: "https://s3.chess-results.com/tnr1430333.aspx?lan=1&SNode=S0",
    },
    {
      title: "سومین دوره مسابقات قهرمانان نیشابور",
      link: "https://s3.chess-results.com/tnr1360364.aspx?lan=23&SNode=S0",
    },
    {
      title: "دومین دوره مسابقات قهرمانان نیشابور",
      link: "https://s1.chess-results.com/tnr1286061.aspx?lan=26&turdet=YES&SNode=S0",
    },
    {
      title: "اولین دوره مسابقات قهرمانان نیشابور",
      link: "https://s3.chess-results.com/tnr1233602.aspx?lan=4&art=0&fed=IRI&SNode=S0",
    },
  ];
 
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#001F3F",
          marginBottom: "40px",
        }}
      >
        مسابقات هیأت شطرنج شهرستان نیشابور
      </h1>
 
      {/* مسابقه ویژه */}
 
      <section
        style={{
          background: "linear-gradient(135deg,#001F3F,#003F7D)",
          color: "white",
          borderRadius: "18px",
          padding: "35px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ color: "#FFD700" }}>مسابقه ویژه</h2>
 
        <h3>بیست و نهمین دوره مسابقات سریع آکادمی شطرنج امیر نساج</h3>
 
        <p>📅 جمعه ۱۹ تیر ۱۴۰۵</p>
 
        <p>⏱ کنترل زمانی: 10+3</p>
 
        <a
          href="/register"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "#FFD700",
            color: "#001F3F",
            padding: "12px 25px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ثبت نام مسابقه
        </a>
      </section>
 
      {/* دسترسی سریع */}
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginBottom: "45px",
        }}
      >
        <a href="/register" style={card}>
          📝
          <br />
          ثبت نام مسابقات
        </a>
 
        <a href="/tournaments/rules" style={card}>
          📋
          <br />
          آیین نامه مسابقات
        </a>
 
        <a href="/tournaments/schedule" style={card}>
          📅
          <br />
          جدول زمان بندی
        </a>
      </div>
 
      {/* آرشیو */}
 
      <h2
        style={{
          color: "#001F3F",
          marginBottom: "20px",
        }}
      >
        آرشیو نتایج مسابقات
      </h2>
 
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {tournaments.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            style={{
              background: "#001F3F",
              color: "white",
              padding: "15px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </a>
        ))}
      </div>
    </main>
  );
}
 
const card = {
  background: "#ffffff",
  color: "#001F3F",
  textDecoration: "none",
  borderRadius: "15px",
  padding: "30px",
  textAlign: "center" as const,
  fontWeight: "bold",
  fontSize: "18px",
  boxShadow: "0 8px 20px rgba(0,0,0,.12)",
};