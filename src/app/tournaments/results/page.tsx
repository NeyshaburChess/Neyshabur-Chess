export default function ResultsPage() {
 
  const results = [
    {
      title: "پنجمین دوره مسابقات قهرمانان نیشابور",
      date: "۱۹ تیر ۱۴۰۵",
      first: "نام نفر اول",
      second: "نام نفر دوم",
      third: "نام نفر سوم",
      link: "https://s2.chess-results.com/tnr1431244.aspx?lan=5&SNode=S0",
    },
    {
      title: "چهارمین دوره مسابقات قهرمانان نیشابور",
      date: "۲۰ خرداد ۱۴۰۵",
      first: "نام نفر اول",
      second: "نام نفر دوم",
      third: "نام نفر سوم",
      link: "https://s3.chess-results.com/tnr1430333.aspx?lan=1&SNode=S0",
    },
    {
      title: "سومین دوره مسابقات قهرمانان نیشابور",
      date: "۱۴۰۴",
      first: "نام نفر اول",
      second: "نام نفر دوم",
      third: "نام نفر سوم",
      link: "https://s3.chess-results.com/tnr1360364.aspx?lan=23&SNode=S0",
    },
    {title: "مسابقات قهرمانی پیشکسوتان" ,
      date: "1404/08/30" ,
      first: "محمدتقی والسلام" ,
      second: "آصف رحمانی" , 
      third: "ابوالفضل عابدی" ,
      link: "https://s1.chess-results.com/tnr1298099.aspx?lan=1&art=4&turdet=YES&SNode=S0" ,
    }
  ];
 
 
  return (
    <main
      style={{
        maxWidth:"1100px",
        margin:"0 auto",
        padding:"30px",
      }}
    >
 
      <h1
        style={{
          textAlign:"center",
          color:"#001F3F",
          marginBottom:"30px"
        }}
      >
        آرشیو نتایج مسابقات
      </h1>
 
 
      <div
        style={{
          background:"#fff",
          borderRadius:"15px",
          overflowX:"auto",
          boxShadow:"0 8px 20px rgba(0,0,0,.12)"
        }}
      >
 
        <table
          style={{
            width:"100%",
            borderCollapse:"collapse",
            textAlign:"center"
          }}
        >
 
          <thead>
            <tr
              style={{
                background:"#001F3F",
                color:"white"
              }}
            >
              <th style={cell}>نام مسابقه</th>
              <th style={cell}>تاریخ مسابقه</th>
              <th style={cell}>🥇 نفر اول</th>
              <th style={cell}>🥈 نفر دوم</th>
              <th style={cell}>🥉 نفر سوم</th>
            </tr>
          </thead>
 
 
          <tbody>
 
          {results.map((item)=>(
            <tr key={item.title}>
 
              <td style={cell}>
                <a
                  href={item.link}
                  target="_blank"
                  style={{
                    color:"#0055cc",
                    fontWeight:"bold",
                    textDecoration:"none"
                  }}
                >
                  {item.title}
                </a>
              </td>
 
              <td style={cell}>
                {item.date}
              </td>
 
              <td style={cell}>
                {item.first}
              </td>
 
              <td style={cell}>
                {item.second}
              </td>
 
              <td style={cell}>
                {item.third}
              </td>
 
            </tr>
          ))}
 
          </tbody>
 
        </table>
 
      </div>
 
    </main>
  );
}
 
 
const cell = {
  padding:"15px",
  borderBottom:"1px solid #ddd",
};