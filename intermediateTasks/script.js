function validateAndSubmitForm() {
    if (!validateForm()) {
        return false; // If validation fails, prevent form submission
    }

    // If validation succeeds, replace the form with a thank-you message
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = `
        <div class="thank-you-message">
            <h1>Thank You!</h1>
            <p>Your registration is complete. We appreciate your time and effort in filling out the form.</p>
        </div>
    `;
    return false; // Prevent default form submission (since we're showing a message)
}

function validateForm() {
    let isValid = true;

    // Full Name Validation
    const naMe = document.getElementById('fname').value;
    const nameErr = document.getElementById('nameErr');
    nameErr.innerHTML = '';

    if (naMe === '') {
        nameErr.innerHTML = '*Full Name is required.';
        isValid = false;
    }

    // Phone Number Validation
    const phone = document.getElementById('fphone').value;
    const phoneErr = document.getElementById('phoneErr');
    const phoneRegex = /^[0-9]{10}$/; // Only allows 10 digits
    phoneErr.innerHTML = '';

    if (phone === '') {
        phoneErr.innerHTML = '*Phone number is required.';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        phoneErr.innerHTML = '*Phone number must be exactly 10 digits.';
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById('femail').value;
    const emailErr = document.getElementById('emailErr');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    emailErr.innerHTML = '';

    if (email === '') {
        emailErr.innerHTML = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailErr.innerHTML = '*Please enter a valid email address.';
        isValid = false;
    }

    // Password Validation
    const password = document.getElementById('fpass').value;
    const passErr = document.getElementById('passErr');
    passErr.innerHTML = '';

    if (password === '') {
        passErr.innerHTML = '*Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        passErr.innerHTML = '*Password must be at least 6 characters long.';
        isValid = false;
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('fcpass').value;
    const cPassErr = document.getElementById('cPassErr');
    cPassErr.innerHTML = '';

    if (confirmPassword === '') {
        cPassErr.innerHTML = '*Please confirm your password.';
        isValid = false;
    } else if (password !== confirmPassword) {
        cPassErr.innerHTML = '*Passwords do not match.';
        isValid = false;
    }

    // Date of Birth Validation
    const dob = document.getElementById('fdate').value;
    const dateErr = document.getElementById('dateErr');
    dateErr.innerHTML = '';

    if (dob === '') {
        dateErr.innerHTML = '*Date of birth is required.';
        isValid = false;
    }

    // Gender Validation
    const gender = document.getElementById('gender').value;
    const genderErr = document.getElementById('genderErr');
    genderErr.innerHTML = '';

    if (gender === '') {
        genderErr.innerHTML = '*Gender is required.';
        isValid = false;
    }

    return isValid;
}

// Toggle Password Visibility
function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    }
}
