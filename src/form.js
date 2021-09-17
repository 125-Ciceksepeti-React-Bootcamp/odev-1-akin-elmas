const wrapper = document.querySelector(".wrapper"),
  form = document.querySelectorAll(".form"),
  submitInput = form[0].querySelector('input[type="submit"]');

function getDataFrom(e) {
  e.preventDefault();

  let formData = new FormData(form[0]);

  alert(
    formData.get("company") +
      " - " +
      formData.get("firstname") +
      " - " +
      formData.get("lastname") +
      " - " +
      formData.get("email") +
      " - " +
      formData.get("title") +
      " - " +
      formData.get("phone") +
      " - " +
      formData.get("training") +
      " - " +
      formData.get("campaignfield") +
      " - " +
      formData.get("crmfield") +
      " - " +
      formData.get("emailfield") +
      " - " +
      formData.get("partnerfield") +
      " - " +
      formData.get("employeefield") +
      " - " +
      formData.get("ditaryfield") +
      " - " +
      formData.get("Exceptions")
  );
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    submitInput.addEventListener("click", getDataFrom, false);
  },
  false
);
