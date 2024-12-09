const latitude = 39.6483;
const longitude = -78.7602;

const fetchWeatherData = async () => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dataDiv.innerHTML = `Temperature in Cumberland, MD: ${data.current_weather.temperature}°C, ${data.current_weather.weathercode}`;
  } catch (err) {
    dataDiv.innerHTML = "Error fetching data.";
    console.error(err);
  }
};

// Fetch data immediately and then every 5 minutes
fetchWeatherData();
setInterval(fetchWeatherData, 300000); // 300000ms = 5 minutes
