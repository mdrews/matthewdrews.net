import React, { useState } from 'react';

const InputElement = () => {

  const [ inputText, setInputText ] = useState("");
  const [ historyList, setHistoryList ] = useState([]);

  return(
    <div>
      <input 
        onChange={ e => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }
         }
        placeholder="Add Some Text" /><br />
        {historyList.map(item => {
          { return(<div>{item}</div>); }
        })}
    </div>
  );
}

export default InputElement;