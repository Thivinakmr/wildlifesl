function fetchJSON() {
    fetch('introduction.json')
  .then(response => response.json())
  .then(data => {
        // Set the title
        document.getElementById('title').innerText = data.title;
  
        // Set the content
        document.getElementById('content').innerText = data.content;
  
        // Create a div for each animal
        const animalsDiv = document.getElementById('animals');
        data.animals.forEach(animal => {
          const animalDiv = document.createElement('div');
          animalDiv.classList.add('row1');
  
          const animalDescriptionDiv = document.createElement('div');
          animalDescriptionDiv.classList.add('animal-1');
          animalDescriptionDiv.innerText = animal.description;
          animalDiv.appendChild(animalDescriptionDiv);
  
          const animalImageDiv = document.createElement('div');
          animalImageDiv.classList.add('animal-1');
          const img = document.createElement('img');
          img.src = animal.image;
          img.alt = animal.name;
          animalImageDiv.appendChild(img);
          animalDiv.appendChild(animalImageDiv);
  
          animalsDiv.appendChild(animalDiv);
        });
      })
  .catch(error => console.error(error));
  }
  
  // Call the function to fetch the JSON data
  fetchJSON();