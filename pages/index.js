import React, { useState } from 'react';

const MessageHistory = () => {
  
  const [textHistory, setTextHistory] = useState([]);

  return(
    <div>
      <input 
        onChange={e => {setTextHistoryHistory([...textHistory, e.target.value])}}
        placeholder='Enter Some Text'
        value={textHistory[textHistory.length-1]}
      />
      <div>{textHistory[textHistory.length-1]}</div>
      {textHistory.map(message => {
        return(<div>{message}</div>);
      })}
    </div>
  )
}

export default MessageHistory;