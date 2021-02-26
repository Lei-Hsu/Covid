import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../media/media";
import { API_KEY } from "../KEY/APIKEY";
const Container = styled.div`
  margin-top: 100px;
  grid-column: 2/12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const CountryName = styled.div`
  grid-column: 1/13;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.pad} {
    grid-column: 6/8;
    text-align: center;
  }
  h1 {
    font-size: 48px;
  }
`;
const Detail = styled.div`
  grid-column: 1/13;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div:nth-child(even) {
    color: red;
  }
  @media ${device.pad} {
    grid-column: 1/13;
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    p {
      text-align: right;
    }
  }
`;
const DetailBox = styled.div`
  h2 {
    text-align: center;
  }
  p {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`;
function HomePage() {
  const [tawianData, setTaiwanData] = useState(null);
  useEffect(() => {
    fetch("https://covid-193.p.rapidapi.com/statistics?country=taiwan", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => setTaiwanData(data.response[0]))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {tawianData && (
        <Container>
          <CountryName>
            <h1>{tawianData.country}</h1>
          </CountryName>
          <Detail>
            <DetailBox>
              <h2>人口總數</h2>
              <p>{tawianData.population}</p>
            </DetailBox>
            <DetailBox>
              <h2>確診人數</h2>
              <p>{tawianData.cases.total}</p>
            </DetailBox>
            <DetailBox>
              <h2>死亡人數</h2>
              <p>{tawianData.deaths.total}</p>
            </DetailBox>
            <DetailBox>
              <h2>今日新增</h2>
              <p>{tawianData.cases.new}</p>
            </DetailBox>
            <DetailBox>
              <h2>康復人數</h2>
              <p>{tawianData.cases.recovered}</p>
            </DetailBox>
            <DetailBox>
              <h2>搜尋日期</h2>
              <p>{tawianData.day}</p>
            </DetailBox>
          </Detail>
        </Container>
      )}
    </>
  );
}

export default HomePage;
