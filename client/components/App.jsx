import React from 'react'
import LowResClock from './LowResClock'
import Turtle from './Turtle'

function App(props) {
  const rows = [];
  for (let i = 0; i < 30; i++) {
    rows.push(
      <div className="grid-x grid-padding-x">
	<div className="left cell small-6 medium-4 large-2">
	   Hi everyone. How are you?
	</div>
        <Turtle text="I'm kinda a big deal." />
      </div>);
  }
  return (
    <div>
     Hi everyone. How are you?
     <LowResClock />
    <div className="app">
      {rows}
    </div>
  );
}

export default App;
