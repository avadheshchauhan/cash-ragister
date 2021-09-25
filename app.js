const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const checkAmount = document.querySelector("#checkAmount");
const message = document.querySelector("#errorMessage");
const noOfNotes = document.querySelectorAll(".noOfNotes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkAmount.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  var cash = Number(cashGiven.value);
  var bill = Number(billAmount.value);
  if (bill > 0) {
    if (cash >= bill) {
      console.log("All good");
      const amountToBeReturned = cash - bill;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("The cash given should be greater than bill amount");
    }
  } else {
    showMessage("The bill amount should be greater than 0");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(error) {
  message.style.display = "block";
  message.innerText = error;
}
