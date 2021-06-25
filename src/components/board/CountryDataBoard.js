import React, { useState } from "react";
import useFetchBoardCountry from "../../customHooks/useFetchBoardCountry";
import { Pie } from "react-chartjs-2";
import { BoardWrapper, LocationBtnArea, LocationBtn, DataArea, Board, Location, TitleList, DataList, Chart, Time } from './Theme/index'
import { populationFormat } from '../../Handler'



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
        <LocationBtn
          onMouseMove={() => changeArea(global, "全球")}
        >
          全球
        </LocationBtn>
        <LocationBtn
          onMouseMove={() => changeArea(asia, "亞洲")}
        >
          亞洲
        </LocationBtn>
        <LocationBtn
          onMouseMove={() => changeArea(europe, "歐洲")}
        >
          歐洲
        </LocationBtn>
        <LocationBtn
          onMouseMove={() => changeArea(americaTotal, "美洲")}
        >
          美洲
        </LocationBtn>
        <LocationBtn
          onMouseMove={() => changeArea(africa, "非洲")}
        >
          非洲
        </LocationBtn>
        <LocationBtn
          onMouseMove={() => changeArea(oceania, "大洋")}
        >
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
          {
            nowArea.map((data, i) => {
              return (
                <DataList key={i}>
                  <li>{data.country.toUpperCase()}</li>
                  <li>{populationFormat(data.cases.new) || 0}</li>
                  <li>{populationFormat(data.deaths.new) || 0}</li>
                  <li>{populationFormat(data.cases.total)}</li>
                </DataList>
              );
            })
          }
        </Board>
        <Chart>
          <Pie
            data={data}
            width={"70%"}
            height={"40%"}
          />
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
