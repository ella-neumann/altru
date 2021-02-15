import React from "react";
import ReactEcharts from "echarts-for-react";
import { withStyles } from "@material-ui/styles";

const SDGWheel = ({ height, color = [], theme }) => {
  const option = {
    tooltip: {
      show: true,
      trigger: "item",
      confine: true,
      formatter: "{a} <br/>{b}",
      //TODO: idk why it won't break up the text
      textStyle: {
        fontSize: 14,
        width: 500,
        height: 100,
        overflow: "break",
        lineOverflow: "truncate",
      },
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
        name: "Sustainable Development Goal:",
        type: "pie",
        radius: ["55%", "90%"],
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
            focus: "data",
            textStyle: {
              fontSize: 14,
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
            name: "No Poverty - End poverty in all its forms everywhere.",
          },
          {
            value: 1,
            name:
              "Zero Hunger - End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
          },
          {
            value: 1,
            name:
              "Good Health and Well-being - Ensure healthy lives and promote well-being for all at all ages.",
          },
          {
            value: 1,
            name:
              "Quality Education - Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
          },
          {
            value: 1,
            name:
              "Gender Equality - Achieve gender equality and empower all women and girls.",
          },
          {
            value: 1,
            name:
              "Clean Water and Sanitation - Ensure availability and sustainable management of water and sanitation for all.",
          },
          {
            value: 1,
            name:
              "Affordable and Clean Energy - Ensure access to affordable, reliable, sustainable and modern energy for all.",
          },
          {
            value: 1,
            name:
              "Decent Work and Economic Growth - Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
          },
          {
            value: 1,
            name:
              "Industry, Innovation, and Infrastructure - Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
          },
          {
            value: 1,
            name:
              "Reduced Inequality - Reduce inequality within and among countries.",
          },
          {
            value: 1,
            name:
              "Sustainable Cities and Communities - Make cities and human settlements inclusive, safe, resilient and sustainable.",
          },
          {
            value: 1,
            name:
              "Responsible Consumption and Production - Ensure sustainable consumption and production patterns.",
          },
          {
            value: 1,
            name:
              "Climate Action - Take urgent action to combat climate change and its impacts.",
          },
          {
            value: 1,
            name:
              "Life Below Water - Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
          },
          {
            value: 1,
            name:
              "Life on Land - Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
          },
          {
            value: 1,
            name:
              "Peace and Justice Strong Institutions - Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
          },
          {
            value: 1,
            name:
              "Partnerships to Achieve the Goal - Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
          },
        ],
        itemStyle: {
          borderColor: "lightgrey",
          borderWidth: 5,
          borderRadius: "20px",
          // emphasis: {
          //   shadowBlur: 10,
          //   shadowOffsetX: 0,
          //   shadowColor: "rgba(0, 0, 0, 0.5)",
          // },
        },
      },
    ],
  };

  return (
    <ReactEcharts
      onEvents={{
        click: (e) => {
          console.log(e.name);
          if (e.name.includes("No Poverty")) {
            window.location.href = "/nonprofits/no-poverty";
          } else if (e.name.includes("Zero Hunger")) {
            window.location.href = "/nonprofits/zero-hunger";
          } else if (e.name.includes("Good Health and Well-being")) {
            window.location.href = "/nonprofits/good-health";
          } else if (e.name.includes("Quality Education")) {
            window.location.href = "/nonprofits/quality-education";
          } else if (e.name.includes("Gender Equality")) {
            window.location.href = "/nonprofits/gender-equality";
          } else if (e.name.includes("Clean Water and Sanitation")) {
            window.location.href = "/nonprofits/sanitation";
          } else if (e.name.includes("Affordable and Clean Energy")) {
            window.location.href = "/nonprofits/energy";
          } else if (e.name.includes("Decent Work and Economic Growth")) {
            window.location.href = "/nonprofits/decent-work";
          } else if (
            e.name.includes("Industry, Innovation, and Infrastructure")
          ) {
            window.location.href = "/nonprofits/industry";
          } else if (e.name.includes("Reduced Inequality")) {
            window.location.href = "/nonprofits/reduce-inequalities";
          } else if (e.name.includes("Sustainable Cities and Communities")) {
            window.location.href = "/nonprofits/sustainable-cities";
          } else if (
            e.name.includes("Responsible Consumption and Production")
          ) {
            window.location.href = "/nonprofits/responsible-consumption";
          } else if (e.name.includes("Climate Action")) {
            window.location.href = "/nonprofits/climate-action";
          } else if (e.name.includes("Life Below Water")) {
            window.location.href = "/nonprofits/life-below-water";
          } else if (e.name.includes("Life on Land")) {
            window.location.href = "/nonprofits/life-on-land";
          } else if (e.name.includes("Peace and Justice Strong Institutions")) {
            window.location.href = "/nonprofits/peace";
          } else if (e.name.includes("Partnerships to Achieve the Goal")) {
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
