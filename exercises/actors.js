let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];



// Who is the Academy Member whose ID is 187?
for (const member of academyMembers) {
    if (member.memID === 187) {
        console.log(`Academy Member is ${member.name}`)
    }
}
// Who has have been in at least 3 films?
let experiencedMembers = [];

for (const memebr of academyMembers) {
    if (memebr.films.length >=3) {
        experiencedMembers.push(member);
    }
}

console.log("The experienced academy members are," experiencedMembers)
// Who has a name that starts with "Bob"?

// HARDER: Which Academy Members have been in a film
// that starts with "A"