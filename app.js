let birthDate = document.querySelector("#birth-date");
let luckyNumber = document.querySelector("#lucky-number");
let checkButton = document.querySelector("#check-button");
let message = document.querySelector("#message");

function calculateLuckyNumber() {
  if (birthDate.value == "" || luckyNumber.value == "") {
    message.innerText = "Please enter both the fields";
  } else {
    const birthDateArr = birthDate.value.split("-");

    let dateSum = 0;

    for (let i = 0; i < birthDateArr.length; i++) {
      dateSum += +birthDateArr[i];
    }
    if (dateSum % luckyNumber.value == 0) {
      message.innerText = luckyNumber.value + " " + "is lucky for you";
    } else {
      message.innerText = luckyNumber.value + " " + "is not that lucky";
    }
  }
}

checkButton.addEventListener("click", calculateLuckyNumber);
