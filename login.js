// Insert your code here
const backendURL = "https://weatherapp-backend-drab.vercel.app";

// Register button
document.querySelector("#register").addEventListener("click", function () {
    const user = {
        name: document.querySelector("#registerName").value,
        email: document.querySelector("#registerEmail").value,
        password: document.querySelector("#registerPassword").value,
    };

    fetch(`${backendURL}/users/signup`, {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            window.location.assign("index.html");
        }
    });
});

// Login button
document.querySelector("#connection").addEventListener("click", function () {
    const user = {
        email: document.querySelector("#connectionEmail").value,
        password: document.querySelector("#connectionPassword").value,
    };

    fetch(`${backendURL}/users/signin`, {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            window.location.assign("index.html");
        }
    });
});