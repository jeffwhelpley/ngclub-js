import './style.css';

// get a reference to different parts of the page
var mybutton = document.querySelector('.mybutton');
var questionBox = document.querySelector('.questionBox');
var answerBox = document.querySelector('.answerBox');

// assign a function handler to the click event
mybutton.addEventListener('click', findGif);

// this function will change the button color to a random color
function changeButtonColor() {
  mybutton.style.backgroundColor = getRandomColor();
}

// add two numbers together
function doMathProblem() {
  var firstNumber = askForNumber('Please enter a number:');
  var secondNumber = askForNumber('Now enter a second number:');
  var answer = firstNumber + secondNumber;
  questionBox.innerHTML = firstNumber + ' + ' + secondNumber;
  answerBox.innerHTML = answer;
  answerBox.style.display = 'block';
}

function findGif() {
  var searchTerm = prompt('Enter search term:');
  var giphyUrl = getGiphyUrl(searchTerm);

  questionBox.innerHTML = 'Search term: ' + searchTerm;
  answerBox.style.display = 'none'; 

  fetch(giphyUrl)
    .then(resp => resp.json())
    .then(handleGif);
}

function handleGif(response) {
  var gifUrl = getGifUrlFromResponse(response);
  answerBox.innerHTML = `
    <img src="${gifUrl}">
  `;
  answerBox.style.display = 'block';
}

// **************************************************
// ************* HELPER FUNCTIONS *******************
// **************************************************

// helper function to get a giphy url
function getGiphyUrl(searchTerm) {
  return 'https://api.giphy.com/v1/gifs/search?api_key=w8BRwWuLdamTXtr2kydfXsfitj2WuwCm&limit=1&offset=0&rating=G&lang=en&q=' + searchTerm;
}

function getGifUrlFromResponse(resp) {
  return resp.data[0].images.original.url;
}

// helper function to get a number
function askForNumber(message) {
  var val = prompt(message);

  try {
    return parseInt(val);
  } catch (ex) {
    alert(val + ' is not a number!');
    return getNumber(message);
  }
}

// helper function to generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
