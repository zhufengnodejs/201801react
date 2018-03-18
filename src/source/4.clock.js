import React from 'react';
import ReactDOM from 'react-dom';
function tick(){
  let clock = (
      <div>
          <h1>hello</h1>
          <h2>{new Date().toLocaleString()}</h2>
      </div>
  )
  ReactDOM.render(clock, document.getElementById('root'));
}
setInterval(tick,1000);
