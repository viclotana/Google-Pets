// validate zipcode
export function isValidZip(zip){
    return /^\d{5}(-\d{4})?$/.test(zip)
}

// display alert msg
export function showAlert(message, className){
    // Create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert alert-${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    // since we are adding the alert between container and form 
    // lets get the 2 and insertBefore
    // get container
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#pet-form');
    // insert alert
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector('.alert').remove(),3000);
}