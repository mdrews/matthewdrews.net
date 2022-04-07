// import './App.css';
import raw from '../public/static/wordleDict';

function Wordle() {

  const wordle = raw.toString().split(/\n/);
  const green = []
  const yellow = [['T', 2], ['A', 3], ['L', 4]]
  const rejected = ['S', 'E']
  // const [getRejected, setRejected] = useState();
  let filteredWordle = wordle.filter(word => word.length === 5)
  
  // REJECTED
  for(let x = 0; x < rejected.length; x++) {
    filteredWordle = filteredWordle.filter(word => !word.includes(rejected[x]));
  }
  let joinedList = filteredWordle.join('');

  // GREEN
  for (let x = 0; x < green.length; x++) {
    let letter = green[x][0];
    let position = green[x][1] - 1;
    filteredWordle = filteredWordle.filter(word => word.includes(letter) && word[position] === letter)
  }
  // YELLOW
  for (let x = 0; x < yellow.length; x++) {
    console.log(filteredWordle)
    let letter = yellow[x][0]
    let position = yellow[x][1] - 1
    console.log(letter)
    console.log(position)
    filteredWordle = filteredWordle.filter(word => word.includes(letter) && word[position] !== letter)
  }
  // filteredWordle = filteredWordle.filter(word => word.includes('R') && word[3] !== 'R');
  let letterGrid = [];
  for (let x = 0; x < joinedList.length; x++) {
    let letter = joinedList[x];
    if (joinedList[x] in letterGrid) {
      letterGrid[letter] += 1;
    } else {
      letterGrid[joinedList[x]] = 1;
    }
  }
  console.log(letterGrid);
  const sortable = []
  for (let letter in letterGrid) {
    sortable.push([letter, letterGrid[letter]]);
  }
  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });
  console.log(`sortable: ${sortable}`)
  console.log(sortable[0])
  console.log(sortable[1])
  console.log(`sortable2: ${sortable[1]}`)

  let bestList = filteredWordle.filter(word => 
    word.includes(sortable[0][0])
    && word.includes(sortable[1][0])
    // && word.includes(sortable[2][0])
    // && word.includes(sortable[3][0])
    )

  console.log('best')
  console.log(bestList)
  console.log(filteredWordle.filter(word => word.includes(sortable[0][0])))
  function updateWordList(e) {
    console.log(`FROM INPUT: ${e.target.value}`);
    return e.target.value;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input 
          type="text"
          value="test1"
        />
        <div>words: {filteredWordle.length}</div>
        <div>{filteredWordle.join(' ')}</div>
        {/* <div>{filteredWordle.forEach(word => <p>{word}</p>)}</div> */}
      </header>
    </div>
  );
}

export default Wordle;
