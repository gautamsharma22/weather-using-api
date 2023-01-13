import React from "react";
import "./api.css";
import {
  FaGlobe,
  FaMapMarker,
  FaLocationArrow,
} from "react-icons/fa";
function Api() {
  const [cityData, setcityData] = React.useState(null);
  const [cityInfo, setcityInfo] = React.useState(null);
  const [cityName, setcityName] = React.useState("Mumbai");
  function keySubmit(event) {
    event.preventDefault();
    setcityName(document.getElementById("sdata").value);
  }
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;
  React.useEffect(() => {
    async function getWeatherData() {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "a6f10fa7d0mshf3b75222b7ccdaap169945jsn390da44d26bc",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      const res = await fetch(url, options);
      const data = await res.json();
      setcityData(data.current);
      console.log(data);
      setcityInfo(Object.values(data.location));
    }
    getWeatherData();
    console.log("hello")
  }, [url]);

  return (
    <>
      <div className="weather-all">
        <form
          className="weather-form"
          onSubmit={keySubmit}
          name="city"
        >
          <input
            type="text"
            name="search-city"
            id="sdata"
            placeholder="Enter City Name"
            className="weather-input"
          />
          <button type="submit" className="weather-button">
            Search
          </button>
        </form>
        <div className="weather-container">
          <div className="weather-info">
            {/* {JSON.stringify(cityData, null, 2)} */}
            {cityInfo != null && (
              <>
                <h2>
                  {" "}
                  <FaMapMarker aria-hidden="true" /> {cityInfo[0]}
                </h2>
                <h2>
                  {" "}
                  <FaLocationArrow /> {cityInfo[1]}
                </h2>
                <h2>
                  {" "}
                  <FaGlobe /> {cityInfo[2]}
                </h2>
              </>
            )}
          </div>
          <img
            className="main-image"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
            alt="weather"
          />
          <div className="temp">
            {cityData != null && cityData.temp_c} &#8451;
          </div>
          <div className="weather-detils">
            {cityData != null && (
              <>
                <h2>Feels Like - {cityData.feelslike_c} </h2>
                <h2>Visibility - {cityData.vis_km} </h2>
                <h2>Humidity - {cityData.humidity} </h2>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Api;
