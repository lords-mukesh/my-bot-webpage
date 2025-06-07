const Profile = {
  Username: "itspamma",
  followers: 169,
  following: 129,
  isFollow: true,
};
console.log(Profile);
console.log(typeof Profile.isFollow);

// Airthmatic Opreators//

let a = 100;
let b = 6;
console.log("A + B is", a + b);
console.log("A - B is", a - b);
console.log("A * B is", a * b);
console.log("A / B is", a / b);
console.log("A % B is", a % b);
console.log("A ^ B is", a ** b);

// Unary Operators // // Incremenet And Decrement//

console.log("A is ", a, " B is ", b);
a++;
console.log("A + 1 is", a);
console.log("A + 1 is", ++a);

//Assignment operators//

a += 4;
console.log("A is", a);

// Camparison Operator//
console.log("A Is Equal TO B ", a == b);//false
console.log("A Is notEqual TO B ", a != b);//true
console.log("A Is Greater Than B ", a > b);//true

//Logical Operator

Z = a == b;
Y = a > b;
console.log("Z && Y", Z && Y);//false
console.log("Z || Y", Z || Y);//true
console.log("Z ! NOT Y", !(Z || Y));

// IF statement

let age = 5;
if (age > 18) {
  console.log("Approved",);
}
else { console.log("Unapproved"); }

let w = "20";
if (w % 2 == 0) {
  console.log(w, "Even");
} else {
  console.log(w, "odd");
}

let mode = "igo";
let color;
if (mode == "dark") {
  console.log("Black");
}
else if (mode == "red") {
  console.log("Grey");
}
else if (mode == "igno") { console.log("Blue"); }
else { console.log("Ok"); }
Res = a > 23 ? "yes" : "no";
console.log(Res);
// example

let num = prompt("Enter a Number");
if (num % 5 === 0) { console.log(num, ",Yes Multiple of 5") }
else {
  console.log(num, ", Not Multiple of 5");
}
//example

let Score = prompt("Enter score(0-100)");
let grade;
if (Score >= 80 && Score <= 100) {
  console.log("Grade A");
} else if (Score >= 70 && Score <= 79) {
  console.log("Grade B");
}
else if (Score >= 60 && Score <= 69) {
  console.log("Grade C");
}
else {
  console.log("Fail");
}

//Next Chapter Loops

for(let Count=1; Count<=6; Count++)
{console.log("Pamma Is Bad");

}

let number=1;
//let sum;
for(let i=1 ; i<=10 ; i++){
  number=number+i;
  console.log(number);}

  let k=0;
  for(k=1;k<=100;k++){
    if(k%2!==0){
      console.log("Number is odd",k);
    }};

let comp=["Boom","Google","Microsoft","jio"];
console.log(comp);
comp.shift(0,1);
console.log("After Slice", comp);
comp.splice(1,1,"Alpha");
console.log(comp);
comp.push("Amazon");
