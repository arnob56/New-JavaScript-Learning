// practice 01: Check a number divisible by 7 and not divisible by 5
let num=prompt("Enter a number:");
if (num % 7 === 0 && num % 5 !== 0) {
    console.log(`${num} is divisible by 7 and not divisible by 5.`);
} else {
    console.log(`${num} does not meet the criteria.`);
}

//practice  02: Grade Calculation based on Marks
let marks=prompt("Enter your marks (0-100):");
marks = Number(marks);
if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
}
else if (marks >= 80 && marks < 90) {
    console.log("Grade: A");
}
else if (marks >= 70 && marks < 80) {
    console.log("Grade: B+");   

}
else if (marks >= 60 && marks < 70) {
    console.log("Grade: B");
}
else if (marks >= 50 && marks < 60) {
    console.log("Grade: C+");
}
else if (marks >= 40 && marks < 50) {
    console.log("Grade: C");
}
else if (marks >= 33 && marks < 40) {
    console.log("Grade: D");
}
else if (marks >= 0 && marks < 33) {
    console.log("Grade: F");
}
else {
    console.log("Invalid marks entered.");
}



