import react, {useState} from 'react';

const CaptureTextHistory = () => {

  const [textHistory, setTextHistory] = useState([]);
  console.log(textHistory);
  return(
    <div>
      <input
        onChange={e => setTextHistory([...textHistory, e.target.value])}
        placeholder="Enter Some Text"
        value={textHistory[textHistory.length-1]}
      />
      <div>{textHistory[textHistory.length-1]}</div>
      {textHistory.map(message => {
        return(<div>{message}</div>);
      })}
    </div>
  );
};

export default CaptureTextHistory;