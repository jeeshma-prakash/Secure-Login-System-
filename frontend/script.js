document.addEventListener("DOMContentLoaded", function () {
    // Registration Form Validation
    document.getElementById("register-form")?.addEventListener("submit", function (e) {
        e.preventDefault();

        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;
        let email = document.getElementById("email").value;

        if (!validateEmail(email)) {
            alert("Invalid email format");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        alert("Registration successful!");
    });

    // Login Form Validation
    document.getElementById("login-form")?.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;

        if (!validateEmail(email)) {
            alert("Invalid email format");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        alert("Login successful!");
    });

    // Email validation function
    function validateEmail(email) {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
