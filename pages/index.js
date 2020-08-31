import React, { useState } from 'react';

const InputElement = () => {
  
  const [textHistory, setTextHistory] = useState([]);
  
  return(<div>
    <input 
      onChange={e => {
        setTextHistory([...textHistory, e.target.value]);
      }}
      value={textHistory[textHistory.length-1]}
      placeholder="Enter Some Text"
    />
    <br />{textHistory[textHistory.length-1]}<br />
    {textHistory.map(item => {
      return(<div>{item}</div>);
    })}
  </div>);
}

export default InputElement;