
function validateForm() {
const fname = document.getElementById("fname").value;
const lname = document.getElementById("lname").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;

const namePattern = /^[A-Za-z\s]{3,}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

if (!namePattern.test(fname)) {
    alert("First Name must be at least 3 characters long and contain only letters and spaces.");
    return false;
}

if (!namePattern.test(lname)) {
    alert("Last Name must be at least 3 characters long and contain only letters and spaces.");
    return false;
}

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
}

if (subject.trim() === "") {
    alert("Subject cannot be empty.");
    return false;
}

if (message.trim() === "") {
    alert("Message cannot be empty.");
    return false;
}

 
alert("Form submitted successfully!");
return true;
}

