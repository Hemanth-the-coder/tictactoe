import React from "react";
import Board from "./components/board";
import { useState } from "react";
import "./styles/style.comp.scss"
import { calculateWinner } from "./winner";
import History from "./History";
import Startnewgame from "../Startnewgame";

const App = () => {
<script src="https://cdn.tailwindcss.com"></script>

const [history, setHistory] = useState([{board:Array(9).fill(null) , isxnext: true}]);
// console.log("renrender 1")
const [currentmove , setCurrentMove] = useState(0);
const current= history[currentmove];

// console.log(current.board)
// console.log("rerender2")
console.log(currentmove)
// console.log(board)
const winner = calculateWinner(current.board)
console.log(winner)

// const message=winner ? `The winner is ${winner}`:`The next player is ${current.isxnext ? 'X':'O'}`
const handlesqaureclick=(position)=>{
  if ((current.board[position] === null) && winner === null){
  setHistory((prev)=>{
    const last=prev[prev.length-1];
    // console.log(last)
    const newboard= last.board.map((sqaure,pos)=>{
      if(pos === position){
        return last.isxnext ? 'X' : 'O'
      }
      else{
        return sqaure
      }
    })
    console.log(newboard)

    return prev.concat({board: newboard , isxnext:!last.isxnext })
  })
}
else{
  return;
}
setCurrentMove((prev)=>{
 prev=prev+1;
 return prev
})
}

const gotomove=(move)=>{
  setCurrentMove(move)
  console.log("this is to be printed")
  console.log(currentmove)
}

const startfresh=(x)=>{
  setCurrentMove(x)
  setHistory(()=>{
    return [{board:Array(9).fill(null) , isxnext: true}]
  })
}

const isfull=current.board.every((el)=>{ return el!==null})
{return  (
  
  <div className="app">
    <h1> <span style={{color:'yellow'}}>TIC</span> <span style={{color:'rgb(100, 223, 100)'}}>TAC</span> <span style={{color:'yellow'}}>TOE</span></h1>
    <h2 className="winner">
      {winner && `winner is ${winner}`}
      {!winner && !isfull && `next player is ${current.isxnext ? 'X':'O'}`}
      {!winner && isfull && 'X and O tied'}
      </h2>
    <Board board={current.board}  handlesqaureclick={handlesqaureclick}/>
    <History history={history} gotomove={gotomove} currentmove={currentmove}/>
    <Startnewgame startfresh={startfresh}/>

  </div>
  
)
}
};
export default App;