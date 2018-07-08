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
    fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=c8385efd2750152ae8f7cc9bca83a805&animal=${animal}&location=${zip}&callback=callback`, {
        jsonpCallbackFunction: 'callback'
    }).then(res => res.json())
      .then(data => showAnimals(data.petfinder.pets.pet))
      .catch(err => console.log(err));
}

// show pet listings
function showAnimals(pets) {
  const results = document.querySelector('#results');

  results.innerHTML = '';

  pets.forEach(pet => {
      console.log(pet);
      const div = document.createElement('div');
      div.classList.add('card', 'card-body', 'mb-3');
      div.innerHTML =`
        <div class="row">
          <div class="col-sm-6">
            <h4>${pet.name.$t} (${pet.age.$t})</h4>
            <p class="text-secondary">${pet.breeds.breed.$t}</p>
            <p>${pet.contact.address1.$t} ${pet.contact.city.$t}
            ${pet.contact.zip.$t}</p>
            <ul class="list-group">
            <li class="list-group-item">Phone: ${pet.contact.phone.$t}</li>
            </ul>
          </div>
        </div>
      `;
      results.appendChild(div);


  });
}