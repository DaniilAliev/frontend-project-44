/* eslint-disable no-unreachable-loop */
/* eslint-disable import/extensions */

import playGame from '../index.js';
import generateRandomNumber from '../RandomNumber.js';

const rule = 'What is the result of the expression?';
let correctAnswer;

const calculation = (firstrandomNumber, operation, secondrandomNumber) => {
  switch (operation) {
    case ('+'):
      correctAnswer = firstrandomNumber + secondrandomNumber;
      return correctAnswer;
    case ('-'):
      correctAnswer = firstrandomNumber - secondrandomNumber;
      return correctAnswer;
    case ('*'):
      correctAnswer = firstrandomNumber * secondrandomNumber;
      return correctAnswer;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const firstrandomNumber = generateRandomNumber();
  const secondrandomNumber = generateRandomNumber();
  calculation(firstrandomNumber, operation, secondrandomNumber);
  const question = [firstrandomNumber, operation, secondrandomNumber].join(' ');
  return [question, String(correctAnswer)];
};

const initGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameCalc;
