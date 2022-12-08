/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';
import firstGame from '../src/cli.js';

const brainEven = () => {
  firstGame();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const arrRandom = []; // Вводим массив с рандомными числами
  for (let i = 0; i < 3; i += 1) {
    arrRandom.push(Math.round(Math.random() * 100));
  }
  console.log(arrRandom); // Контроль
  let result = true;
  do {
    for (const number of arrRandom) {
      console.log('Question:', number);
      const answer = readlineSync.question('Your answer: ');
      if (number % 2 === 0 && answer === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log('Let\'s try again, Danya!');
        result = false;
      } else if (number % 2 !== 0 && answer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log('Let\'s try again, Danya!');
        result = false;
      } else {
        console.log('Correct!');
      }
    }
  } while (result === true);
};

export default brainEven;
