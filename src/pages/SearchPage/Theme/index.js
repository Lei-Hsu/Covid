import styled from 'styled-components'
import { device } from "../../../media/";
import { FONT, COLOR } from "../../../constants/style";
import { animation } from "../../../animation";

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${animation};
`;
export const InputArea = styled.div`
  min-width: 60%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${device.pad} {
    flex-direction: row;
  }
  input {
    width: 100%;
    height: 6vh;
    text-align: center;
    font-size: ${FONT.md};
    border: none;
    border-bottom: 2px solid #333;
    border-radius: 0;
    outline: none;
    @media ${device.pad} {
      width: 80%;
    }
  }
  button {
    width: 100%;
    height: 6vh;
    margin-top: 10px;
    font-size: ${FONT.md};
    color: ${COLOR.secondColor};
    border-radius: 10px;
    border: none;
    background: red;
    @media ${device.pad} {
      width: 15%;
      margin-left: 15px;
    }
  }
`;
export const SelectArea = styled.div`
  text-align: center;
  margin-top: 40px;
  min-width: 60%;
  @media ${device.pad} {
    margin-top: 100px;
  }
`;

export const ShowDataArea = styled.div``;
export const Warning = styled.p`
  color: ${COLOR.mainColor};
  font-size: ${FONT.sm};
`;