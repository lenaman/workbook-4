let person = {
  name: "Lena",
  address: "309 Gold Street",
  city: "Brooklyn",
  state: "NY",
  zip: "11201",
};

// function printContact (person){
//     console.log (person)
//     console.log (person.name)
//     console.log (person. address)
//     console.log (person.city + ", " + person.state + " " + person.zip)
// }

function printContact() {
  let mailingLabel = `
    ${person.name}
    ${person.address}
    ${person.city}, ${person.state} ${person.zip}
    `;
  console.log(mailingLabel);
}
printContact(person);
