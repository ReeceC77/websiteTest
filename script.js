document.addEventListener("DOMContentLoaded", () => {
  const dataDiv = document.getElementById("data");

  // Example: Fetching real-time weather data
  fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London")
    .then(response => response.json())
    .then(data => {
      dataDiv.innerHTML = `Temperature in ${data.location.name}: ${data.current.temp_c}°C`;
    })
    .catch(err => {
      dataDiv.innerHTML = "Error fetching data.";
      console.error(err);
    });
});