import React, {useState} from 'react';
import { wordleList } from '../src/wordleDict'

function Wordle() {

  const [rejected, setRejected] = useState('');
  // const [greenArray, setGreenArray] = useState('');
  const [greenInput, setGreenInput] = useState('');

  // const green = []
  const yellow = [['N', 4]]
  const greenArray = [['E', 5]]
  let filteredWordle = wordleList;
  
  // REJECTED
  for(let x = 0; x < rejected.length; x++) {
    filteredWordle = filteredWordle.filter(word => !word.includes(rejected[x]))
  }
  let joinedList = filteredWordle.join('');

  // GREEN
  console.log(`Green array`)
  
  for (let x = 0; x < greenArray.length; x++) {
    let letter = greenArray[x][0];
    let position = greenArray[x][1] - 1;
    filteredWordle = filteredWordle.filter(word => word.includes(letter) && word[position] === letter)
  }

  // YELLOW
  for (let x = 0; x < yellow.length; x++) {
    let letter = yellow[x][0]
    let position = yellow[x][1] - 1
    filteredWordle = filteredWordle.filter(word => word.includes(letter) && word[position] !== letter)
  }
  
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

  const validateArray = (arr) => {
    console.log(`Array Length: ${arr.length} ${arr}`)
    if (arr.length < 2 || arr.length % 2 === 1) {
      return false;
    }
    for (let x = 0; x < arr.length; x++) {
      let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      // if (x % 2 === 0 && !letters.includes(arr[x])) {
      //   return false;
      // }
      // if (x % 2 === 1 && !(arr[x] >= 1 && arr[x] <= 5)) {
      //   return false;
      // }
    }
    return true;
  }

  const updateRejectedList = (e) => {
    setRejected(e.target.value.toUpperCase())
  }

  const updateGreenList = (e) => {
    console.log('---testGreen---')
    console.log(e.target.value);
    // setGreenInput(e.target.value.toUpperCase())
    console.log(`Green Input: ${e.target.value.toUpperCase()}`);
    if(validateArray(e.target.value.toUpperCase()) === true) {

      console.log('IT"S TRUE');
      // setGreenArray(e.target.value.toUpperCase())

    }

  //   let input = e.target.value.toUpperCase();
  //   let validInput = false;
  //   // for (let x = 0; x < input.length; x++) {
  //   //   if (input.length >= 2) { 
  //   //     validInput = true; 
  //   //   } 
  //     // if (x % 2 === 0 && Number.isInteger(parseInt(input[x]))) {
  //     //   console.log('LETTER')
  //     //   validInput = true
  //     // }
  //   //   if (x % 2 === 1 && !Number.isInteger(parseInt(input[x]))) {
  //   //     console.log('NUMBER')
  //   //     validInput = false;
  //   //   }
  //   // }
  //   // if(validInput === true) {
  //   //   console.log("HERE!!!!!")
  //   //   for (let x = 0; x < validInput.length; x + 2) {
  //   //     greenArray.push([input[x], input[x+1]])
  //   //   }
  //   // setGreen(e.target.value.toUpperCase())
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          
          <p>
            <label>Rejected</label>
            <input 
              type="text" 
              value={rejected}
              onChange={e => updateRejectedList(e)}
            />
          </p>
          
          <p>
            <label>Green</label>
            <input
              type="text"
              value={greenInput}
              onChange={e => updateGreenList(e)}
            />
          </p>
          
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
