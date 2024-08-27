// FORM VALIDATION IIFE
(function () {
  const FORM = document.querySelector(".form");
  const FIRST_NAME = document.getElementById("first-name");
  const LAST_NAME = document.getElementById("last-name");
  const ENQUIRY = Array.from(document.querySelectorAll(".enquiry"));
  const EMAIL = document.getElementById("email");
  const MESSAGE = document.getElementById("message");
  const CONSENT = document.getElementById("consent");
  const enquiry_errorText = document.querySelector("span.enquiry");
  const consent_errorText = document.querySelector("span.consent");

  const texInputs = [FIRST_NAME, LAST_NAME, EMAIL, MESSAGE];

  /*********************** removes errors if valid *********************/  
  texInputs.forEach((element) => {
    element.addEventListener("input", () => {
      if (element.validity.valid) {
        resetError();
      }
    });
  });

  CONSENT.addEventListener("input", () => {
    if (CONSENT.validity.valid) {
      consent_errorText.classList.add("hide");
    }
  });

  ENQUIRY[0].addEventListener("input", () => {
    if (ENQUIRY[0].validity.valid) {
      enquiry_errorText.textContent = "";
    }
  });

  /**************** removes default messages ***********************/ 
  document.addEventListener(
    "invalid",
    (function () {
      return function (e) {
        //prevent the browser from showing default error bubble / hint
        e.preventDefault();
        // optionally fire off some custom validation handler
        showError();
      };
    })(),
    true
  );

  /******************** form validation ***********************/ 
  FORM.addEventListener("submit", (e) => {
    if (!FORM.reportValidity()) {
      e.preventDefault();
    } else {
      e.preventDefault();
      start();
    }
  });

  /***************** error ⚠️ functions ****************/
  function errorIndicator(value) {
    value.style.border = "1px solid hsl(0, 66%, 54%)";
  }

  function showError() {
    texInputs.forEach((element) => {
      error(element);
    });

    // other validations
    checkValidEmail();
    checkConsent();
    checkEnquiry();
  }

  function error(element) {
    const errorText = document.querySelector(
      `#${element.id} + span.${element.id}`
    );

    // check if field is empty
    if (element.validity.valueMissing) {
      errorIndicator(element);
      errorText.textContent = "This field is required";
    }
  }

  function checkValidEmail() {
    if (EMAIL.validity.typeMismatch) {
      document.querySelector(`#${EMAIL.id} + span`).textContent =
        "Please enter a valid email address";
      errorIndicator(EMAIL);
    }
  }

  function checkEnquiry() {
    if (ENQUIRY[0].validity.valueMissing) {
      enquiry_errorText.textContent = "Please select a query";
      console.log("valueMissing");
    }
  }

  function checkConsent() {
    if (CONSENT.validity.valueMissing) {
      consent_errorText.classList.remove("hide");
      consent_errorText.textContent =
        "To submit this form, please consent to being contacted";
    }
  }

  /*******************  reset error ***********************/
  function resetError() {
    texInputs.forEach((element) => {
      const errorText = document.querySelector(
        `#${element.id} + span.${element.id}`
      );
      errorText.textContent = "";
      element.style.border = "";
    });
  }

  
})();

var success = {
  animation: function() {
    const successCard = document.querySelector('.success');

    return {
      endAnimation: function() {
        successCard.classList.remove('success')
        successCard.classList.add('hide')
      },

      startAnimation: function() {
        successCard.classList.add('success')
        successCard.classList.remove('hide')
      }
    }
  }
}

var end = success.animation().endAnimation;
var start = success.animation().startAnimation

end();
// start();

// end();
// start()