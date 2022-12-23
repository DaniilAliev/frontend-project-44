/* eslint-disable import/extensions */
import playGame from '../index.js';
import generateRandomNumber from '../RandomNumber.js';

const rule = 'What number is missing in the progression?';

const makeProgression = (randomNumber, increaseNumber) => {
  const progression = [];
  progression.push(randomNumber);
  for (let i = 1; i < 10; i += 1) {
    const nextNumber = randomNumber + (increaseNumber * i);
    progression.push(nextNumber);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const increaseNumber = generateRandomNumber(1, 100);
  makeProgression(randomNumber, increaseNumber);
  const randomSymbol = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[randomSymbol];
  progression[randomSymbol] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const initGameProgression = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameProgression;
