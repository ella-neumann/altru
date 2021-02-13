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
          if (e.name === "No Poverty") {
            window.location.href = "/nonprofits/no-poverty";
          }
          if (e.name === "Zero Hunger") {
            window.location.href = "/nonprofits/zero-hunger";
          }
          if (e.name === "Good Health and Well-being") {
            window.location.href = "/nonprofits/good-health";
          }
          if (e.name === "Quality Education") {
            window.location.href = "/nonprofits/quality-education";
          }
          if (e.name === "Gender Equality") {
            window.location.href = "/nonprofits/gender-equality";
          }
          if (e.name === "Clean Water and Sanitation") {
            window.location.href = "/nonprofits/sanitation";
          }
          if (e.name === "Affordable and Clean Energy") {
            window.location.href = "/nonprofits/energy";
          }
          if (e.name === "Decent Work and Economic Growth") {
            window.location.href = "/nonprofits/decent-work";
          }
          if (e.name === "Industry, Innovation, and Infrastructure") {
            window.location.href = "/nonprofits/industry";
          }
          if (e.name === "Reduced Inequality") {
            window.location.href = "/nonprofits/reduce-inequalities";
          }
          if (e.name === "Sustainable Cities and Communities") {
            window.location.href = "/nonprofits/sustainable-cities";
          }
          if (e.name === "Responsible Consumption and Production") {
            window.location.href = "/nonprofits/responsible-consumption";
          }
          if (e.name === "Climate Action") {
            window.location.href = "/nonprofits/climate-action";
          }
          if (e.name === "Life Below Water") {
            window.location.href = "/nonprofits/life-below-water";
          }
          if (e.name === "Life on Land") {
            window.location.href = "/nonprofits/life-on-land";
          }
          if (e.name === "Peace and Justice Strong Institutions") {
            window.location.href = "/nonprofits/peace";
          }
          if (e.name === "Partnerships to Achieve the Goal") {
            window.location.href = "/nonprofits/partnerships";
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
