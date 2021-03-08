import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../media/media";
import useFetchBoardCountry from "../../customHooks/useFetchBoardCountry";
import { Pie } from "react-chartjs-2";
import { animation } from "../../animation";

const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${animation}
`;
const LocationBtnArea = styled.div`
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
const LocationBtn = styled.button`
  width: 16.6%;
  height: 30px;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  :hover {
    border-bottom: solid red 2px;
  }
  @media ${device.pad} {
    font-size: 20px;
  }
`;
const DataArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media ${device.pad} {
    flex-direction: row;
  }
`;
const Board = styled.div`
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
const Location = styled.h1`
  margin: 25px auto;
  font-size: 26px;
  color: #000;
`;
const TitleList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    font-size: 18px;
    font-weight: 500;
  }
`;
const DataList = styled.ul`
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
      font-size: 16px;
      font-weight: 600;
    }
    :nth-child(4) {
      text-align: right;
    }
    :nth-child(even) {
      color: red;
    }
  }
`;
const Chart = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  @media ${device.pad} {
    width: 50%;
  }
`;
const Time = styled.h1`
  margin-top: 50px;
  color: red;
  font-size: 16px;
  @media ${device.pad} {
    font-size: 30px;
  }
`;
function CountryDataBoard({ wholeData }) {
  const {
    global,
    asia,
    europe,
    americaTotal,
    africa,
    oceania,
  } = useFetchBoardCountry(wholeData.response);
  //改變目前地區的資料
  const [nowArea, setNowArea] = useState(global);
  const [nowAreaName, setNowAreaName] = useState("全球");
  const changeArea = (area, areaName) => {
    setNowArea(area);
    setNowAreaName(areaName);
  };
  //取出國名以及新增人數
  const dataCountryName = nowArea.map((item) => item.country);
  const dataCountryCase = nowArea.map((item) => item.cases.new);
  //圓餅圖
  const data = {
    //國名
    labels: dataCountryName,
    datasets: [
      {
        //人數
        data: dataCountryCase,
        backgroundColor: [
          "#9D0208",
          "#E85D04",
          "#FAA307",
          "#FFBA08",
          "#FFDC85",
        ],
      },
    ],
  };
  return (
    <BoardWrapper>
      <LocationBtnArea>
        <LocationBtn onMouseMove={() => changeArea(global, "全球")}>
          全球
        </LocationBtn>
        <LocationBtn onMouseMove={() => changeArea(asia, "亞洲")}>
          亞洲
        </LocationBtn>
        <LocationBtn onMouseMove={() => changeArea(europe, "歐洲")}>
          歐洲
        </LocationBtn>
        <LocationBtn onMouseMove={() => changeArea(americaTotal, "美洲")}>
          美洲
        </LocationBtn>
        <LocationBtn onMouseMove={() => changeArea(africa, "非洲")}>
          非洲
        </LocationBtn>
        <LocationBtn onMouseMove={() => changeArea(oceania, "大洋")}>
          大洋洲
        </LocationBtn>
      </LocationBtnArea>
      <DataArea>
        <Board>
          <Location>
            {nowAreaName}排行 <span style={{ fontSize: "16px" }}>TOP 5</span>
          </Location>
          <TitleList>
            <li>國家</li>
            <li>新增確診</li>
            <li>新增死亡</li>
            <li>總確診人數</li>
          </TitleList>
          {nowArea.map((data, i) => {
            return (
              <DataList key={i}>
                <li>{data.country.toUpperCase()}</li>
                <li>{data.cases.new || 0}</li>
                <li>{data.deaths.new || 0}</li>
                <li>{data.cases.total}</li>
              </DataList>
            );
          })}
        </Board>
        <Chart>
          <Pie data={data} width={"70%"} height={"40%"} />
        </Chart>
      </DataArea>
      <Time>
        查詢日期：
        {nowArea[0].day}
      </Time>
    </BoardWrapper>
  );
}

export default CountryDataBoard;
