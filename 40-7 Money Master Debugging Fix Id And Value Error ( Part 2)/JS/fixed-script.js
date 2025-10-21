/*                      40-7 Money Master debugging fix id and value error ( part 2) */

const calculateExpense = () => {
  // const income = document.querySelector("income").value;
  const income = document.querySelector("#income").value;
  // const food = document.querySelector("food").value;
  const food = document.querySelector("#food").value;
  // const rent = document.querySelector("rent").value;
  const rent = document.querySelector("#rent").value;
  // const clothes = document.querySelectorAll("#clothes").value;
  const clothes = document.querySelectorAll("#clothes")[0].value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    parseInt(food) + parseInt(rent) + parseInt(clothes);

  // calculate balance
  // const balance = parseInt(income.value) - expense;
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > income.value) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
  const savingAmount = (savePercentage / 100) + income;

  // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};

//=========================================================================================//


/* 
                These are the errors we found in this file (see below)
                =============================================================


Uncaught ReferenceError: calculateexpense is not defined                  fixed-index.html:51
    at HTMLButtonElement.onclick (fixed-index.html:51:116) 

_____________________________________________________________________________________________

Uncaught TypeError: Cannot read properties of null (reading 'value')                                                                  fixed-script.js:4 
    at calculateExpense (fixed-script.js:4:50)
    at HTMLButtonElement.onclick (fixed-index.html:52:116)

_____________________________________________________________________________________________


Uncaught TypeError: Cannot read properties of null (reading 'value')                                                                  fixed-script.js:6 
    at calculateExpense (fixed-script.js:6:46)
    at HTMLButtonElement.onclick (fixed-index.html:52:116)

_____________________________________________________________________________________________


Uncaught TypeError: Cannot read properties of null (reading 'value')                                                                 fixed-script.js:8 
    at calculateExpense (fixed-script.js:8:46)
    at HTMLButtonElement.onclick (fixed-index.html:52:116)


_____________________________________________________________________________________________


Uncaught TypeError: Cannot set properties of null (setting 'innerText')                                                            fixed-script.js:62 
    at calculateSavings (fixed-script.js:62:60)
    at HTMLButtonElement.onclick (fixed-index.html:66:101)


=============================================================================================

                            Debug Console Output
                            ====================

> document.querySelectorAll("#clothes")
< NodeList [input#clothes.form-control]
> document.querySelectorAll("#clothes")[0]
< <input type="text" class="form-control" id="clothes">
> document.querySelectorAll("#clothes")[0].value
< '1'
*/
