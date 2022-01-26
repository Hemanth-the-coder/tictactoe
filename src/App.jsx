import React from "react";
import Board from "./components/board";
import { useState } from "react";
import "./styles/style.comp.scss"
import { calculateWinner } from "./winner";
const App = () => {
const [board, setBoard] = useState(Array(9).fill(null))
const [isxnext , setstate] = useState(false)
// console.log(board)
const winner = calculateWinner(board)
console.log(winner)

const message=winner ? `The winner is ${winner}`:`The next player is ${isxnext ? 'X':'O'}`
const handlesqaureclick=(position)=>{
  if ((board[position] === null) && winner === null){
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
{return  (
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={board}  handlesqaureclick={handlesqaureclick}/>
  </div>
)
}
};
export default App;