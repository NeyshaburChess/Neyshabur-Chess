"use client";

import { useEffect, useMemo, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

interface ChessViewerProps {
  pgn?: string;
  boardWidth?: number;
}

export default function ChessViewer({
  pgn,
  boardWidth = 520,
}: ChessViewerProps) {
  const [moves, setMoves] = useState<string[]>([]);
  const [fen, setFen] = useState(new Chess().fen());
  const [currentMove, setCurrentMove] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const initialMoves = useMemo(() => {
    if (!pgn) return [];

    try {
      const chess = new Chess();
      chess.loadPgn(pgn);
      return chess.history();
    } catch {
      return [];
    }
  }, [pgn]);

  useEffect(() => {
    setMoves(initialMoves);

    const chess = new Chess();
    setFen(chess.fen());
    setCurrentMove(0);
  }, [initialMoves]);

  function goToMove(index: number) {
    const chess = new Chess();

    for (let i = 0; i < index; i++) {
      chess.move(moves[i]);
    }

    setFen(chess.fen());
    setCurrentMove(index);
  }

  function nextMove() {
    if (currentMove < moves.length) {
      goToMove(currentMove + 1);
    }
  }

  function previousMove() {
    if (currentMove > 0) {
      goToMove(currentMove - 1);
    }
  }

  function firstMove() {
    goToMove(0);
  }

  function lastMove() {
    goToMove(moves.length);
  }

  function flipBoard() {
    setFlipped((prev) => !prev);
  }

  function restart() {
    firstMove();
  }
  return (
    <div
      style={{
        maxWidth: 850,
        margin: "30px auto",
        textAlign: "center",
        padding: 20,
      }}
    >
      <h2>نمایش بازی شطرنج</h2>

      <Chessboard
        id="ChessViewer"
        position={fen}
        boardWidth={boardWidth}
        arePiecesDraggable={false}
        boardOrientation={flipped ? "black" : "white"}
      />

      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <button onClick={firstMove}>
          ⏮ شروع
        </button>

        <button onClick={previousMove}>
          ◀ قبلی
        </button>

        <button onClick={nextMove}>
          بعدی ▶
        </button>

        <button onClick={lastMove}>
          پایان ⏭
        </button>

        <button onClick={restart}>
          🔄 دوباره
        </button>

        <button onClick={flipBoard}>
          🔃 چرخش صفحه
        </button>
      </div>

      <p
        style={{
          marginTop: 20,
          fontSize: 16,
        }}
      >
        حرکت فعلی: {currentMove} از {moves.length}
      </p>

      <div
        style={{
          marginTop: 20,
          background: "#f5f5f5",
          padding: 15,
          borderRadius: 12,
          maxHeight: 250,
          overflowY: "auto",
        }}
      >
        {moves.length === 0 ? (
          <p>
            فایل PGN برای نمایش وجود ندارد.
          </p>
        ) : (
          moves.map((move, index) => (
            <span
              key={index}
              onClick={() => goToMove(index + 1)}
              style={{
                display: "inline-block",
                margin: 6,
                cursor: "pointer",
                fontWeight:
                  currentMove === index + 1
                    ? "bold"
                    : "normal",
                padding: "4px 8px",
                borderRadius: 6,
              }}
            >
              {Math.floor(index / 2) + 1}
              {index % 2 === 0 ? "." : "..."} {move}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

