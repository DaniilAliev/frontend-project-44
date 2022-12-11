/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const arrRandom = []; // Вводим массив с рандомными числами
  for (let i = 0; i < 3; i += 1) {
    arrRandom.push(Math.round(Math.random() * 100));
  }
  let i = 0;
  for (const number of arrRandom) {
    console.log('Question:', number);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && answer !== 'yes') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (number % 2 !== 0 && answer !== 'no') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      i += 1;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainEven;

// brainEven();
