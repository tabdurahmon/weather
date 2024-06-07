const KEY = "96b947a45d33d7dc1c49af3203966408";
const getWeather = async (city) => {
  const apiKey = "96b947a45d33d7dc1c49af3203966408";
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(baseURL);
  const data = await response.json();

  return data;
};
