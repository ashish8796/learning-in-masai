const apiKey = "c3ac998f040786cd10514604dc002d0e";

const cityElem = document.getElementById("city");

document.querySelector("button").addEventListener("click", (e) => {
  const cityName = cityElem.value;

  const uri = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  getWeather(uri);
});

const showData = document.querySelector(".show-data");

async function getWeather(url) {
  const data = await (await fetch(url)).json();
  console.log(data);
  showWeather(data);
}

function showWeather(data) {
  const { temp, pressure, humidity } = data.main;
  const { sunrise, sunset } = data.sys;
  const { speed } = data.wind;
  const { description, main, icon } = data.weather[0];

  const clearSkyAdd =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbKLWD0dzlELfXh-3V205Bb7KKhGYbFKzGQ&usqp=CAU";

  const cloudAdd =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqzAmjESh4ogfmTAx28a_IunjA20HFMGegA&usqp=CAU";

  const weatherStr = `
  <tr>
    <td>${temp}</td>
    <td>${pressure}</td>
    <td>${humidity}</td>
    <td>${sunrise}</td>
    <td>${sunset}</td>
    <td>${speed}</td>
    <td>${description}</td>
    <td><img src=${
      description === "clear sky" ? clearSkyAdd : cloudAdd
    } alt="icon" /></td>
  </tr>
  `;

  document.querySelector("tbody").innerHTML = weatherStr;
}
