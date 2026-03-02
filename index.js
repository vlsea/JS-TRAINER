const apiKey = "3109b436a7171d1c4a0cff4ae52ebcf0";

async function getWeather() {
  const city = document.getElementById("cityInput").value || "Москва";
  document.getElementById("loading").style.display = "block";
  document.getElementById("weatherResult").style.display = "none";

  try {
    const coordsRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`,
    );
    const coords = await coordsRes.json();

    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${coords[0].lat}&lon=${coords[0].lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric&lang=ru`,
    );
    const data = await weatherRes.json();
    const current = data.current;

    document.getElementById("temp").innerText =
      `🌡️ ${current.temp.toFixed(1)}°C`;
    document.getElementById("description").innerText =
      `☁️ ${current.weather[0].description}`;
    document.getElementById("wind").innerText = `🌬 ${current.wind_speed} м/с`;
    document.getElementById("humidity").innerText = `💧 ${current.humidity}%`;
    document.getElementById("country").innerText = `🌍 ${coords[0].country}`;
    document.getElementById("sunrise").innerText =
      `🌅 ${new Date(current.sunrise * 1000).toLocaleTimeString("ru-RU")}`;
    document.getElementById("sunset").innerText =
      `🌇 ${new Date(current.sunset * 1000).toLocaleTimeString("ru-RU")}`;

    document.getElementById("loading").style.display = "none";
    document.getElementById("weatherResult").style.display = "block";
  } catch (e) {
    document.getElementById("loading").innerHTML = "❌ Ошибка";
  }
}
