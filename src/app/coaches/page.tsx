export default function CoachesPage() {
 
  const coaches = [
    {
      name: "نام مربی",
      image: "/coaches/coach1.jpg",
      link: "/coaches/coach1",
    },
    {
      name: "نام مربی",
      image: "/coaches/coach2.jpg",
      link: "/coaches/coach2",
    },
    {
      name: "نام مربی",
      image: "/coaches/coach3.jpg",
      link: "/coaches/coach3",
    },
  ];
 
 
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
 
      <h1
        style={{
          textAlign: "center",
          color: "#001F3F",
          fontSize: "34px",
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
          marginBottom: "40px",
        }}
      >
        ♟ Coaches
      </h1>
 
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
 
        {coaches.map((coach) => (
 
          <div
            key={coach.name}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,.12)",
            }}
          >
 
            <img
              src={coach.image}
              alt={coach.name}
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
              }}
            />
 
 
            <div
              style={{
                padding: "20px",
              }}
            >
 
              <h2
                style={{
                  color:"#001F3F",
                  fontSize:"22px",
                  fontStyle:"italic",
                  fontFamily:"Georgia, serif",
                }}
              >
                {coach.name}
              </h2>
 
 
              <a
                href={coach.link}
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