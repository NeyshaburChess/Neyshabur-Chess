export default function Tournaments() {
  return (
    <main style={{ padding: 30, maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>
        مسابقات قهرمان نیشابور
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>

        <a
          href="https://s2.chess-results.com/tnr1431244.aspx?lan=5&SNode=S0"
          target="_blank"
          style={{ background: "#001F3F", color: "white", padding: 12, borderRadius: 8, textDecoration: "none" }}
        >
          پنجمین دوره مسابقات قهرمان نیشابور
        </a>

        <a
          href="https://s3.chess-results.com/tnr1430333.aspx?lan=1&SNode=S0"
          target="_blank"
          style={{ background: "#001F3F", color: "white", padding: 12, borderRadius: 8, textDecoration: "none" }}
        >
          چهارمین دوره مسابقات قهرمانان نیشابور
        </a>

        <a
          href="https://s3.chess-results.com/tnr1360364.aspx?lan=23&SNode=S0"
          target="_blank"
          style={{ background: "#001F3F", color: "white", padding: 12, borderRadius: 8, textDecoration: "none" }}
        >
          سومین دوره مسابقات قهرمانان نیشابور
        </a>

        <a
          href="https://s1.chess-results.com/tnr1286061.aspx?lan=26&turdet=YES&SNode=S0"
          target="_blank"
          style={{ background: "#001F3F", color: "white", padding: 12, borderRadius: 8, textDecoration: "none" }}
        >
          دومین دوره مسابقات قهرمانان نیشابور
        </a>

        <a
          href="https://s3.chess-results.com/tnr1233602.aspx?lan=4&art=0&fed=IRI&SNode=S0"
          target="_blank"
          style={{ background: "#001F3F", color: "white", padding: 12, borderRadius: 8, textDecoration: "none" }}
        >
          اولین دوره مسابقات قهرمانان نیشابور
        </a>

      </div>
    </main>
  );
}