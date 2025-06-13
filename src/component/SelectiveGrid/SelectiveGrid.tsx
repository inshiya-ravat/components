import { useState } from "react";

type Coord = {
  x: number;
  y: number;
};

function insideRectCheck(start: Coord, end: Coord, x: number, y: number) {
  const minX = Math.min(start.x, end.x);
  const maxX = Math.max(start.x, end.x);
  const minY = Math.min(start.y, end.y);
  const maxY = Math.max(start.y, end.y);

  return x >= minX && x <= maxX && y >= minY && y <= maxY;
}
function generateGrid() {
  const grid = [];
  for (let i = 0; i < 25; i++) {
    const row = [];
    for (let j = 0; j < 25; j++) {
      row.push("white");
    }
    grid.push(row);
  }
  return grid;
}
const SelectiveGrid = () => {
  const grid = generateGrid();
  const [startCell, setStartCell] = useState<Coord | null>(null);
  const [endCell, setEndCell] = useState<Coord | null>(null);
  const [isMouseClick, setIsMouseClick] = useState(false);
  function handleMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target instanceof HTMLDivElement) {
      setIsMouseClick(true);
      setStartCell({
        x: Number(e.target.dataset.row),
        y: Number(e.target.dataset.col),
      });
    }
  }
  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    //if check 
    if (e.target instanceof HTMLDivElement) {
      setEndCell({
        x: Number(e.target.dataset.row),
        y: Number(e.target.dataset.col),
      });
    }
  }
  function handleMouseUp() {
    setIsMouseClick(false);
  }
  return (
    <div
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseOver={(e) => handleMouseEnter(e)}
      onMouseUp={handleMouseUp}
    >
      {grid.map((row, rowIndex) => (
        <div style={{ display: "flex" }} key={rowIndex}>
          {row.map((cell, columnIndex) => {
            let isInsideRect;
            if(isMouseClick && startCell && endCell){
              isInsideRect = insideRectCheck(startCell,endCell,rowIndex,columnIndex) ? "#baeff5" : "white";
            }
            return (
              <div
                key={`${rowIndex}-${columnIndex}`}
                data-row={rowIndex}
                data-col={columnIndex}
                style={{
                  width: "50px",
                  height: "30px",
                  backgroundColor: isInsideRect ?? "white",
                  border: "1px solid black",
                }}
              >
                {undefined}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SelectiveGrid;
