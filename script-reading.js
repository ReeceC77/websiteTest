document.addEventListener("DOMContentLoaded", () => {
  const dataDiv = document.getElementById("data");

  // Fetching real-time weather data
  const fetchWeatherData = async () => {
    try {
      const apiKey = "5ab9d4fb56af096ec97723caa6ec9c5a";
      const city = "Cumberland";
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      dataDiv.innerHTML = `Temperature in ${data.location.name}: ${data.current.temp_c}°C`;
    } catch (err) {
      dataDiv.innerHTML = "Error fetching data.";
      console.error(err);
    }
  };

  // Fetch data immediately and then every 5 minutes
  fetchWeatherData();
  setInterval(fetchWeatherData, 300000); // 300000ms = 5 minutes
});
