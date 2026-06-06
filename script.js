                     // Print 1 TO 100


// for(let i=1; i< 100; i++){
//     console.log(i)
// }




// Print Even Numbers


// for(let i=2; i<100; i++){

//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }




// Sum of 1 to 100

// let sum = 0;


// for(let i=1; i < 100;i++){
//     sum += i
// }

// console.log(sum)




// Multiplication Table of 7

// let sum = 0

// for(let i =1; i<=10;i++){

//    console.log(`7 *${i} = ${7 * i}`);

// }



// Reverse Counting


// for(let i=100; i> 1;i--){
//     console.log(i);
// }




// Count Vowels
                //First Way

// let str = "shaheer";
// let count = 0


// for(let i = 0; i < str.length; i++){
//     let ch = str[i];

//     if( 
//         ch == "a" ||
//         ch == "e" ||
//         ch == "i" ||
//         ch == "o" ||
//         ch == "u"
//     ){
//     count++;
//     }
// }
// console.log(count);


            //Second way

// let str = "Zunaira"
// let count = 0


// for(let ch of str){
//     if("aeiou".includes(ch)){
//         count++;
//     }
// }
// console.log(count);










// Largest Number in Array


// let  num = [400,300,200,100,50];
// let largest = num[0];


// for(let numbers of num){

//     if(numbers > largest){
//         largest = numbers
//     }

// }
// console.log(largest);




// Smallest Number in Array

// let num = [200,50,30,20,10]

// let smallest = num[0];


// for(let numbers of num){
//     if(numbers < smallest){
//         smallest = numbers
//     }
// }

// console.log(smallest)



// Sum of Array


// let arr = [100,150,200,350];

// let sum = 0;

// for(let i=0; i < arr.length; i++){
//      sum = sum + arr[i];
// }

// console.log(sum);



// Reverse String

// let str = "Shaheer"
// let reverse = "";


// for(let i = str.length - 1; i >=0; i-- ){
//     reverse += str[i];
// }

// console.log(reverse);



// Count Positive Numbers

// let arr = [100,200,50,70,150];


// for(let i=0; i < arr.length; i++){

//     if(arr[i] > 0){

//          console.log(arr[i]);
//     }

// }



// Find Average


let num = [10,20,30,40,50];

let sum = 0;

for(let numbers of num){

    sum += numbers;
}

let avg = sum / num.length;

console.log(avg);



