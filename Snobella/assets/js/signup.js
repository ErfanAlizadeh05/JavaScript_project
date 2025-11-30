document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    localStorage.setItem("userUsername", username);
    localStorage.setItem("userPassword", password);

    alert("Signup successful!");
    window.location.href = "login.html";
});
