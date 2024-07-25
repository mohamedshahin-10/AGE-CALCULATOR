function calculateAge() {
    var dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Please enter date of birth.");
        return;
    }

    var today = new Date();
    var birthDate = new Date(dob);

    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    var resultContainer = document.getElementById('result');
    resultContainer.textContent = "Your age is: " + age;
}
