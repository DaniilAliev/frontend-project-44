/* eslint-disable import/extensions */
import playGame from '../index.js';
import generateRandomNumber from '../RandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const countGsd = (firstNumber, secondNumber) => {
  let smallestNumber;
  if (firstNumber < secondNumber) {
    smallestNumber = firstNumber;
  } else if (secondNumber < firstNumber) {
    smallestNumber = secondNumber;
  }
  for (let i = smallestNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  return '';
};

const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const question = [`${firstNumber} ${secondNumber}`].join(' ');
  const correctAnswer = countGsd(firstNumber, secondNumber);
  return [question, String(correctAnswer)];
};

const initGameGcd = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameGcd;
