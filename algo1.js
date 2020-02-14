/*
We're building a ticket selling app for a cinema and we need to represent
all the seats in the main room.

In this room, the seats are organized as follows: 
    - There are 26 rows of seats. Each row is numbered from "1" to "26" 
    - Each row has 100 seats. Each seat is numbered from "1" to "100"
    

Create a function that returns an array of seats.
Each item in the array should be in the form: row-seat.

The final array should look something like this:
[
    1-1,
    1-2,
    1-3,
    .
    .
    .
    26-98,
    26-99,
    26-100
]
*/
let seatsRow = [1,2,3,4,5,6,7,8]
const row = "1";
let room = [];

let rowArray = [];

const Algo1 = () => {
  for (let i = 0; i < seatsRow.length; i++) {
    for (let j = 0; j < row.length; j++) {
      rowArray.push(seatsRow[i] + '-' + row[j])
    }
    room.push(rowArray)
  }
  return room.sort();
}


console.log(Algo1())



