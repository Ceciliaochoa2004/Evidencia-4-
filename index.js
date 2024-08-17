document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-btn");
    const signupButton = document.getElementById("signup-btn");
    const loginCard = document.getElementById("login-card");
    const signupCard = document.getElementById("signup-card");
    const authCards = document.querySelector(".auth-cards");

    loginButton.addEventListener("click", function(event) {
        event.preventDefault();
        loginCard.classList.toggle("hidden");
        signupCard.classList.add("hidden");
        authCards.classList.toggle("hidden");
    });

    signupButton.addEventListener("click", function(event) {
        event.preventDefault();
        signupCard.classList.toggle("hidden");
        loginCard.classList.add("hidden");
        authCards.classList.toggle("hidden");
    });

    document.addEventListener("click", function(event) {
        if (!loginCard.contains(event.target) && !signupCard.contains(event.target) && !event.target.matches('#login-btn') && !event.target.matches('#signup-btn')) {
            loginCard.classList.add("hidden");
            signupCard.classList.add("hidden");
            authCards.classList.add("hidden");
        }
    });
});