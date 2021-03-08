import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../media/";
import LoadingPage from "../LoadingPage";
import { animation } from "../../animation/";
import useFetchSinge from "../../customHooks/useFetchSinge";
import Chart from "../../components/HomePage/Chart";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${animation}
`;
const WholeWorldData = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Title = styled.h1`
  padding-bottom: 5px;
  border-bottom: 3px solid red;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
`;
const DataWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 33%;
  @media ${device.pad} {
    width: 20%;
  }
`;
const DataTitle = styled.h3``;
const DataInfo = styled.p`
  color: red;
  font-weight: 600;
`;
const ChartArea = styled.div`
  width: 90%;
  @media ${device.pad} {
    height: 400px;
  }
`;

function HomePage() {
  const [wholeWorldData, setWholeWorldData] = useState(null);
  useFetchSinge("all", setWholeWorldData);
  return (
    <>
      {wholeWorldData ? (
        <Container>
          <WholeWorldData>
            <Title>全球新冠肺炎資訊</Title>
            <DataWrapper>
              <Data>
                <DataTitle>新增確診</DataTitle>
                <DataInfo>{wholeWorldData.cases.new}</DataInfo>
              </Data>
              <Data>
                <DataTitle>新增死亡</DataTitle>
                <DataInfo>{wholeWorldData.deaths.new}</DataInfo>
              </Data>
              <Data>
                <DataTitle>痊癒人數</DataTitle>
                <DataInfo>{wholeWorldData.cases.recovered}</DataInfo>
              </Data>
              <Data>
                <DataTitle>總死亡人數</DataTitle>
                <DataInfo>{wholeWorldData.deaths.total}</DataInfo>
              </Data>
              <Data>
                <DataTitle>總確診人數</DataTitle>
                <DataInfo>{wholeWorldData.cases.total}</DataInfo>
              </Data>
              <Data></Data>
            </DataWrapper>
          </WholeWorldData>
          <ChartArea>
            <Chart wholeWorldData={wholeWorldData} />
          </ChartArea>
        </Container>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default HomePage;
