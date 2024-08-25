(function () {
  const FORM = document.querySelector('.form')
  const FIRST_NAME = document.getElementById("first-name");
  const LAST_NAME = document.getElementById("last-name");
  const ENQUIRY = Array.from(document.querySelectorAll(".enquiry"));
  const EMAIL = document.getElementById("email");
  const MESSAGE = document.getElementById("message");
  const CONSENT = document.getElementById("consent");
  const SUBMIT_BUTTON = document.querySelector(".submit-button");


  function errorIndicator(value) {
    value.style.border = '1px solid red';
  }

  
})();
