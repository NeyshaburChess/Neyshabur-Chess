"use client";
 
import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
 
interface ChessViewerProps {
  pgn?: string;
}
 
export default function ChessViewer({ pgn }: ChessViewerProps) {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(new Chess().fen());
  const [moves, setMoves] = useState<string[]>([]);
  const [currentMove, setCurrentMove] = useState(0);
 
  useEffect(() => {
    const chess = new Chess();
 
    if (pgn) {
      try {
        chess.loadPgn(pgn);
      } catch {
        console.log("PGN معتبر نیست");
      }
    }
 
    const history = chess.history();
 
    setMoves(history);
 
    const start = new Chess();
    setGame(start);
    setFen(start.fen());
    setCurrentMove(0);
  }, [pgn]);
 
 
  function goToMove(index: number) {
    const chess = new Chess();
 
    for (let i = 0; i < index; i++) {
      chess.move(moves[i]);
    }
 
    setGame(chess);
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
 
 
  return (
    <div
      style={{
        maxWidth: 850,
        margin: "30px auto",
        textAlign: "center",
      }}
    >
 
      <h2>
        نمایش بازی شطرنج
      </h2>
 
 
      <Chessboard
        position={fen}
        boardWidth={500}
      />
 
 
      <div
        style={{
          marginTop:20,
          display:"flex",
          justifyContent:"center",
          gap:10,
          flexWrap:"wrap"
        }}
      >
 
        <button onClick={firstMove}>
          ⏮ اول
        </button>
 
        <button onClick={previousMove}>
          ◀ قبلی
        </button>
 
        <button onClick={nextMove}>
          بعدی ▶
        </button>
 
        <button onClick={lastMove}>
          آخر ⏭
        </button>
 
      </div>
 
 
      <p>
        حرکت فعلی: {currentMove} از {moves.length}
      </p>
 
 
      <div
        style={{
          marginTop:20,
          background:"#f5f5f5",
          padding:15,
          borderRadius:10,
          maxHeight:200,
          overflowY:"auto"
        }}
      >
 
        {moves.map((move,index)=>(
          <span
            key={index}
            onClick={()=>goToMove(index+1)}
            style={{
              cursor:"pointer",
              margin:5,
              display:"inline-block",
              fontWeight:
              currentMove===index+1
              ?"bold"
              :"normal"
            }}
          >
            {index+1}. {move}
          </span>
        ))}
 
      </div>
 
    </div>
  );
}


