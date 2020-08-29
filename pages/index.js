import React, { useState } from 'react';

const InputElement = () => {

  const { textInput, setTextInput }= useState("");
  return(
    <div>
      <input 
        onChange={e => setTextInput(e.target.value) }
        placeholder="Add Some Text" />
        {textInput && textInput.map(a => {
          return(<div>{a}</div>);
        })}
    </div>
  );
}

export default InputElement;