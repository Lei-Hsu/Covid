import React from "react";
import styled from "styled-components";
import { device } from "../media/media";
import useFetchBoardCountry from "../customHooks/useFetchBoardCountry";

const AreaData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AreaName = styled.h1`
  width: 100%;
  text-align: center;
  font-weight: bold;
`;
const CountryName = styled.h2``;
const NewCases = styled.p`
  font-weight: bold;
  color: red;
`;
const TotalCases = styled.p`
  font-weight: bold;
`;
const DataArea = styled.div`
  min-width: 100%;
  @media ${device.pad} {
    min-width: 25%;
  }
`;
function CountryData({ wholeData }) {
  const {
    global,
    asia,
    europe,
    americaTotal,
    africa,
    oceania,
  } = useFetchBoardCountry(wholeData.response);
  return (
    <>
      <DataArea>
        <AreaName>全球排行</AreaName>
        {global.map((data, i) => {
          return (
            <AreaData key={i}>
              <CountryName>
                {i + 1}. {data.country.toUpperCase()}
              </CountryName>
              <NewCases>本日新增 {data.cases.new}</NewCases>
              <TotalCases>確診人數 {data.cases.total}</TotalCases>
            </AreaData>
          );
        })}
      </DataArea>
      <DataArea>
        <AreaName>亞洲排行</AreaName>
        {asia.map((data, i) => {
          return (
            <AreaData key={i}>
              <CountryName>
                {i + 1}. {data.country.toUpperCase()}
              </CountryName>
              <NewCases>本日新增 {data.cases.new}</NewCases>
              <TotalCases>確診人數 {data.cases.total}</TotalCases>
            </AreaData>
          );
        })}
      </DataArea>
      <DataArea>
        <AreaName>歐洲排行</AreaName>
        {europe.map((data, i) => {
          return (
            <AreaData key={i}>
              <CountryName>
                {i + 1}. {data.country.toUpperCase()}
              </CountryName>
              <NewCases>本日新增 {data.cases.new}</NewCases>
              <TotalCases>確診人數 {data.cases.total}</TotalCases>
            </AreaData>
          );
        })}
      </DataArea>
      <DataArea>
        <AreaName>美洲排行</AreaName>
        {americaTotal.map((data, i) => {
          return (
            <AreaData key={i}>
              <CountryName>
                {i + 1}. {data.country.toUpperCase()}
              </CountryName>
              <NewCases>本日新增 {data.cases.new}</NewCases>
              <TotalCases>確診人數 {data.cases.total}</TotalCases>
            </AreaData>
          );
        })}
      </DataArea>
      <DataArea>
        <AreaName>非洲排行</AreaName>
        {africa.map((data, i) => {
          return (
            <AreaData key={i}>
              <CountryName>
                {i + 1}. {data.country.toUpperCase()}
              </CountryName>
              <NewCases>本日新增 {data.cases.new}</NewCases>
              <TotalCases>確診人數 {data.cases.total}</TotalCases>
            </AreaData>
          );
        })}
      </DataArea>
      <DataArea>
        <AreaName>大洋洲排行</AreaName>
        {oceania.map((data, i) => {
          return (
            <AreaData key={i}>
              <CountryName>
                {i + 1}. {data.country.toUpperCase()}
              </CountryName>
              <NewCases>本日新增 {data.cases.new}</NewCases>
              <TotalCases>確診人數 {data.cases.total}</TotalCases>
            </AreaData>
          );
        })}
      </DataArea>
      <DataArea></DataArea>
      <DataArea></DataArea>
    </>
  );
}

export default CountryData;
