import React from 'react';
import "./styles/style.comp.scss";

const History = ({history , gotomove , currentmove}) => {
    return  <ul className="liststyle">{
    history.map((_,move)=>{
    return <li key={move}>
        <button className="historybtn" style={{fontWeight: move===currentmove? 'bold':'normal'}}
        type="button" onClick={()=>{
            gotomove(move)
        }}>{move===0? 'Go to start game' : `Go to move #${move}`}</button></li>
    })
}
    </ul>;
};
export default History;
