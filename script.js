function fetchAgeData() {
  const ageInput = document.getElementById('ageInput').value;
  const apiUrl = 'https://carrier-model-exposer-5cfb51351e5b.herokuapp.com/'; // Replace with the actual API URL

  // Assuming the API expects an 'age' parameter
  const requestBody = JSON.stringify({ age: ageInput });
  
  const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

	displayResult(response);
}

function displayResult(data) {
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = `<h2>Result:</h2><p>${data}</p>`;
}