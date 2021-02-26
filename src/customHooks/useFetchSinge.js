import { API_KEY } from "../KEY/APIKEY";
import { useEffect } from "react";

const useFetchSinge = (country, setData) => {
  useEffect(() => {
    fetch("https://covid-193.p.rapidapi.com/statistics?country=" + country, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.response[0]))
      .catch((err) => {
        alert(err);
      });
  }, [country, setData]);
};

export default useFetchSinge;
