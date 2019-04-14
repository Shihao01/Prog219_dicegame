/**
 * Created by bcuser on 4/4/19.
 angelina wainhouse
 PROG219 HW 2
 */


 (function () {
   // this function is strict...
   "use strict";
 }());
 console.log("index.js");

 function buttonClicked() {
   console.log("buttonClicked");
   var dice1;
   var dice2;
   var balance = 5;
   var turnCount = 0;
   turnCount = turnCount +1;

   dice1 = Math.ceil(Math.random()* 6);
   dice2 = Math.ceil(Math.random()* 6);

   switch (dice1){
     case 1:
     document.getElementById('image1').src='images/dice-1.jpg';
     if (dice1 == dice2 || dice1 + dice2 == 11 || dice1 + dice2 == 7) {
       balance = balance + 1;
     }

     else balance = balance - 1;
     document.getElementById('balance').innerHTML = balance;
     document.getElementById('turnCount').innerHTML = turnCount;
     break;

     case 2:
     document.getElementById('image1').src='images/dice-2.jpg';
     if (dice1 == dice2 || dice1 + dice2 == 11 || dice1 + dice2 == 7) {
       balance = balance + 1;
     }
     else balance = balance - 1;
     document.getElementById('balance').innerHTML = balance;
     document.getElementById('turnCount').innerHTML = turnCount;
     break;

     case 3:
     document.getElementById('image1').src='images/dice-3.jpg';
     if (dice1 == dice2 || dice1 + dice2 == 11 || dice1 + dice2 == 7) {
       balance = balance + 1;
     }
     else balance = balance - 1;
     document.getElementById('balance').innerHTML = balance;
     document.getElementById('turnCount').innerHTML = turnCount;
     break;

     case 4:
     document.getElementById('image1').src='images/dice-4.jpg';
     if (dice1 == dice2 || dice1 + dice2 == 11 || dice1 + dice2 == 7) {
       balance = balance + 1;
     }
     else balance = balance - 1;
     document.getElementById('balance').innerHTML = balance;
     document.getElementById('turnCount').innerHTML = turnCount;
     break;

     case 5:
     document.getElementById('image1').src='images/dice-5.jpg';
     if (dice1 == dice2 || dice1 + dice2 == 11 || dice1 + dice2 == 7) {
       balance = balance + 1;
     }
     else balance = balance - 1;
     document.getElementById('balance').innerHTML = balance;
     document.getElementById('turnCount').innerHTML = turnCount;
     break;

     case 6:
     document.getElementById('image1').src='images/dice-6.jpg';
     if (dice1 == dice2 || dice1 + dice2 == 11 || dice1 + dice2 == 7) {
       balance = balance + 1;
     }
     else balance = balance - 1;
     document.getElementById('balance').innerHTML = balance;
     document.getElementById('turnCount').innerHTML = turnCount;
     break;

   }

   switch (dice2){
     case 1:
     document.getElementById('image2').src='images/dice-1.jpg';
     break;

     case 2:
     document.getElementById('image2').src='images/dice-2.jpg';

     break;

     case 3:
     document.getElementById('image2').src='images/dice-3.jpg';

     break;

     case 4:
     document.getElementById('image2').src='images/dice-4.jpg';

     break;

     case 5:
     document.getElementById('image2').src='images/dice-5.jpg';

     break;

     case 6:
     document.getElementById('image2').src='images/dice-6.jpg';

     break;

   }


 }
