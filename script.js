const checkPassword = () => {
    const warningElement = document.querySelector(".warning");
    if (passwordElement.value !== confirmPasswordElement.value) {
        warningElement.classList.add("warning--show");
        passwordElement.classList.add("invalid");
        confirmPasswordElement.classList.add("invalid");
    }
    else {
        passwordElement.classList.remove("invalid");
        confirmPasswordElement.classList.remove("invalid");
        warningElement.classList.remove("warning--show");
    }
}

const passwordElement = document.querySelector("#password");
const confirmPasswordElement = document.querySelector("#confirm-password");
confirmPasswordElement.addEventListener("blur", checkPassword);