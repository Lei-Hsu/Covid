import React from "react";
import styled from "styled-components";
import { device } from "../media/media";

const AreaData = styled.div`
  min-width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${device.pad} {
    min-width: 100%;
  }
`;
const AreaName = styled.h1`
  font-weight: blod;
`;
const CountryName = styled.h2`
  font-weight: blod;
`;
const NewCases = styled.p`
  color: red;
`;
const TotalCases = styled.p``;
function CountryData() {
  return (
    <AreaData>
      <AreaName>123</AreaName>
      <CountryName>123</CountryName>
      <NewCases>123</NewCases>
      <TotalCases>123</TotalCases>
    </AreaData>
  );
}

export default CountryData;
