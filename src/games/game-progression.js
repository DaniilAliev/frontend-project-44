/* eslint-disable import/extensions */
import playGame from '../index.js';
import generateRandomNumber from '../RandomNumber.js';

const rule = 'What number is missing in the progression?';

const makeProgression = (progressionArray, randNumber, increaseNumber) => {
  progressionArray.push(randNumber);
  for (let i = 1; i < 10; i += 1) {
    const nextNumber = randNumber + increaseNumber;
    randNumber = nextNumber;
    progressionArray.push(nextNumber);
  }
  return progressionArray;
};

const getQuestionAndAnswer = () => {
  const progressionArray = [];
  const randNumber = generateRandomNumber();
  const increaseNumber = generateRandomNumber();
  makeProgression(progressionArray, randNumber, increaseNumber);
  const a = Math.floor(Math.random() * progressionArray.length);
  const correctAnswer = progressionArray[a];
  progressionArray[a] = '..';
  const question = progressionArray.join(' ');
  return [question, String(correctAnswer)];
};

const initGameProgression = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameProgression;
