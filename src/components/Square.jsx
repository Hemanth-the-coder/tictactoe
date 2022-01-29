import React from 'react';

const Square = ({value, onClick}) => {

 
  return (
      <button className='square' onClick={onClick} style={{color: value==='X'? 'yellow':'rgb(100, 223, 100)'}}>{value}</button>
  )
};

export default Square;
