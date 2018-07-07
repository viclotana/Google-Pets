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
    fetchJsonp(`http:`)

}