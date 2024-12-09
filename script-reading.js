const dataDiv = document.getElementById("data");

const fetchWeatherData = async () => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=39.6483&longitude=-78.7602&current_weather=true`);
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const weather = data.current_weather;

    if (weather) {
      const temperature = weather.temperature;
      const weatherCode = weather.weathercode;
      const precipitation = weather.precipitation ?? "Data unavailable"; // Fallback if precipitation is undefined
      const snowfall = weather.snowfall ?? "Data unavailable"; // Fallback if snowfall is undefined

      // Check if these values are properly defined
      if (precipitation !== "Data unavailable" && snowfall !== "Data unavailable") {
        dataDiv.innerHTML = `
          <p>Temperature in Cumberland, MD: ${temperature}°C</p>
          <p>Weather: ${weatherCode}</p>
          <p>Precipitation: ${precipitation} mm</p>
          <p>Snowfall: ${snowfall} cm</p>
        `;
      } else {
        dataDiv.innerHTML = "Weather data is incomplete.";
      }
    } else {
      dataDiv.innerHTML = "Weather data is not available.";
    }
  } catch (err) {
    dataDiv.innerHTML = "Error fetching data.";
    console.error(err);
  }
};

// Fetch data immediately and then every 5 minutes
fetchWeatherData();
setInterval(fetchWeatherData, 300000); // 300000ms = 5 minutes
