const checkPassword = () => {
    const passwordElement = document.querySelector("#password");
    const warningElement = document.querySelector(".warning");
    if (passwordElement.value !== confirmPasswordElement.value) {
        warningElement.classList.add("warning--show");
    }
    else {
        if (warningElement.classList.contains("warning--show")) {
            warningElement.classList.remove("warning--show");
        }
    }
}

const confirmPasswordElement = document.querySelector("#confirm-password");
confirmPasswordElement.addEventListener("blur", checkPassword);