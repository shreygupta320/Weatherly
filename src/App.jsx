import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { getWeatherByCity } from "./services/weatherService";
import WeatherCard from "./components/WeatherCard";
import WeatherLayout from "./components/WeatherLayout";
import { getBackgroundUrl } from "./utils/getBackgroundUrl";
function App() {
  const [city, setCity] = useState(""); //single source of truth
  const [error, setError] =
    useState(
      "",
    ); /*In React, when state changes, the component owning that state re-renders.
All its child components also re-render unless optimized with memoization..*/
  let [weath, setWeather] = useState(null);
  let [condition, setCondition] = useState("clear");
  async function handleSearch() {
    if (city.trim() === "") {
      setError("Please enter a city name");
      return;
    }
    setError("");
    console.log("the city is ", city);
    const data = await getWeatherByCity(city);
    const cond = data.weather[0].main;
    setWeather(data);
    setCondition(cond);
  }
  useEffect(() => {
    if (weath) {
      console.log("State has updated:", weath);
    }
    if (condition) {
      console.log(condition);
    }
  }, [weath, condition]);
  return (
    <>
      <WeatherLayout backgroundImage={getBackgroundUrl(condition)}>
        <div className="flex flex-col h-full gap-2 justify-start">
          <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
          <WeatherCard weath={weath} />
        </div>
      </WeatherLayout>
    </>
  );
}

export default App;
