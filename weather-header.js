const URL = `https://api.openweathermap.org/data/2.5/weather?q=tooele&appid=70df5f0ae46e995834832c42f82ffaf3`;

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("city").textContent = jsObject.name;
    const descrip = jsObject.weather[0].description; // note how we reference the weather array

    document.getElementById("current-desc").textContent = descrip;

    document.getElementById("current-humid").textContent =
      jsObject.main.humidity;
    document.getElementById("current-windSpeed").textContent =
      jsObject.wind.speed;

    // handles the wind chill factor
    let T = (document.getElementById("current-temp").textContent = Math.floor(
      jsObject.main.temp
    ));

    let W = (document.getElementById("current-windSpeed").textContent =
      Math.ceil(jsObject.wind.speed));
    const wc = 35.74 + 0.6215 * T - 35.75 * W ** 0.16 + 0.4275 * T * W ** 0.16;
    document.getElementById("current-windChill").textContent = Math.floor(wc);
    // console.log(wc);
  });
