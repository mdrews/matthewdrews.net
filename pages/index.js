import React, { useState } from 'react';

const TrackText = () => {

  const [textHistory, setTestHistory] = useState([]);

  return(
    <div>
      <input 
        placeholder="Enter Some Text"
        value={textHistory[textHistory.length-1]}
        onChange={e => setTestHistory(e.target.value)}
      />
      <div>{textHistory[textHistory.length-1]}</div>
      {textHistory.map(textBlob => {
        return(<div>{textBlob}</div>);
      })
      }
    </div>
  );
}