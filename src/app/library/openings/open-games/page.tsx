import Link from "next/link";
 
const openings = [
  {
    title: "Italian Game",
    subtitle: "بازی ایتالیایی",
    moves: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
    eco: "C50-C54",
    href: "/library/openings/open-games/italian-game",
  },
  {
    title: "Ruy Lopez",
    subtitle: "شروع اسپانیایی",
    moves: "1.e4 e5 2.Nf3 Nc6 3.Bb5",
    eco: "C60-C99",
    href: "/library/openings/open-games/ruy-lopez",
  },
  {
    title: "Scotch Game",
    subtitle: "بازی اسکاتلندی",
    moves: "1.e4 e5 2.Nf3 Nc6 3.d4",
    eco: "C44-C45",
    href: "/library/openings/open-games/scotch-game",
  },
  {
    title: "Four Knights Game",
    subtitle: "بازی چهار اسب",
    moves: "1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6",
    eco: "C47-C49",
    href: "/library/openings/open-games/four-knights",
  },
  {
    title: "Vienna Game",
    subtitle: "بازی وین",
    moves: "1.e4 e5 2.Nc3",
    eco: "C25-C29",
    href: "/library/openings/open-games/vienna-game",
  },
  {
    title: "King's Gambit",
    subtitle: "گامبی شاه",
    moves: "1.e4 e5 2.f4",
    eco: "C30-C39",
    href: "/library/openings/open-games/kings-gambit",
  },
  {
    title: "Evans Gambit",
    subtitle: "گامبی اوانز",
    moves: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4",
    eco: "C51-C52",
    href: "/library/openings/open-games/evans-gambit",
  },
];
 
export default function OpenGamesPage() {
  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Open Games
      </h1>
 
      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: 40,
        }}
      >
        شروع‌هایی که با حرکات 1.e4 e5 آغاز می‌شوند.
      </p>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 25,
        }}
      >
        {openings.map((opening) => (
          <Link
            key={opening.title}
            href={opening.href}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: 14,
                padding: 20,
                transition: "0.2s",
                height: "100%",
              }}
            >
              <h2>{opening.title}</h2>
 
              <p
                style={{
                  color: "#777",
                }}
              >
                {opening.subtitle}
              </p>
 
              <p>
                <strong>حرکات:</strong>
              </p>
 
              <code>{opening.moves}</code>
 
              <p style={{ marginTop: 15 }}>
                <strong>ECO:</strong> {opening.eco}
              </p>
 
              <button
                style={{
                  marginTop: 20,
                  width: "100%",
                  padding: 12,
                  cursor: "pointer",
                }}
              >
                مشاهده صفحه شروع
              </button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}


