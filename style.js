// // // Array in javascript
// // // Homogrous in javascrytip is same datatype store ;
// // // let a=[1,2,3,4,45];
// // // let b=["jitesh","Akshansh","Nishant",'Harshit', "Abhay"];


// // // Hetrogenoiue is javascript in different datatype it mean one more the store in datattype
// // // Hetrogeinous arary:-Different datatype store in an array;
// // // let a=[1,2,3,4,5];
// // // let b=["a","b","c","d","e"];
// // // let c=[1,"a",null,undefine,[],{}];
// // // let d=[1,"nishant",false,undefine,null.[],{}];

// // // Primitive vs Non-primitive 
// // // stack and heap

// // // Shallow Copy 
// // // let arr1=[1,2,["a",'b']];
// // // // let arr2=arr1;
// // // // console.log(arr1);
// // // // console.log(arr2);

// // // // console.log(arr1===arr2);  output=true;

// // // let arr2=[];
// // // for(let i=0;i<arr1.length;i++){
// // //     arr2[i] = arr1[i];
// // // }
// // // arr2[2][1]="nishant";
// // // console.log(arr1);
// // // console.log(arr2);  // Shallow Copy




// // // Dep Copy in javascript
// // // let arr1=[1,2,["a","b"]];
// // // let result = structuredClone(arr1);
// // // for(let i=0;i<arr1.length;i++){
// // //     result=arr1;
// // // }
// // // result[2][0]="nishant";
// // // console.log(arr1);
// // // console.log(result);


// // // Using function by Deep copy
// // // function deepcopyArray(arr){
// // // let newArray=[];
// // // for(let i=0;i<newArray.length;i++){
// // //     if(Array.isArray(arr[i])){
// // //         newArray[i]=deepcopyArray(arr[i]);
// // //     }
// // //     else{
// // //         newArray[i]=arr[i];
// // //     }
// // // }
// // // return newArray;
// // // }



// // // convert karna hai nonprimitive to primitive 
// // //  let arr1=[1,2,["a","b"]];
// // // let arr2 = JSON.parse(JSON.stringify(arr1));



// // // let arr2 = JSON.parse(arr2Str);  isko hum dirctly kis likha sekt ahai upper dekta hai
// // // arr2[2][0] = "Nishant";
// // // console.log(arr1);
// // // console.log(arr2);  // Deep Copy in javascript 



// // // OBJECT in javascript
// // // let obj2={
// //     //     name:"Nishant"
// //     // }
    
// //     // console.log(obj1.name);
// //     // obj1.name="Harshit";
    
    
// // //     let obj1={
// // //         name:"Nishant",
// // //         age:23,
// // //         phone:8405919790,
// // //         isverified:true,
// // //         profession:8405919790
// // //     }
// // // for(const key in obj1){
// // //     // console.log(key);
// // //     // console.log(obj1[key]);
// // //     console.log(key + "==>" + obj1[key]);
// // // }

// // // Method2 of deepcopy in javascript;
// // // let result=structuredClone(obj1)
// // // result.name="New Name";
// // // console.log(obj1);
// // // console.log(result);


// // // Shellow Copy in javascript in object 

// // // spread operator
// // let obj1={
// //     name:"Nishant",
// //     age:23,
// //     phone:8405919790,
// //     isverified:true,
// //     professional:"Full Stack Developer",
// //     address:{
// //         city:"New Delhi",
// //         start:"New Delhi"
// //     }
// // }

// // let obj2 = {...obj1}// shellow Copy

// // // obj1.name="New Name";
// // obj1.address.city="Name City";
// // console.log(obj1);
// // console.log(obj2);


// // HOF  Highter order functilon and callback function
// let arr=[7,8,9,1,2,3,,4,5,6,12];
// arr.sort(function(a,b){
//     a=a.toString();
//     b=b.toString();
//     if(a<b){
//         return -1;
//     }
//     else if(a>b){
//         return 1;
//     }
//     else{
//         return 0;
//     }
//     // console.log(a,b);
// });
// console.log(arr);

// // String in array  ismai funtion ko hum name or call nhi kiy ahi kyoki ya wla function anoomous function hai
// let strArray=["nishant","Jitesh","Abhay","harshit","akshank","ayush","kundan"];
// strArray.sort(function(a,b){
//     a=a.toLocaleLowerCase();
//     b=b.toLocaleUpperCase();
//     if(a>b){
//         return 1;
//     }
//     else if(a<b){
//         return -1;
//     }
//     else{
//         return 0;
//     }
// });
// console.log(strArray);

// Higher Odered function
// Aise function jo apne argument me ek durde functilon ko accept karte hai ya fir apni body se ek function ko return karte hai

// is function ko hum function declation bolta hai 
// function firts(){
// // logic 
// return second;
// } 

// function second(){

// }
// firts(1,2);







// Document Object Model

// let elbyId=document.getElementById("container");
// console.log(elbyId);
// let elByclassName=document.getElementsByClassName("main-container");
// console.log(elByclassName);

// let elByTagName=document.getElementsByTagName("div ");
// console.log(elByTagName);

// let elByQs=document.querySelector(".main-container");
// console.log(elByQs);

// let allElByQs =document.querySelectorAll(".main-container");
// console.log(allElByQs);

// Traversing / navigation 
let head=document.head
console.log(head.children);  