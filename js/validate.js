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
}