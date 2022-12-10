import readlineSync from 'readline-sync';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  console.log('What is the result of the expression?');

  const arrRandom = []; // Вводим массив с рандомными числами
  for (let i = 0; i < 6; i += 1) {
    arrRandom.push(Math.round(Math.random() * 100));
  }
  console.log(arrRandom);

  let i = 0;
  const operations = ['+', '-', '*'];
  for (let index = 0; index < 6; index += 2) {
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const resultArray = [arrRandom[index], operation, arrRandom[index + 1]];
    console.log(resultArray);
    const resultString = resultArray.join(' ');
    console.log(`Question: ${resultString}`);
    const answer = readlineSync.question('Your answer: ');
    let result;

    const calculation = (operation) => {
      switch (operation) {
        case ('+'):
          result = arrRandom[index] + arrRandom[index + 1];
          return result;
        case ('-'):
          result = arrRandom[index] - arrRandom[index + 1];
          return result;
        case ('*'):
          result = arrRandom[index] * arrRandom[index + 1];
        default:
          return null;
      }
    };

    calculation(operation);
    if (result === Number(answer)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

brainCalc();
