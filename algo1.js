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




var array1 = ["1", "26"];

var array2 = ["1", "100"];

combos = []

for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {

        combos.push(array1[i] + array2[j])
    }
}