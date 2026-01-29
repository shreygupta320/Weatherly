import axios from "axios";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export async function getWeatherByCity(city) {
  try {
    const response = await axios.get(BASE_URL, {
      params: { q: city, appid: API_KEY, units: "metric" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === "404") {
      throw new Error("city not found");
    } else {
      throw new Error("something else went wrong");
    }
  }
}
