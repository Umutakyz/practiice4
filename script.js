function validateForm() {
    // Validate Country
    const country = document.forms["registrationForm"]["country"].value;
    if (country === "") {
        alert("Please select a country.");
        return false;
    }

    // Validate Hobbies
    const hobbies = document.forms["registrationForm"]["hobbies"].value.trim();
    if (hobbies === "") {
        alert("Please enter your hobbies.");
        return false;
    }

    // Validate Newsletter checkbox
    const newsletter = document.forms["registrationForm"]["newsletter"].checked;
    if (!newsletter) {
        alert("Please select if you want to receive the newsletter.");
        return false;
    }

    return true;
}
