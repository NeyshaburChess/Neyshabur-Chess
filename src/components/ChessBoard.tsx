"use client";
 
import { Chessboard } from "react-chessboard";
 
type ChessBoardProps = {
  position: string;
};
 
export default function ChessBoard({ position }: ChessBoardProps) {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Chessboard
        id="OpeningBoard"
        position={position}
        arePiecesDraggable={false}
        boardWidth={600}
      />
    </div>
  );
}

