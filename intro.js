document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('index.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            localStorage.setItem("homepage", JSON.stringify(content));
  
            const data = JSON.parse(localStorage.getItem("homepage"));
            console.log(data);

            document.getElementById("").innerHTML =
        data.content;


  
           
  
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
   });