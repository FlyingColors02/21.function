//function

/*function without parameter and no return value.*/


//defining function
function  add(){
    let numValue1=10;
    let numValue2=20;

    console.log(numValue1 + numValue2);//no return value
}

//calling function
add();


/* Function without parameter and with return value*/


//defining function
function sub(){
    let numValue1=10;
    let numValue2=5;

    return numValue1-numValue2; //with return value
}

//calling function
//let result = sub();
console.log(sub());

/*Function with parameter and without return value */


//defining function
function multi(para1,para2){
    let numValue1=para1;
    let numValue2=para2;

    console.log(numValue1 * numValue2);
}

//calling function
multi(2,3);

/*Function with parameter and return value */


//defining function
function div(para1,para2){
    let numValue1=para1;
    let numValue2=para2;

    return numValue1/numValue2;
}

//calling function
let result=div(20,2);
console.log(result);


multi(7,7);
//a function can be used multiple times......