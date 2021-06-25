import styled from 'styled-components'
import { device } from "../../../media/";
import { FONT, COLOR } from "../../../constants/style";
import { animation } from "../../../animation";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${animation}
`;
export const WholeWorldData = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Title = styled.h1`
  padding-bottom: 5px;
  border-bottom: 3px solid red;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
`;
export const DataWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 33%;
  @media ${device.pad} {
    width: 20%;
  }
`;
export const DataTitle = styled.h3``;
export const DataInfo = styled.p`
  color: ${COLOR.mainColor};
  font-size: ${FONT.md};
  font-weight: 600;
`;
export const ChartArea = styled.div`
  width: 90%;
  @media ${device.pad} {
    height: 400px;
  }
`;