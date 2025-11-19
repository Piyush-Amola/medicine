function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  saveUserData(name, email, message);

  alert("Thank you for reaching out! We will get back to you soon.");
  document.getElementById("contactForm").reset();

  return false;
}

function saveUserData(name, email, message) {
  const userData = {
    name: name,
    email: email,
    message: message,
    timestamp: new Date().toISOString(),
  };

  try {
    let allData = JSON.parse(localStorage.getItem("allUserData")) || [];

    allData.push(userData);

    localStorage.setItem("allUserData", JSON.stringify(allData));
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
    alert("There was an issue saving your data. Please try again later.");
  }
}
