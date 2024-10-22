let person = {
  first: "Shawn",
  middle: "Corey",
  last: "Carter",
  age: 54,
  stageName: "Jay-Z",
  netWorthInBillions: 2.5,
};

function printPerson(person) {
  console.log(person);
}
printPerson(person);

function createPerson() {
  let person = {};
  person.first = "Beyonce";
  person.last = "Knowles";

  return person;
}

let spouse = createPerson();
console.log(spouse);
