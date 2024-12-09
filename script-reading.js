document.addEventListener("DOMContentLoaded", () => {
  const dataDiv = document.getElementById("data"); // Ensure this element exists in your HTML

  // Fetching real-time weather data
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=39.6483&longitude=-78.7602&current_weather=true`);
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      dataDiv.innerHTML = `
        <p>Temperature in Cumberland, MD: ${data.current_weather.temperature}°C</p>
        <p>Wind: ${data.current_weather.wind_speed} km/h, Direction: ${data.current_weather.wind_direction}</p>
        <p>Humidity: ${data.current_weather.humidity}%</p>
        <p>Pressure: ${data.current_weather.pressure} hPa</p>
        <p>Weather: ${data.current_weather.weathercode}</p>
      `;
    } catch (err) {
      dataDiv.innerHTML = "Error fetching data.";
      console.error(err);
    }
  };

  // Fetch data immediately and then every 5 minutes
  fetchWeatherData();
  setInterval(fetchWeatherData, 300000); // 300000ms = 5 minutes
});
