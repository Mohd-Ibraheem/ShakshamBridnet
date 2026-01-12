var fnameError = document.getElementById('name-error');
var lnameError = document.getElementById('lname-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var areaError = document.getElementById('area-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value.trim();

    if (name === '') {
        fnameError.innerHTML = 'First name is required';
        fnameError.style.color = "red";
        return false;
    }

    if (!/^[A-Za-z]+$/.test(name)) {
        fnameError.innerHTML = 'Only alphabets allowed';
        fnameError.style.color = "red";
        return false;
    }

    fnameError.innerHTML = '';
    return true;

}

function validateLName() {
    var lname = document.getElementById('lname').value.trim();

    if (lname === '') {
        lnameError.innerHTML = 'Last name is required';
        lnameError.style.color = "red";
        return false;
    }

    if (!/^[A-Za-z]+$/.test(lname)) {
        lnameError.innerHTML = 'Only alphabets allowed';
        lnameError.style.color = "red";
        return false;
    }

    lnameError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value.trim();

    if (email === '') {
        emailError.innerHTML = 'Email is required';
        emailError.style.color = "red";
        return false;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        emailError.innerHTML = 'Invalid email format';
        emailError.style.color = "red";
        return false;
    }

    emailError.innerHTML = '';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value.trim();

    if (phone === '') {
        phoneError.innerHTML = 'Phone number is required';
        phoneError.style.color = "red";
        return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        phoneError.innerHTML = 'Phone number must be 10 digits';
        phoneError.style.color = "red";
        return false;
    }

    phoneError.innerHTML = '';
    return true;
}

function validateArea() {
    var area = document.getElementById('area').value.trim();

    if (area === '') {
        areaError.innerHTML = 'Message is required';
        areaError.style.color = "red";
        return false;
    }

    areaError.innerHTML = '';
    return true;
}

function validateForm() {
    if (!validateName() || !validateLName() || !validateEmail() || !validatePhone() || !validateArea()) {
        submitError.innerHTML = 'Please fix errors before submitting';
        submitError.style.color = 'orange';
        return false;

    }

    submitError.innerHTML = 'Your form has been submitted successfully';
    submitError.style.color = 'green';

    // // ---- MAILTO START ----
    // var name = document.getElementById('contact-name').value;
    // var lname = document.getElementById('lname').value;
    // var email = document.getElementById('contact-email').value;
    // var phone = document.getElementById('contact-phone').value;
    // var message = document.getElementById('area').value;

    // var mailtoLink = `mailto:shakshambirdnetservice@gmail.com
    //     ?subject=New Contact Form Enquiry
    //     &body=Name: ${name} ${lname}%0A
    //     Email: ${email}%0A
    //     Phone: ${phone}%0A
    //     Message: ${message}`;

    // window.location.href = mailtoLink;
    // console.log(window);
    // // ---- MAILTO END ----

    document.querySelector('.contact-form-inner').reset();
    return false;
}

