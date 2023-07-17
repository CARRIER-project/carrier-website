function fetchAgeData() {
  const ageInput = document.getElementById('ageInput').value;
  const apiUrl = 'https://api.example.com/query'; // Replace with the actual API URL

  // Assuming the API expects an 'age' parameter
  const queryParams = new URLSearchParams({ age: ageInput });

  fetch(`${apiUrl}?${queryParams}`)
    .then(response => response.json())
    .then(data => {
      displayResult(data); // Call function to display the result
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function displayResult(data) {
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = `<h2>Result:</h2><p>${data}</p>`;
}