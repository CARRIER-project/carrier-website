---
layout: default
---

<script src="script.js"></script>

# Enter Your Age

<form>
  <input type="number" id="ageInput" placeholder="Enter your age">
  <button type="button" onclick="fetchAgeData()">Submit</button>
  <input type="number" id="weight" placeholder="Enter your weight">
  <button type="button" onclick="fetchAgeData()">Submit</button>
</form>

<div id="resultContainer">
  <!-- The result will be displayed here -->
</div>