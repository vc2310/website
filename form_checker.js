function validateForm() {
    // getting all the values from the form
    var name = inquiery_form.name.value;
    var email = inquiery_form.email.value;
    var contact_number = inquiery_form.contact_number.value;
    var description = inquiery_form.message.value;
    //checking if the user has entered name or not
    if (name == null || name == "") {
        alert("Please enter a name");
        return false;
    }
    //calling the email_checker function to check if email is in correct format 
    else if (email_checker(email) == false) {
        alert("Please enter a valid email address in form \"something@example.com\"");
        return false;

    }
    //calling the contact_checker function to check if contact is in correct format 
    else if (contact_checker(contact_number) == false) {
        alert("Please enter a valid phone number in one of this form\n(xxx)-xxx-xxxx\nxxx-xxx-xxxx\nxxxxxxxxx\nxxx xxx xxxx");
        return false;
    }
    //checking description
    else if (description == null || description == "" || description.length > 350) {
        alert("Please write soemthing in decription(max 350 characters)");
        return false;
    }
    alert("Thank you for submitting your query"); //notifying user if everything is correct

}

function email_checker(email) {
    var email_div = email.split("@"); //making sure "@" exists
    var email_end_div = email_div[email_div.length - 1].split("."); //making sure atleast one "." exist to check for domain
    if (email == null || email == "" || email_div.length < 2 || email_end_div.length < 2) {
        return false;
    } else {
        return true;
    }
}

function contact_checker(contact_number) {
    //Used https://www.w3resource.com/javascript/form/phone-no-validation.php to help get the regular expression correct
    const phone_number_format = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
    if (contact_number != "" || contact_number.match(phone_number_format)) {
        return true;
    } else {
        return false;
    }

}

function CharCounter(characters) {
    document.getElementById('char_count').innerHTML = characters.value.length; //updating the char count
    document.getElementById('char_count').style.color = 'black';
    if (characters.value.length > 350) {
        document.getElementById('char_count').style.color = 'red';
    }
}