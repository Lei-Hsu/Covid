import React from "react";
import styled from "styled-components";
import { device } from "../media/media";
import CountryData from "../components/CountryData";
import { useEffect, useState } from "react";
import { API_KEY } from "../KEY/APIKEY";
import LoadingPage from "./LoadingPage";

const CountryDataWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  @media ${device.pad} {
    margin-top: 180px;
  }
`;
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
      {wholeData ? <CountryData wholeData={wholeData} /> : <LoadingPage />}
    </CountryDataWrapper>
  );
}

export default BoardPage;
