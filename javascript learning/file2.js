const pi=3.14;
console.log(pi);
let first_name='   Rishikesh   ';
 console.log(first_name[0]);
 console.log(first_name.length);
 console.log(first_name[first_name.length-1]);
first_name.trim();// give new string
console.log(first_name.length);
let newfirst_name=first_name.trim();
console.log(newfirst_name);
console.log(newfirst_name.length);
 console.log(first_name.toUpperCase());
console.log(first_name.toLowerCase());
console.log(newfirst_name.slice(0,5));
console.log(newfirst_name.slice(2,5));
console.log(newfirst_name.slice());
console.log(newfirst_name.slice(2));
 let age =34;
 console.log(typeof age)
console.log(typeof first_name)
console.log( typeof(age+""))
let str=+"45";
console.log(typeof str);
let no=18;
no=String(no);
console.log(typeof no);
let no_="18";
no_=Number(no_);
console.log(typeof no_);
let string1 = '10';
let string2='23';
let fullname= +(string1+string2);
console.log(fullname);
console.log(typeof fullname)
let sum= +string1  + +string2;//imp
console.log(sum); 
//let age1=22;
// let aboutme= "my name  is " + newfirst_name + " and my age is  " + age;
//  console.log(aboutme);
//template string
let age1=22;
let name_='rishi'
 let me=`my name is ${name_} and my age is ${age1}`; 
console.log(me);
let name;
name='rishi';

console.log( typeof name,name)
let myvar=null;
console.log(typeof null)//it is bug give object
console.log(myvar)
myvar='rishi'
console.log( typeof myvar,myvar)
let mynu= BigInt(123456790023445788991345);
console.log(Number.MAX_SAFE_INTEGER);
console.log(mynu)
let myn=BigInt(23)
let myn_=24n;
console.log(myn);
console.log(myn+myn_)
let num1="7";//string
let num2=7;
console.log(num1>=num1);
//==vs===
console.log(num1==num2);
console.log(num1===num2)
//!=vs !==
console.log(num1!=num2);
console.log(num1!==num2)
//truthy and falsy value
// if else 
let age2=18;
if(age2>=18){
    console.log('user can drive motor')
}
else{
    console.log("user can not drive")
}
let num=24;
console.log(num%5)
if (num%2==0){
    console.log('number is even')
}
else{ console.log('number is odd')}
let fn='';
if(fn){//empty string is falsy value
    console.log(fn);
}
else{ 
    console.log('first name is empty'

    );
}
// falsy value
// false
// null
// ''
// undefined
// 0
// truthy value
// 'abc'
// +ve or -ve value except 0







