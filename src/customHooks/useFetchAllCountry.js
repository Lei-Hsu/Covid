import { useEffect } from "react";
import { API_KEY } from "../KEY/APIKEY";

function useFetchAllCountry(setData) {
  useEffect(() => {
    fetch("https://covid-193.p.rapidapi.com/statistics", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.response))
      .catch((err) => {
        alert(err);
      });
  }, [setData]);
}

export default useFetchAllCountry;
