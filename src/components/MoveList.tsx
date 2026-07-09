"use client";
 
type MoveListProps = {
  moves: string[];
  currentMove: number;
  onSelectMove: (move: number) => void;
};
 
export default function MoveList({
  moves,
  currentMove,
  onSelectMove,
}: MoveListProps) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,.12)",
        maxHeight: "500px",
        overflowY: "auto",
      }}
    >
      <h3
        style={{
          marginBottom: "15px",
          color: "#001F3F",
        }}
      >
        حرکات بازی
      </h3>
 
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {moves.map((move, index) => (
          <button
            key={index}
            onClick={() => onSelectMove(index + 1)}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border:
                currentMove === index + 1
                  ? "2px solid #D4AF37"
                  : "1px solid #ccc",
              background:
                currentMove === index + 1 ? "#001F3F" : "#fff",
              color:
                currentMove === index + 1 ? "#fff" : "#000",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {index + 1}. {move}
          </button>
        ))}
      </div>
    </div>
  );
}

