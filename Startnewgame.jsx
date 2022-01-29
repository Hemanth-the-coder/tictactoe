import React from 'react';
import "./src/styles/style.comp.scss"
const Startnewgame = ({startfresh}) => {
  return <div>
      <button className="startbutton" type="button" onClick={()=>{
          startfresh(0)
      }}>
        Start a new game
      </button>
  </div>;
};

export default Startnewgame;
