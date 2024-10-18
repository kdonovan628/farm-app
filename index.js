// Function to add an animal to the final animals list with a remove button
function addAnimalToFinalList(animalName) {
  // grab the animals ul (id = final-animals-list)
  const finalAnimalsUL = document.querySelector('#final-animals-list');

  // create the li for the animal
  const animalLI = document.createElement('li');
  animalLI.innerHTML = `${animalName} <button class="remove-button">Remove</button>`;

  // Add event listener for the Remove button
  animalLI.querySelector('.remove-button').addEventListener('click', () => {
    animalLI.remove(); // remove the animal from the final animals list
  });

  // append the new animal li to the final animals list
  finalAnimalsUL.append(animalLI);
}

// grab the button
const addAnimalButton = document.querySelector('button');

// add event listener for the "Add Animal" button when it is clicked
addAnimalButton.addEventListener('click', (event) => {
  // prevent the form from refreshing
  event.preventDefault();
  
  // grab the input
  const userInput = document.querySelector('input');
  
  // grab the ul (id = recommended-animals-list)
  const recommendedAnimalsUL = document.querySelector('#recommended-animals-list');
  
  // create the li for the new recommended animal
  const newAnimalLI = document.createElement('li');
  newAnimalLI.innerHTML = `<p>${userInput.value} <button class="add-button">Add</button> <button class="remove-button">Remove</button></p>`;
  
  // append the user input to the recommended animals list
  recommendedAnimalsUL.append(newAnimalLI);
  
  // clear the input
  userInput.value = '';

  // Add event listener for the Add button
  newAnimalLI.querySelector('.add-button').addEventListener('click', () => {
    const animalName = newAnimalLI.querySelector('p').innerText.replace(' Add Remove', ''); // Get the full text from the p element and remove extra text
    addAnimalToFinalList(animalName); // add to the final list using the full name
    newAnimalLI.remove(); // remove from recommended list
  });

  // Add event listener for the Remove button in recommended list
  newAnimalLI.querySelector('.remove-button').addEventListener('click', () => {
    newAnimalLI.remove(); // remove the animal from the recommended list
  });
});

// Adding existing animals to the final animals list with remove buttons
const existingAnimals = document.querySelectorAll('#final-animals-list li');
existingAnimals.forEach(animal => {
  const animalName = animal.innerText.replace(' Remove', ''); // Remove the "Remove" text to get the animal name
  addAnimalToFinalList(animalName); // Re-add to final list with a remove button
  animal.remove(); // Remove the original entry
});