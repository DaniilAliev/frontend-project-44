/* eslint-disable import/extensions */
import playGame from '../index.js';
import generateRandomNumber from '../RandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getQuestionAndAnswer = () => {
  let answer;
  const number = generateRandomNumber(1, 100);
  if (isEven(number)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [number, answer];
};

const initGameEven = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameEven;
