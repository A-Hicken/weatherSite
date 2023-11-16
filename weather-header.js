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
const newsURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4e36670664a349769b208dfe96ba3e32`;
fetch(newsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("article-link-1").textContent =
      jsObject.articles[0].title;
    document.getElementById("article-desc-1").textContent =
      jsObject.articles[0].description;
    document.getElementById("article-img-1").src =
      jsObject.articles[0].urlToImage;
    let title = document.getElementById("article-link-1");
    title.setAttribute("href", jsObject.articles[0].url);

    document.getElementById("article-link-2").textContent =
      jsObject.articles[1].title;
    document.getElementById("article-desc-2").textContent =
      jsObject.articles[1].description;
    document.getElementById("article-img-2").src =
      jsObject.articles[1].urlToImage;
    let title2 = document.getElementById("article-link-2");
    title2.setAttribute("href", jsObject.articles[1].url);

    document.getElementById("article-link-3").textContent =
      jsObject.articles[2].title;
    document.getElementById("article-desc-3").textContent =
      jsObject.articles[2].description;
    document.getElementById("article-img-3").src =
      jsObject.articles[2].urlToImage;
    let title3 = document.getElementById("article-link-3");
    title3.setAttribute("href", jsObject.articles[2].url);

    document.getElementById("article-link-4").textContent =
      jsObject.articles[3].title;
    document.getElementById("article-desc-4").textContent =
      jsObject.articles[3].description;
    document.getElementById("article-img-4").src =
      jsObject.articles[3].urlToImage;
    let title4 = document.getElementById("article-link-4");
    title4.setAttribute("href", jsObject.articles[3].url);
  });
