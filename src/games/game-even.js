/* eslint-disable no-unreachable-loop */
/* eslint-disable import/extensions */
import playGame from '../index.js';
import generateRandomNumber from '../RandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
let result;

const isEven = (number) => {
  if (number % 2 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  let answer;
  const number = generateRandomNumber();
  isEven(number);
  if (result === true) {
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
