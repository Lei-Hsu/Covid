import React from "react";
import styled from "styled-components";
import { device } from "../media/media";
import CountryData from "../components/CountryData";

const CountryDataWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  @media ${device.pad} {
    margin-top: 180px;
  }
`;
function Board() {
  return (
    <CountryDataWrapper>
      <CountryData />
    </CountryDataWrapper>
  );
}

export default Board;
