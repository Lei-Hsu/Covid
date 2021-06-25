import styled from "styled-components";
import { device } from "../../../media/media";
import { animation } from "../../../animation";
import { COLOR, FONT } from "../../../constants/style";


export const BoardWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${animation}
`;
export const LocationBtnArea = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 40px;
@media ${device.pad} {
  margin-bottom: 40px;
}
`;
export const LocationBtn = styled.button`
width: 16.6%;
height: 30px;
border: none;
background: none;
font-size: ${FONT.sm};
font-weight: bold;
:hover {
  border-bottom: solid red 2px;
}
@media ${device.pad} {
  font-size: ${FONT.md};
}
`;
export const DataArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
@media ${device.pad} {
  flex-direction: row;
}
`;
export const Board = styled.div`
width: 90%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: space-between;
@media ${device.pad} {
  width: 50%;
  padding: 0 10px;
}
`;
export const Location = styled.h1`
margin: 25px auto;
font-size: 26px;
color: #000;
`;
export const TitleList = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
li {
  font-size: ${FONT.sm};
  font-weight: 500;
}
`;
export const DataList = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 10px;
border-bottom: #b3b3b3 solid 2px;
li {
  width: 25%;
  text-align: center;
  :nth-child(1) {
    text-align: left;
    font-size: ${FONT.sm};
    font-weight: 600;
  }
  :nth-child(4) {
    text-align: right;
  }
  :nth-child(even) {
    color: ${COLOR.mainColor};
  }
}
`;
export const Chart = styled.div`
display: flex;
width: 100%;
justify-content: center;
margin-top: 30px;
@media ${device.pad} {
  width: 50%;
}
`;
export const Time = styled.h1`
margin-top: 50px;
color: ${COLOR.mainColor};
font-size: ${FONT.sm};
@media ${device.pad} {
  font-size: 30px;
}
`;