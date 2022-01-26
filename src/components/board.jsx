import React ,{useState} from "react";
import Square from "./Square";

const Board = ()=>{
const [board, setBoard] = useState(Array(9).fill(null))
const [isxnext , setstate] = useState(false)
console.log(board)
const handlesqaureclick=(position)=>{
  if (board[position] === null){
  setBoard((prev)=>{
    return prev.map((sqaure,pos)=>{
      if(pos === position){
        return isxnext ? 'X' : 'O'
      }
      else{
        return sqaure
      }
    })
  })
}
  setstate((prev)=>{ return !prev})
}

return (
    <div className="board">
        <div className="board-row">
          <Square value={board[0]} onClick={()=>{handlesqaureclick(0)}}/>
          <Square value={board[1]} onClick={()=>{handlesqaureclick(1)}}/>
          <Square value={board[2]}  onClick={()=>{handlesqaureclick(2)}}/>
          
        </div>
        <div className="board-row">
        <Square value={board[3]} onClick={()=>{handlesqaureclick(3)}}/>
          <Square value={board[4]} onClick={()=>{handlesqaureclick(4)}}/>
          <Square value={board[5]} onClick={()=>{handlesqaureclick(5)}}/>
        </div>
        <div className="board-row">
        <Square value={board[6]} onClick={()=>{handlesqaureclick(6)}}/>
          <Square value={board[7]} onClick={()=>{handlesqaureclick(7)}}/>
          <Square value={board[8]} onClick={()=>{handlesqaureclick(8)}}/>
        </div>
     
    </div>
)
}
export default Board