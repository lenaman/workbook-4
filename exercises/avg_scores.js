let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100];

function getAverage(scores) {
    let total = 0; //initialize total to be 0 inside the function

    //for a loop and starts at 0, and runs as long as i is less than the length of the array
    for (let index = 0; index < scores.length; index++) { 
        total += scores[index];
    }
    let average = total / scores.length;
    return average;
}
let myAverage = getAverage(myScores);
console.log("My average score is: " + myAverage);

let yourAverage = getAverage(yourScores);
console.log("Your average score is: " + yourAverage);













// let myScores = [92, 98, 84, 76, 89, 99, 100];
// function getAverage(scores) {
//     let total = 0;
//     for (const score of myScores) {
//         sumOfAllScores = sumOfAllScores + score;
//     }

//     let avergaeScore = sumOfAllScores / myScores.length;
//     console.log(averageScore);
//     return averageScore;
// }

// getAverage(myScores)