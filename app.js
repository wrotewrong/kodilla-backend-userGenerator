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
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

const people = [];
const MAX_AGE = 78;
const MIN_AGE = 18;

for (let i = 1; i <= 20; i++) {
  const gender = randChoice(genders);
  const firstName = randChoice(gender == 'M' ? maleNames : femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * (MAX_AGE - MIN_AGE - 1) + MIN_AGE);

  const randomPerson = {
    gender,
    firstName,
    lastName,
    age,
  };
  people.push(randomPerson);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw new Error('not working');
  console.log('The file has been saved!');
});
