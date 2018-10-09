/*
Test your self
- Ask 5 questions
- Keep track of the number of qustions the user answered correctly
- Provide a final message after the quiz letting the user know the number of questions he or she got right
- Rank the player;
  if the player answered all five correcly give the player the golden star,
  3-4 correct answers is a silver star,
  1-2 correct answers is a broze star and
  0 correct is no star at all.
*/

// no questions answered yet so correctAnswers is indeed 0
var correctAnswers = 0;

// ask the questions and provide the answer count update
var planet = prompt('How many continents are there on our blue planet?');
if (planet.toUpperCase() === 'SEVEN' || planet === 7) {
  correctAnswers += 1;
}

var country = prompt('Where is Mount Everest, what continent is it in?');
if (country.toUpperCase() === 'ASIA') {
  correctAnswers += 1;
}

var continent = prompt('Is Europe a country or a continent?');
if (continent.toUpperCase() === 'CONTINENT') {
  correctAnswers += 1;
}

var city = prompt('What is the capital city of the state of Georgia?');
if (city.toUpperCase() === 'ATLANTA') {
  correctAnswers += 1;
}

var mountain = prompt('What is the highest mountain in the world?');
if (mountain.toUpperCase() === 'MOUNT EVEREST' || mountain.toUpperCase() === 'EVEREST') {
  correctAnswers += 1;
}

// show the user the results
document.write('<h1>You answered ' + correctAnswers + ' out of 5 correctly.</h1>');

// gold, silver, bronze or none star
if (correctAnswers === 5) {
  document.write('<h2>Bravo!!! All 5 answeres were correct so you get a golden star!</h2>');
} else if (correctAnswers === 3 || correctAnswers === 4) {
  document.write('<h2>Nice one! You answered ' + correctAnswers + ' questions correctly so you get a silver star.</h2>');
} else if (correctAnswers >= 2) {
  document.write('<h2>We know that you can do better but just for the effort and showing up you get a bronze star.</h2>')
} else {
  document.write('<h2>Keep on learning so you can reach the stars.</h2>');
}
