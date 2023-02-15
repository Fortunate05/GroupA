 //set expenditure for input from HTML
const productTitleError = document.getElementById("producttitleerror");
const productTitle = document.getElementById("producttitle");
let userAmount = document.getElementById("useramount"); // input enter text HTML
const checkAmountButton = document.getElementById("checkamount"); // button for submit from HTML
const checkIncomeButton = document.getElementById("checkincome"); //income
const productCostError = document.getElementById("productcosterror"); // error

// set output from HTML
const expenditureValue = document.getElementById("expenditurevalue"); //expense
const incomeValue = document.getElementById("incomevalue"); //income
const balanceValue = document.getElementById("balanceamount"); //balance
const list = document.getElementById("listtransactions"); //list show
let tempAmount = 0;

// function set a income
checkIncomeButton.addEventListener("click",() => {
 // income
  tempAmount=checkIncomeButton.value;
  // empty
  if (tempAmount === "" || tempAmount <0){ // check  if statement true or false
    productTitleError.classList.remove("hide");
  }
  else{
    productTitleError.classList.add("hide")

    // income
    incomeValue.innerHTML = tempAmount;

    // calculate 
    balanceValue.innerHTML = tempAmount - expenditureValue; // doing calculate
    balanceValue.innerHTML = tempAmount + incomeValue // doing calculate

    // show input 
    checkIncomeButton ="";



  }
}






























// let data = []

// function expense()
// {
//     let detailData = document.getElementById("product-title").value;

//     let amountData = document.getElementById("user-amount").value;
    
//     data.push({detail: detailData, amount: amountData});

//     detailData.value = '';
//     amountData.value = '';

//     showValue()

// }

// function showValue() {

//   console.log(data[0].detail)
//   console.log(data[0].amount)
  
// }












// // function called from ID
// let tempAmount =0;
// let checkAmount=document.getElementById("check-amount");
// let checkIncome =document.getElementById("check-income");

// // const are not change for button
// const checkAmountButton=document.getElementById("check-amount");
// const checkIncomeButton=document.getElementById("check-income");

// //input text
// const productTitle=document.getElementById("product-title");
// const userAmount=document.getElementById("user-amount");

// // error value
// const productTitleError=document.getElementById("product-title-error");

// Output for expense

// const expenditureValue=document.getElementById("expenditure-value");
// const incomeValue =document.getElementById("income-value");
// const balanceAmount =document.getElementById("balance-amount");

// List display 

// const list=document.getElementById("list");

// get the ID reference from the HTML and display

// calculate function display









