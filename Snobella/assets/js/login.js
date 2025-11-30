document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const savedUsername = localStorage.getItem("userUsername");
    const savedPassword = localStorage.getItem("userPassword");

    if (username === savedUsername && password === savedPassword) {
        localStorage.setItem("isSignedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Incorrect username or password");
    }
});
