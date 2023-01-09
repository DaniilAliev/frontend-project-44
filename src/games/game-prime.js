/* eslint-disable import/extensions */
import playGame from '../index.js';
import generateRandomNumber from '../RandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber, i) => {
  if (randomNumber % i === 0) {
    return true;
  }
  return false;
};

const getQuestionAndAnswer = () => {
  let correctAnswer;
  const randomNumber = generateRandomNumber(1, 100);
  let count = 0;
  if (randomNumber === 1) {
    correctAnswer = 'yes';
  }
  for (let i = 0; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      isPrime(randomNumber, i);
      if (isPrime(randomNumber, i)) {
        correctAnswer = 'yes';
      }
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

const initGamePrime = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGamePrime;
