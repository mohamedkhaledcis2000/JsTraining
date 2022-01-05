// console.log("hello");

// //  scope 

// var x = 1 ; // global

// function changeNum(){
//      x = 2 ; //local
// }

// function changeNum2(){
//      x = 3 ; //local
// }

// console.log(x); //1

// changeNum();
// console.log(x); //1
// // after removing var i can now modify global x inside function 

// changeNum2();
// console.log(x); //1



// var x = 1 ; 
// console.log(x); //1 

// function testParent(){
//     var x = 2 ,
//     calc = x+3;
//     console.log(calc); //5


//     function testChild(){
//          x = 4 ;

//         var calc =x+1 ; 
//         console.log(calc); // 5
//     }

//     return testChild();



//     console.log(x);
// }

// console.log(x);

// testParent();
// testChild();

// var str = "Hello I Love Javascript language" ;

// console.log(str);
// console.log(typeof(str));

// console.log(str.length);

// var num = 100 ; 
// console.log(num);
// console.log(typeof(num));
// var newNum = num.toString();

// console.log(newNum);
// console.log(typeof(newNum));



// var myWord = str.indexOf("Love");
// console.log(myWord);
// console.log(str[myWord]); // i can use indexOf() as an index for printing string



// var myWord = str.lastIndexOf("Love")   // Returns 36
// console.log(myWord);
// console.log(str[myWord]); // i can use indexOf() as an index for printing string

// var str = "I Love \"Javascript\" and Php "; // regular expreassion to skip characters and interprete it as string
// console.log(str);


// var myNum = 123 ; 
// var mystr = myNum.toString();

// console.log(mystr);
// console.log(typeof(mystr));
