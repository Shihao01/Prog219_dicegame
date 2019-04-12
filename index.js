/**
* Created by bcuser on 4/4/19.
*/

(function () {
  // this function is strict...
  "use strict";
}());


function buttonClicked() {
  var dice1;
  var dice2;

  dice1 = Math.ceil(Math.random()* 6);
  dice2 = Math.ceil(Math.random()* 6);

  switch (dice1){
    case 1:
    document.getElementById('image1').src='images/dice-1.jpg';
    break;

    case 2:
    document.getElementById('image1').src='images/dice-2.jpg';

    break;

    case 3:
    document.getElementById('image1').src='images/dice-3.jpg';

    break;

    case 4:
    document.getElementById('image1').src='images/dice-4.jpg';

    break;

    case 5:
    document.getElementById('image1').src='images/dice-5.jpg';

    break;

    case 6:
    document.getElementById('image1').src='images/dice-6.jpg';

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
