const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = [
  'John',
  'Marcus',
  'Andrew',
  'Brad',
  'William',
  'James',
  'Harry',
  'Ronald',
  'George',
  'Thomas',
];
const femaleNames = [
  'Christina',
  'Jane',
  'Elizabeth',
  'Margaret',
  'Harriet',
  'Susan',
  'Eleanor',
  'Rachel',
  'Helen',
  'Amelia',
];
const lastNames = [
  'Smith',
  'Croft',
  'Wright',
  'Newman',
  'Carter',
  'Hughes',
  'Jobs',
  'Davis',
  'Adams',
  'Bridges',
];

const randChoice = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

const people = [];

for (let i = 1; i <= 20; i++) {
  let gender = randChoice(genders);
  let firstName =
    gender == 'M' ? randChoice(maleNames) : randChoice(femaleNames);
  let lastName = randChoice(lastNames);
  let age = Math.floor(Math.random() * (78 - 17) + 18);

  let randomPerson = {
    gender,
    firstName,
    lastName,
    age,
  };
  people.push(randomPerson);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
