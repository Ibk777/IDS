let threats = 0;
let traffic = 100;
let blocked = 0;

// LOGIN FUNCTION
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "admin") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Login");
    }
}

// LOGOUT
function logout() {
    window.location.href = "index.html";
}

// SIMULATE TRAFFIC + ATTACKS
function generateLogs() {
    const logs = [
        "SQL Injection Attempt Detected",
        "Brute Force Attack Detected",
        "XSS Attack Blocked",
        "Normal Traffic",
        "Suspicious IP Activity"
    ];

    let logList = document.getElementById("logList");

    if (!logList) return;

    setInterval(() => {
        let randomLog = logs[Math.floor(Math.random() * logs.length)];

        let li = document.createElement("li");
        li.textContent = randomLog;
        logList.prepend(li);

        traffic += 10;

        if(randomLog !== "Normal Traffic") {
            threats++;
            blocked++;
        }

        document.getElementById("traffic").textContent = traffic;
        document.getElementById("threats").textContent = threats;
        document.getElementById("blocked").textContent = blocked;

    }, 3000);
}

// FILE UPLOAD (SIMULATION)
function uploadLog() {
    let file = document.getElementById("fileUpload").files[0];

    if(file) {
        alert("Log Uploaded Successfully!");
    } else {
        alert("Select a file first");
    }
}

// RUN WHEN DASHBOARD LOADS
generateLogs();