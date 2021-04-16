const DEFAULT_NAME = 'PETER';

// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

//Task number 1
const sayHello = name => console.log(`Hi ${name}!`);
sayHello('Alex');

//Task number 2.1
const sayHelloOne = (greeting, name) =>
  console.log(`${greeting} ${name}, How are you?`);
sayHelloOne('Hi There', 'Alex');

//Task number 2.2
const sayHelloTwo = () => console.log("Hello Alexia, How you doin'?");
sayHelloTwo();

//Task number 2.3
const sayHelloThree = name => `Hello, my dear ${name}!`;
console.log(sayHelloThree('Yvonne'));

//Task number 3.1
const sayHelloFour = (greeting, name = DEFAULT_NAME) =>
  console.log(`${greeting} ${name}, How are you?`);
sayHelloFour('Aloha', 'Sensei');

//Task number 4
const sayHelloFive = (default_var, ...unlimitedStrings) => {
  for (var stuff in unlimitedStrings) {
    console.log(`${default_var} welcomes you...${unlimitedStrings[stuff]}`);
  }
};
sayHelloFive('The Mahal', 'Kagney', 'Mercedes', 'Penny', 'Alexa', 'Sharon');
sayHelloFive(
  'The Killa',
  'Tyler',
  'Dexter',
  'Viola',
  'Pumba',
  'Timon',
  'Alexander',
  'James',
  'Kartik',
  'Aryan',
  'Brixton'
);

const checkInput = (callBackFunction, ...unlimitedStrings) => {
  let hasEmptyStrings = false;
  for (const text of unlimitedStrings) {
    if (!text) {
      hasEmptyStrings = true;
      break;
    }
  }
  if (hasEmptyStrings) {
    callBackFunction();
  }
};

checkInput (() => {
  console.log('All not empty');
},"alpha","bravo","delta","echo","foxtrot","golf");

// checkInput(
//   () => {
//     console.log('all not empty');
//   },
//   'alpha',
//   'bravo',
//   'delta',
//   'echo',
//   'foxtrot',
//   'golf'
// );
