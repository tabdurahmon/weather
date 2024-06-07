const changeLocationForm = document.getElementById("change-location");
const card = document.getElementById("card");
const details = document.getElementById("details");
const weatherIcon = document.getElementById("weather-icon");
const overlay = document.getElementById("overlay");

const updateUI = (data) => {
  const { main, name, sys, weather } = data;

  details.innerHTML = `
    <h2 class="my-3">${name}, ${sys.country}</h2>
    <h3 class="my-3">${main.temp}°C</h3>
    <h3 class="my-3">${weather[0].description}</h3>
  `;

  weatherIcon.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  card.classList.remove("d-none");
};

changeLocationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  overlay.classList.remove("d-none");

  const city = changeLocationForm.city.value.trim();
  changeLocationForm.reset();

  getWeather(city)
    .then((data) => {
      updateUI(data);
      overlay.classList.add("d-none");
    })
    .catch((error) => {
      console.error(error);
      overlay.classList.add("d-none");
      alert("City not found");
    });
});
