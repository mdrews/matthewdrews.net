import React, {useState} from 'react';
import { wordleList } from '../src/wordleDict'

function Wordle() {

  const [rejected, setRejected] = useState('');

  const green = [['O', 2]]
  const yellow = [['A', 3], ['A', 5], ['R', 4]]
  let filteredWordle = wordleList;
  
  // REJECTED
  for(let x = 0; x < rejected.length; x++) {
    filteredWordle = filteredWordle.filter(word => !word.includes(rejected[x]))
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

  let bestList1 = filteredWordle.filter(word => 
    word.includes(sortable[0][0])
    && word.includes(sortable[1][0])
    )

  let bestList2 = filteredWordle.filter(word => 
    word.includes(sortable[0][0])
    && word.includes(sortable[1][0])
    && word.includes(sortable[2][0])
    )

  let bestList3 = filteredWordle.filter(word => 
    word.includes(sortable[0][0])
    && word.includes(sortable[1][0])
    && word.includes(sortable[2][0])
    && word.includes(sortable[3][0])
    )

  console.log(filteredWordle.filter(word => word.includes(sortable[0][0])))

  function updateRejectedList(e) {
    console.log(`FROM INPUT: ${e.target.value}`);
    let input = e.target.value;
    input = input.toUpperCase();
    console.log(`MORE: ${input}`)
    setRejected(e.target.value.toUpperCase());
    // return e.target.value;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <label>Rejected</label>
          <input 
            type="text" 
            value={rejected}
            onChange={e => updateRejectedList(e)}
          />
        </div>
        <div>
          <p>
            <label>Best Choices 1</label>
            <div>{bestList1.join(' ')}</div>
          </p>
        </div>
        <div>
          <p>
            <label>Best Choices 2</label>
            <div>{bestList2.join(' ')}</div>
          </p>
        </div>
        <div>
          <p>
            <label>Best Choices 3</label>
            <div>{bestList3.join(' ')}</div>
          </p>
        </div>
        <div>words: {filteredWordle.length}</div>
        <div>{filteredWordle.join(' ')}</div>
      </header>
    </div>
  );
}

export default Wordle;
