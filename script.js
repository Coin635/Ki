document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let dob = document.getElementById("dob").value;

    if ((username === "Abhi" && dob === "2010-03-19") || (username === "Gagu" && dob === "2010-03-13")) {
        document.querySelector(".login-form").style.display = "none";
        document.getElementById("chatContainer").style.display = "block";
    } else {
        alert("Invalid login details");
    }
});

document.getElementById("sendBtn").addEventListener("click", function() {
    let message = document.getElementById("messageInput").value;
    if (message.trim()) {
        let messageElement = document.createElement("div");
        messageElement.textContent = message;
        document.getElementById("messages").appendChild(messageElement);
        document.getElementById("messageInput").value = "";
    }
});
