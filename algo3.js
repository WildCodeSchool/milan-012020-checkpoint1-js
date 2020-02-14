/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error.
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/

function minuteAngle(minute) {
  let number = document.getElementById("inputNumber").value;
  if (number > 60) {
    document.getElementById("message").innerHTML = "Please over 60!";
  } else {
    let angle = number * 6;
    let difference = 0;
    if (192 <= angle && angle <= 360) {
      difference = 372 - angle;
    } else if (12 <= angle && angle < 192) {
      difference = angle - 12;
    } else if (0 >= angle && angle < 12) {
      difference = 12 - angle;
    }
    console.log(angle);
    console.log(difference);
    document.getElementById("message").innerHTML = difference + "°";
  }
}
