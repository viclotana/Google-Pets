import fetchJsonp from 'fetch-jsonp'

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

//fetch animals from api
function fetchAnimals(e){
    e.preventDefault();
    
    //get user input
    const animal = document.querySelector('#animal').value;
    const zip = document.querySelector('#zip').value;

    //fetch pets
    fetchJsonp(`http:api.petfinder.com/pet.find?format=json&
    key=c8385efd2750152ae8f7cc9bca83a805&animal=${animal}&location=${zip}&
    callback=callback`, {
        jsonpCallbackFunction: 'callback'
    })

}