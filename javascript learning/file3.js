//ternary opretor
  let age=2;

//   let drink;
//   if (age>=5){
//     drink="coffee";
//   }else{
//     drink=milk;
//   }
//   console.log(drink)
let drink=age>=5 ? "coffee":"milk";
console.log(drink

);
let firstname='rishikesh';
let age1=22;
if (firstname[0]==='r'){
    console.log('your name start with r')
}
if(age1>=18){
    console.log('you can drive')
}
if(firstname[0]=='r' && age>=18){
    console.log('name start with r and age is greater or equal to 18');
}
else{
    console.log('any one condition is fail');
}
if(firstname[0]=='r' || age>=18){
    console.log('name start with r and age is greater or equal to 18');
}
else{
    console.log('any one condition is fail');
}
// nested if
let winningnumber=19;
let userguess=+prompt('guess a number');// take input a number as str
console.log( typeof userguess,userguess);

if (userguess==winningnumber){
    console.log('your guess is right');}
    else{ 
        // console.log('your guess is wrong');
        if(userguess<winningnumber){
            console.log('your guess is too low')
        }
        else{
           console.log ('your guess is too high');
        }
    }
    if (userguess==winningnumber){
        console.log('your guess is right');}
    else if(userguess<winningnumber){
        console.log('too low');
    }
    else{
        console.log('too high');
    }











