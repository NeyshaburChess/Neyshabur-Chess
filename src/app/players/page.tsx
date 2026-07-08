export default function PlayersPage() {
 
  const players = [
    {
      name: "Boozhmehrani, Mehrab",
      image: "/players/mehrab.jpg",
      link: "/players/mehrab-boozhmehrani",
    },
    {
      name: "Akbari, Rosha",
      image: "/players/rosha.jpg",
      link: "/players/rosha-akbari",
    },
    {
      name: "Rajabzade, Ali",
      image: "/players/ali.jpg",
      link: "/players/ali-rajabzade",
    },
    {
      name: "Razavi, Seyyed Amirreza",
      image: "/players/amirreza.jpg",
      link: "/players/seyed-amirreza-razavi",
    },
    {
      name: "Shadanpour, Sana",
      image: "/players/sana.jpg",
      link: "/players/sana-shadanpour",
    },
    {
      name: "Abdollahabadi, Amir Hosien",
      image: "/players/amir.jpg",
      link: "/players/amir-abdollahabadi",
    },
    {
      name: "Dadpour, Kiarash",
      image: "/players/kiarash.jpg",
      link: "/players/kiarash-dadpour",
    },
    {
      name: "Elahi, Avesta",
      image: "/players/avesta.jpg",
      link: "/players/avesta-elahi",
    },
    {
      name: "Attar, Behrad",
      image: "/players/behrad.jpg",
      link: "/players/behrad-attar",
    },
    {
      name: "Shams Abadi, Baran",
      image: "/players/baran.jpg",
      link: "/players/baran-shamsabadi",
    },
  ];
 
 
  return (
    <main
      style={{
        maxWidth:"1000px",
        margin:"0 auto",
        padding:"40px",
      }}
    >
 
      <h1
        style={{
          textAlign:"center",
          color:"#001F3F",
          fontSize:"38px",
          fontStyle:"italic",
          fontFamily:"Georgia, serif",
          marginBottom:"40px",
        }}
      >
        ♟ Players
      </h1>
 
 
      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"25px",
        }}
      >
 
        {players.map((player)=>(
          <div
            key={player.name}
            style={{
              background:"#fff",
              borderRadius:"18px",
              overflow:"hidden",
              textAlign:"center",
              boxShadow:"0 8px 20px rgba(0,0,0,.12)",
            }}
          >
 
            <img
              src={player.image}
              alt={player.name}
              style={{
                width:"100%",
                height:"230px",
                objectFit:"cover",
              }}
            />
 
 
            <div style={{padding:"20px"}}>
 
              <h2
                style={{
                  color:"#001F3F",
                  fontStyle:"italic",
                  fontFamily:"Georgia, serif",
                  fontSize:"21px",
                }}
              >
                {player.name}
              </h2>
 
 
              <a
                href={player.link}
                style={{
                  display:"inline-block",
                  marginTop:"10px",
                  background:"#FFD700",
                  color:"#001F3F",
                  padding:"10px 20px",
                  borderRadius:"8px",
                  textDecoration:"none",
                  fontWeight:"bold",
                }}
              >
                مشاهده رزومه
              </a>
 
            </div>
 
          </div>
        ))}
 
      </div>
 
    </main>
  );
}