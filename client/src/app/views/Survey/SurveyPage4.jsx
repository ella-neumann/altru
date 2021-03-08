import React, { Component, Fragment } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import { Icon, Button, IconButton, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LikertButtons from "./LikertButtons";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";

//16. You have noticed that the call to action for climate change has fallen short of your expectations and want to do more.
//17. You are often concerned about ocean life and want to help reduce our negative impacts on the ocean.
//18. You are often concerned about life on land and want to help reduce our negative impacts on the affected ecosystems.
//19. You want to help improve peace and social justice, at all levels, locally or around the world.
//20. You want to get involved with each of the implimentations of the Sustainable Development Goals.
class Surveypage4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.parentState;
  }
  render() {
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Survey", path: "/Survey" },
              { name: "Page 4/4" },
            ]}
          />
        </div>
        <div>
          <SimpleCard>
            <Table>
              <TableHead>
                <TableRow
                  className="bg-default"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <TableCell className="px-0" colspan="9"></TableCell>
                  <TableCell className="px-0" colspan="2">
                    Strongly Disagree{" "}
                  </TableCell>
                  <TableCell className="px-0" colspan="2">
                    {" "}
                    Disagree{" "}
                  </TableCell>
                  <TableCell className="px-0" colspan="2">
                    {" "}
                    Neutral{" "}
                  </TableCell>
                  <TableCell className="px-0" colspan="2">
                    {" "}
                    Agree{" "}
                  </TableCell>
                  <TableCell className="px-0" colspan="2">
                    {" "}
                    Strongly Agree{" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow style={{ justifyContent: "space-evenly" }}>
                  <TableCell className="px-0" colspan="8">
                    <b>
                      <font size="4">
                        16. You have noticed that the call to action for climate
                        change has fallen short of your expectations and want to
                        do more.
                      </font>
                    </b>
                  </TableCell>
                  <TableCell className="px-0" colspan="11">
                    <LikertButtons questionId="q-16" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ justifyContent: "space-evenly" }}>
                  <TableCell className="px-0" colspan="8">
                    <b>
                      <font size="4">
                        17. You are often concerned about ocean life and want to
                        help reduce our negative impacts on the ocean.
                      </font>
                    </b>
                  </TableCell>
                  <TableCell className="px-0" colspan="11">
                    <LikertButtons questionId="q-17" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ justifyContent: "space-evenly" }}>
                  <TableCell className="px-0" colspan="8">
                    <b>
                      <font size="4">
                        18. You are often concerned about life on land and want
                        to help reduce our negative impacts on the affected
                        ecosystems.
                      </font>
                    </b>
                  </TableCell>
                  <TableCell className="px-0" colspan="11">
                    <LikertButtons questionId="q-18" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ justifyContent: "space-evenly" }}>
                  <TableCell className="px-0" colspan="8">
                    <b>
                      <font size="4">
                        19. You want to help improve peace and social justice,
                        at all levels, locally or around the world.
                      </font>
                    </b>
                  </TableCell>
                  <TableCell className="px-0" colspan="11">
                    <LikertButtons questionId="q-19" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ justifyContent: "space-evenly" }}>
                  <TableCell className="px-0" colspan="8">
                    <b>
                      <font size="4">
                        20. You want to get involved with each of the
                        implimentations of the Sustainable Development Goals.
                      </font>
                    </b>
                  </TableCell>
                  <TableCell className="px-0" colspan="11">
                    <LikertButtons questionId="q-20" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SimpleCard>
        </div>

        <div
          style={{
            position: "absolute",
            margin: "20px",
            right: "15px",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            style={{
              width: "150px",
            }}
            onClick={() => {
              window.location.href = "../surveyresults";
            }}
          >
            Submit
          </Button>
        </div>
        <div
          style={{
            position: "absolute",
            margin: "20px",
            left: "15px",
          }}
        >
          {this.props.backButton}
        </div>
      </div>
    );
  }
}

export default Surveypage4;
