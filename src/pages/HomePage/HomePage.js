import React, { useState } from "react";
import LoadingPage from "../LoadingPage";
import useFetchSinge from "../../customHooks/useFetchSinge";
import Chart from "../../components/HomePage/Chart";
import { Container, WholeWorldData, Title, DataWrapper, Data, DataTitle, DataInfo, ChartArea } from './Theme/index'
import { populationFormat } from '../../Handler'



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
                <DataInfo>{populationFormat(wholeWorldData.cases.new)}</DataInfo>
              </Data>
              <Data>
                <DataTitle>新增死亡</DataTitle>
                <DataInfo>{populationFormat(wholeWorldData.deaths.new)}</DataInfo>
              </Data>
              <Data>
                <DataTitle>痊癒人數</DataTitle>
                <DataInfo>{populationFormat(wholeWorldData.cases.recovered)}</DataInfo>
              </Data>
              <Data>
                <DataTitle>總死亡人數</DataTitle>
                <DataInfo>{populationFormat(wholeWorldData.deaths.total)}</DataInfo>
              </Data>
              <Data>
                <DataTitle>總確診人數</DataTitle>
                <DataInfo>{populationFormat(wholeWorldData.cases.total)}</DataInfo>
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
