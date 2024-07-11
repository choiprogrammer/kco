    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "josh" && password === "mojica") {
            window.location.href = "home.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    })