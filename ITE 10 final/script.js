const VALID_USERNAME = "Arban Dave";
const VALID_PASSWORD = "Franz_18@";
const LOGIN_STATUS_KEY = "isLoggedIn";
const LOGIN_PAGE_URL = "index.html";
const HOME_PAGE_URL = "web.html";

const loginForm = document.getElementById("loginPage");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const usernameError = document.getElementById("usernameError");
        const passwordError = document.getElementById("passwordError");

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        usernameError.textContent = "";
        passwordError.textContent = "";
        usernameError.style.display = "none";
        passwordError.style.display = "none";

        let passwordFailed = false;

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            localStorage.setItem(LOGIN_STATUS_KEY, "true");
            window.location.href = HOME_PAGE_URL;
        } else {
            if (username !== VALID_USERNAME) {
                usernameError.textContent = "Invalid username.";
                usernameError.style.display = "block";
            }

            if (password !== VALID_PASSWORD) {
                passwordFailed = true;
                passwordError.textContent = "Invalid password.";
                passwordError.style.display = "block";
            }

            if (passwordFailed) {
                passwordInput.value = "";
            }
        }
    });
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    const isLoggedIn = localStorage.getItem(LOGIN_STATUS_KEY);

    if (isLoggedIn !== "true") {
        window.location.href = LOGIN_PAGE_URL;
    } else {
        logoutBtn.style.display = "block";
    }

    logoutBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (confirm("Are you sure you want to log out?")) {
            localStorage.removeItem(LOGIN_STATUS_KEY);
            alert("You have been successfully logged out.");
            window.location.href = LOGIN_PAGE_URL;
        }
    });
}
