import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../media/";
import LoadingPage from "../LoadingPage";
import useFetchSinge from "../../customHooks/useFetchSinge";
const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  grid-column: 2/12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  @media ${device.pad} {
    margin-top: 180px;
  }
  animation: hide 250ms ease-in forwards;
  @keyframes hide {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
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
  useFetchSinge("taiwan", setTaiwanData);

  return (
    <>
      {tawianData ? (
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
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default HomePage;
