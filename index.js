// Import stylesheets
import './style.css';

// here we add our function to the click event
// on our button
var mybutton = document.querySelector('.mybutton');
mybutton.addEventListener('click', sayHi);

// this our function that will
// run when we click the button
function sayHi() {
  var randomColor = getRandomColor();
  alert('Changing header to color ' + randomColor);
  
  var header = document.querySelector('.header');
  header.style.color = randomColor;
}

// this is another function we will use to
// generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
