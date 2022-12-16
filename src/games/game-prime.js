/* eslint-disable import/extensions */
import playGame from '../index.js';
import randomNumbers from '../RandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  let correctAnswer;
  const randomNumber = randomNumbers();
  let count = 0;
  if (randomNumber === 1) {
    correctAnswer = 'yes';
  }
  for (let i = 0; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      count += 1;
    }
  }
  if (count === 1) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [randomNumber, correctAnswer];
};

const InitGamePrime = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default InitGamePrime;
