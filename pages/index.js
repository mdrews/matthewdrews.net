import React, {useState} from 'react';
// Comment

const MessageTextHistory = () => {

  const [messageHistory, setMessageHistory] = useState([]);
  
  return(<div>
    <input
      onChange={e => setMessageHistory([...messageHistory, e.target.value])}
      placeholder='Enter Some Text'
      value={messageHistory[messageHistory.length-1]}
    />
    <div>{messageHistory[messageHistory.length-1]}</div>
    {messageHistory.map(message => {
      return(<div>{message}</div>);
    })}
  </div>);
}

export default MessageTextHistory;