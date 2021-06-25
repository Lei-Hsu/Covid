import React from "react";
import styled from "styled-components";
import { device } from "../../media/media";
import { COLOR, FONT } from "../../constants/style";
import { populationFormat } from '../../Handler'

const SearchDataBoxWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CountryName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.pad} {
    text-align: center;
  }
  h1 {
    font-size: 48px;
  }
`;
const Detail = styled.div`
  width: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div:nth-child(even) {
    color: ${COLOR.mainColor};
  }
  @media ${device.pad} {
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
    font-size: ${FONT.md};
    font-weight: bold;
    text-align: center;
  }
`;

function SearchDataBox({ countryData }) {
  return (
    <SearchDataBoxWrapper>
      <CountryName>
        <h1>{countryData.country}</h1>
      </CountryName>
      <Detail>
        <DetailBox>
          <h2>人口總數</h2>
          <p>{populationFormat(countryData.population) || "無資料"}</p>
        </DetailBox>
        <DetailBox>
          <h2>確診人數</h2>
          <p>{populationFormat(countryData.cases.total) || "無資料"}</p>
        </DetailBox>
        <DetailBox>
          <h2>死亡人數</h2>
          <p>{populationFormat(countryData.deaths.total) || "無資料"}</p>
        </DetailBox>
        <DetailBox>
          <h2>今日新增</h2>
          <p>{populationFormat(countryData.cases.new) || "無資料"}</p>
        </DetailBox>
        <DetailBox>
          <h2>康復人數</h2>
          <p>{populationFormat(countryData.cases.recovered) || "無資料"}</p>
        </DetailBox>
        <DetailBox>
          <h2>搜尋日期</h2>
          <p>{countryData.day}</p>
        </DetailBox>
      </Detail>
    </SearchDataBoxWrapper>
  );
}

export default SearchDataBox;
