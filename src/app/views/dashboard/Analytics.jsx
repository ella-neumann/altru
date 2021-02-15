import React, { Component, Fragment } from "react";
import { Grid, Card } from "@material-ui/core";

import DoughnutChart from "../charts/echarts/Doughnut";

import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import StatCards from "./shared/StatCards";
import TableCard from "./shared/TableCard";
import RowCards from "./shared/RowCards";
import StatCards2 from "./shared/StatCards2";
import UpgradeCard from "./shared/UpgradeCard";
import Campaigns from "./shared/Campaigns";
import { withStyles } from "@material-ui/styles";
import SDGWheel from "../charts/echarts/SDGWheel";
import { Button } from "@material-ui/core";

class Dashboard1 extends Component {
  state = {};

  render() {
    let { theme } = this.props;
    let height = "calc(100vh - 64px)";
    let circleHeight = "calc(100vh - 24vh)";

    return (
      <Fragment>
        <div
          style={{
            backgroundImage:
              "url('https://cdn.discordapp.com/attachments/798243218818990124/802325619945111602/GettyImages_1060748862.png')",
            backgroundSize: "100vh 100vh",
            height: height,
            width: "100vw",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "5vh",
              left: "5vw",
              height: "20vh",
              width: "30vh",
              background: "#3A4253",
              borderRadius: "20px",
            }}
          >
            <p
              style={{ color: "white", fontSize: "2.5vh", textAlign: "center" }}
            >
              Unsure what you are passionate about?
            </p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                window.location.href = "../../survey";
              }}
              style={{
                position: "relative",
                minWidth: "60%",
                left: "20%",
              }}
            >
              Take our survey!
            </Button>
          </div>
          <div
            style={{
              position: "relative",
              left: "30%",
              top: "10%",
              maxWidth: circleHeight,
              maxHeight: circleHeight,
              background: "lightgrey",
              borderRadius: circleHeight,
            }}
          >
            <SDGWheel
              height={circleHeight}
              color={[
                "#e5243b",
                "#DDA63A",
                "#4C9F38",
                "#C5192D",
                "#FF3A21",
                "#26BDE2",
                "#FCC30B",
                "#A21942",
                "#FD6925",
                "#DD1367",
                "#FD9D24",
                "#BF8B2E",
                "#3F7E44",
                "#0A97D9",
                "#56C02B",
                "#00689D",
                "#19486A",
              ]}
            />
            <div>
              <a href="https://sdgs.un.org/goals">
                <img
                  src="https://cdn.discordapp.com/attachments/798243218818990124/810636363916902452/1200px-Sustainable_Development_Goals_logo.png"
                  style={{
                    display: "block",
                    maxHeight: "25vh",
                    position: "absolute",
                    bottom: "calc(50vh - 22.5vh)",
                    left: "calc(50% - 20%)",
                  }}
                ></img>
              </a>
            </div>
          </div>
        </div>
        {/*
        <div className="pb-24 pt-7 px-8 bg-primary">
          <ModifiedAreaChart
            height="280px"
            option={{
              series: [
                {
                  data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33, 40],
                  type: "line",
                },
              ],
              xAxis: {
                data: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
              },
            }}
          ></ModifiedAreaChart>
        </div>

         <div className="analytics m-sm-30 mt--18">
          <Grid container spacing={3}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <StatCards />

              <TableCard />

              <StatCards2 />

              <h4 className="card-title text-muted mb-4">Ongoing Projects</h4>
              <RowCards />
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card className="px-6 py-4 mb-6">
                <div className="card-title">Traffic Sources</div>
                <div className="card-subtitle">Last 30 days</div>
                <DoughnutChart
                  height="300px"
                  color={[
                    theme.palette.primary.dark,
                    theme.palette.primary.main,
                    theme.palette.primary.light,
                  ]}
                />
              </Card>

              <UpgradeCard />

              <Campaigns />
            </Grid>
          </Grid>
        </div> */}
      </Fragment>
    );
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
