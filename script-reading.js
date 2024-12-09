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
      const precipitation = weather.precipitation; // Precipitation amount
      const snowfall = weather.snowfall; // Snowfall amount

      dataDiv.innerHTML = `
        Temperature in Cumberland, MD: ${temperature}°C
        Weather: ${weatherCode}
        Precipitation: ${precipitation} mm
        Snowfall: ${snowfall} cm
      `;
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
