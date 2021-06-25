import styled from "styled-components";
import { device } from "../../../media/";

export const CountryDataWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
@media ${device.pad} {
  margin-top: 40px;
}
`;