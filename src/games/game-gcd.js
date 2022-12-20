/* eslint-disable no-unreachable-loop */
/* eslint-disable import/extensions */
import playGame from '../index.js';
import generateRandomNumber from '../RandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';
let correctAnswer;

const countGsd = (firstrandomNumber, secondrandomNumber) => {
  let smallestNumber;
  if (firstrandomNumber < secondrandomNumber) {
    smallestNumber = firstrandomNumber;
  } else if (secondrandomNumber < firstrandomNumber) {
    smallestNumber = secondrandomNumber;
  }
  for (let i = smallestNumber; i > 0; i -= 1) {
    if (firstrandomNumber % i === 0 && secondrandomNumber % i === 0) {
      correctAnswer = i;
      break;
    }
  }
  if (firstrandomNumber === secondrandomNumber) {
    correctAnswer = firstrandomNumber;
  }
};

const getQuestionAndAnswer = () => {
  const firstrandomNumber = generateRandomNumber(1, 100);
  const secondrandomNumber = generateRandomNumber(1, 100);
  const question = [`${firstrandomNumber} ${secondrandomNumber}`].join(' ');
  countGsd(firstrandomNumber, secondrandomNumber);
  return [question, String(correctAnswer)];
};

const initGameGcd = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameGcd;
