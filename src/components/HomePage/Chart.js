import React from "react";
import { Line } from "react-chartjs-2";

function Chart({ wholeWorldData }) {
  const historyDate = [
    "2020-04-01",
    "2020-05-01",
    "2020-06-01",
    "2020-07-01",
    "2020-08-01",
    "2020-09-01",
    "2020-10-01",
    "2020-11-01",
    "2020-12-01",
    "2021-01-01",
    "2021-02-01",
    "2021-03-01",
    wholeWorldData.day,
  ];
  const historyTotal = [
    76313,
    93182,
    109649,
    193217,
    237007,
    256322,
    312498,
    427827,
    533639,
    538312,
    363993,
    277785,
    wholeWorldData.cases.new,
  ];

  const data = {
    //日期
    labels: historyDate,
    datasets: [
      {
        label: "新增確診人數",
        //人數資料
        data: historyTotal,
        backgroundColor: "#ed213a",
        pointBackgroundColor: "white",
      },
    ],
  };
  const option = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(200, 200, 200, 0.05)",
            lineWidth: 1,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(200, 200, 200, 0.5)",
            lineWidth: 1,
          },
        },
      ],
    },
    tooltips: {
      backgroundColor: "rgba(0,0,0,0.3)",
    },
  };
  return <Line data={data} options={option} width={"100%"} height={"100%"} />;
}

export default Chart;
