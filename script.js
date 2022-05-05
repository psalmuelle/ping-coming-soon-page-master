"strict mode";

const emailInput = document.querySelector(".email-input");
const submitBtn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".error-msg");
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!re.test(emailInput.value)) {
    errorMsg.style.display = "block";
    emailInput.style.border = "1.3px solid hsl(354, 100%, 66%)";
  } else {
    errorMsg.style.display = "none";
    emailInput.style.border = "1.3px solid hsl(223, 100%, 88%)";
    alert("Thanks! We will get back to you.");
    return;
  }
});
