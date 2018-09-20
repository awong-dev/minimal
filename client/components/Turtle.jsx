import React from 'react';

function Turtle(props) {
  return (
      <div className="right cell auto">
         {props.text} <br/>
         <img src="/turtle.jpg" width="100px" />
      </div>
    );
}

export default Turtle;
