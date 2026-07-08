export default function ResultsPage() {
 
  const results = [
    {
      title: "پنجمین دوره مسابقات قهرمانان نیشابور",
      date: "1405/03/15",
      first: "مسعود مصدق پور",
      second: "آرمین صفرنژاد",
      third: "امیررضا رضوی",
      link: "https://s2.chess-results.com/tnr1431244.aspx?lan=5&SNode=S0",
    },
    {
      title: "چهارمین دوره مسابقات قهرمانان نیشابور",
      date:"1405/03/14 ",
      first: "مسعود مصدق پور",
      second: " امیرحسین عبداللّه آبادی",
      third:"سبحان زحمتی",
      link: "https://s3.chess-results.com/tnr1430333.aspx?lan=1&SNode=S0",
    },
    {
      title: "سومین دوره مسابقات قهرمانان نیشابور",
      date: "1404/11/08",
      first: "سبحان زحمتی",
      second:"روشا اکبری",
      third:"جمال زارع",
      link: "https://s3.chess-results.com/tnr1360364.aspx?lan=23&SNode=S0",
    },
    {
  title: "دومین دوره مسابقات قهرمانان نیشابور",
  date: "1404/08/16",
  first: "امیررضا رضوی",
  second: "کوروش خسروی",
  third: "سبحان زحمتی",
  link: "https://s3.chess-results.com/tnr1286061.aspx?lan=26&art=1&rd=9&turdet=YES&SNode=S0",
},
{
  title: " اولین دوره مسابقات قهرمانان نیشابور",
  date: "1404/05/24 ",
  first: "سبحان زحمتی ",
  second: "کوروش خسروی ",
  third: "آرمین صفرنژاد ",
  link: "https://s3.chess-results.com/tnr1233602.aspx?lan=4&art=1&rd=11&fed=IRI&SNode=S0",
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