// ==========================================
// JAVASCRIPT PRACTICE WORKSHEET
// TOTAL QUESTIONS: 30
// ==========================================


// ==========================================
// SECTION 1: VARIABLES
// Q1 - Q6
// ==========================================


// Q1
// Make num1 and num2 and print their sum

let num1 = 10;
let num2 = 20;

console.log("Q1:", num1 + num2);


// Q2
// Store your name and display it using alert()

let name = "Wajahat";

alert(name);


// Q3
// Store Karachi in city

let city = "Karachi";

console.log("Q3:", city);


// Q4
// Create an age variable and print it

let age = 15;

console.log("Q4:", age);


// Q5
// Create number, string and boolean variables

let myNumber = 100;
let myString = "Hello";
let myBoolean = true;

console.log("Q5 Number:", myNumber);
console.log("Q5 String:", myString);
console.log("Q5 Boolean:", myBoolean);


// Q6
// Create price variable and display using alert()

let price = 1500;

alert(price);


// ==========================================
// SECTION 2: STRING CONCATENATION
// Q7 - Q11
// ==========================================


// Q7
// Combine firstName and lastName

let firstName = "Wajahat";
let lastName = "Khan";

let fullName = firstName + " " + lastName;

console.log("Q7:", fullName);


// Q8
// What is the output of "5" + 5?

console.log("Q8:", "5" + 5);

// Output: 55


// Q9
// Concatenate two variables into a sentence

let subject = "I";
let action = "am learning JavaScript";

console.log("Q9:", subject + " " + action);


// Q10
// Concatenate age with "My age is "

let myAge = 15;

console.log("Q10:", "My age is " + myAge);


// Q11
// Concatenate three variables

let studentName = "Wajahat";
let studentCity = "Karachi";
let studentClass = "O Level";

console.log(
    "Q11:",
    "My name is " + studentName +
    ", I live in " + studentCity +
    " and I study in " + studentClass
);


// ==========================================
// SECTION 3: PRE-INCREMENT / POST-INCREMENT
// Q12 - Q17
// ==========================================


// Q12
// let a = 5
// console.log(a++)
// console.log(a)

let a = 5;

console.log("Q12 First:", a++);
console.log("Q12 Second:", a);

// Output:
// 5
// 6


// Q13
// let b = 10
// console.log(++b)
// console.log(b)

let b = 10;

console.log("Q13 First:", ++b);
console.log("Q13 Second:", b);

// Output:
// 11
// 11


// Q14
// Difference between pre-increment and post-increment

// Post-increment:
// First uses the old value, then increases it.

let post = 5;

console.log("Q14 Post:", post++);
console.log("Q14 After Post:", post);


// Pre-increment:
// First increases the value, then uses it.

let pre = 5;

console.log("Q14 Pre:", ++pre);
console.log("Q14 After Pre:", pre);


// Q15
// Start c at 0 and use c++ three times

let c = 0;

c++;
console.log("Q15:", c);

c++;
console.log("Q15:", c);

c++;
console.log("Q15:", c);

// Output:
// 1
// 2
// 3


// Q16
// let x = 15
// console.log(x--)

let x = 15;

console.log("Q16:", x);

// Post-decrement happens after the value is used
console.log("Q16:", x--);


// Q17
// let y = 20
// console.log(--y)

let y = 20;

console.log("Q17:", --y);

// Output:
// 19


// ==========================================
// SECTION 4: IF / ELSE
// Q18 - Q30
// ==========================================


// Q18
// If marks are greater than 90 -> A Grade

let marks = 95;

if (marks > 90) {
    console.log("Q18: A Grade");
} else {
    console.log("Q18: Try Again");
}


// Q19
// If age is greater than 18 -> Eligible

let age2 = 20;

if (age2 > 18) {
    console.log("Q19: Eligible");
} else {
    console.log("Q19: Not Eligible");
}


// Q20
// If number is greater than 0 -> Positive

let number = 10;

if (number > 0) {
    console.log("Q20: Positive");
} else {
    console.log("Q20: Negative");
}


// Q21
// If temperature is greater than 40 -> Hot

let temperature = 45;

if (temperature > 40) {
    console.log("Q21: Hot");
} else {
    console.log("Q21: Not Hot");
}


// Q22
// If day is 1 -> Monday

let day = 1;

if (day == 1) {
    console.log("Q22: Monday");
} else {
    console.log("Q22: Not Monday");
}


// Q23
// If score is less than 50 -> Fail

let score = 45;

if (score < 50) {
    console.log("Q23: Fail");
} else {
    console.log("Q23: Pass");
}


// Q24
// If x is equal to 100 -> Equal

let xValue = 100;

if (xValue == 100) {
    console.log("Q24: Equal");
} else {
    console.log("Q24: Not Equal");
}


// Q25
// If salary is greater than 50000 -> High

let salary = 60000;

if (salary > 50000) {
    console.log("Q25: High");
} else {
    console.log("Q25: Low");
}


// Q26
// If grade is A -> Excellent

let grade = "A";

if (grade == "A") {
    console.log("Q26: Excellent");
} else {
    console.log("Q26: Keep Trying");
}


// Q27
// If time is greater than 12 -> Afternoon

let time = 15;

if (time > 12) {
    console.log("Q27: Afternoon");
} else {
    console.log("Q27: Morning");
}


// Q28
// If count is 0 -> Empty

let count = 0;

if (count == 0) {
    console.log("Q28: Empty");
} else {
    console.log("Q28: Not Empty");
}


// Q29
// Active -> Running
// Paused -> On Hold
// Otherwise -> Stopped

let status = "paused";

if (status == "active") {

    console.log("Q29: Running");

} else if (status == "paused") {

    console.log("Q29: On Hold");

} else {

    console.log("Q29: Stopped");

}


// Q30
// Level 1 -> Beginner
// Level 2 -> Intermediate
// Otherwise -> Advanced

let level = 2;

if (level == 1) {

    console.log("Q30: Beginner");

} else if (level == 2) {

    console.log("Q30: Intermediate");

} else {

    console.log("Q30: Advanced");

}