import React from "react";
import CountryDataBoard from "../../components/board/CountryDataBoard";
import { useEffect, useState } from "react";
import { API_KEY } from "../../KEY/APIKEY";
import LoadingPage from "../LoadingPage";
import { CountryDataWrapper } from './Theme/index'


function BoardPage() {
  const [wholeData, setWholeData] = useState(null);
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
      .then((data) => setWholeData(data))
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <CountryDataWrapper>
      {wholeData ? <CountryDataBoard wholeData={wholeData} /> : <LoadingPage />}
    </CountryDataWrapper>
  );
}

export default BoardPage;
