import React from "react";
import ReactEcharts from "echarts-for-react";
import { withStyles } from "@material-ui/styles";

const SDGWheel = ({ height, color = [], theme }) => {
  const option = {
    tooltip: {
      show: true,
      trigger: "item",
      formatter: "{a} <br/>{b} {c}",
    },
    xAxis: [
      {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],

    series: [
      {
        name: "SDG Goal",
        type: "pie",
        radius: ["45%", "72.55%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        hoverOffset: 5,
        stillShowZeroSum: false,
        label: {
          normal: {
            show: false,
            position: "center", // shows the description data to center, turn off to show in right side
            textStyle: {
              color: theme.palette.text.secondary,
              fontSize: 13,
              fontFamily: "roboto",
            },
            // formatter: "{a}",
          },
          emphasis: {
            show: false,
            textStyle: {
              fontSize: "14",
              fontWeight: "normal",
              // color: "rgba(15, 21, 77, 1)"
            },
            formatter: "{b} \n{c} ({d}%)",
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            value: 1,
            name: "No Poverty",
          },
          {
            value: 1,
            name: "Zero Hunger",
          },
          {
            value: 1,
            name: "Good Health and Well-being",
          },
          {
            value: 1,
            name: "Quality Education",
          },
          {
            value: 1,
            name: "Gender Equality",
          },
          {
            value: 1,
            name: "Clean Water and Sanitation",
          },
          {
            value: 1,
            name: "Affordable and Clean Energy",
          },
          {
            value: 1,
            name: "Decent Work and Economic Growth",
          },
          {
            value: 1,
            name: "Industry, Innovation, and Infrastructure",
          },
          {
            value: 1,
            name: "Reduced Inequality",
          },
          {
            value: 1,
            name: "Sustainable Cities and Communities",
          },
          {
            value: 1,
            name: "Responsible Consumption and Production",
          },
          {
            value: 1,
            name: "Climate Action",
          },
          {
            value: 1,
            name: "Life Below Water",
          },
          {
            value: 1,
            name: "Life on Land",
          },
          {
            value: 1,
            name: "Peace and Justice Strong Institutions",
          },
          {
            value: 1,
            name: "Partnerships to Achieve the Goal",
          },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <ReactEcharts
      onEvents={{
        click: (e) => {
          console.log(e.name);
          if (e.name === "Google") {
            window.location.href = "https://google.com";
          }
        },
      }}
      style={{ height: height }}
      option={{
        ...option,
        color: [...color],
      }}
    />
  );
};

export default withStyles({}, { withTheme: true })(SDGWheel);
