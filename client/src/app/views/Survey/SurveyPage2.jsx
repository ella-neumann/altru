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
//6. You have always wanted to volunteer at a local hospital.
//7. You greatly appreciate your educational opportunities, and would like to ensure others can get the same quality of education.
//8. You have always wanted to improve equality, regardless of gender identities.
//9. You want to ensure the availability of clean water and sanitation for everyone.
//10. You want to help provide access to clean, afforable and renewable energy for all.

class Surveypage2 extends React.Component {
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
              { name: "Page 2/4" },
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
                        6. You have always wanted to volunteer at a local
                        hospital.
                      </font>
                    </b>
                  </TableCell>
                  <TableCell className="px-0" colspan="11">
                    <LikertButtons questionId="q-6" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ justifyContent: "space-evenly" }}>
                  <TableCell className="px-0" colspan="8">
                    <b>
                      <font size="4">
                        7. You greatly appreciate your educational
                        opportunities, and would like to ensure others can get
                        the same quality of education.
                      </font>
                    </b>
                  </TableCell>
                  <TableCell className="px-0" colspan="11">
                    <LikertButtons questionId="q-7" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ justifyContent: "space-evenly" }}>
                  <TableCell className="px-0" colspan="8">
                    <b>
                      <font size="4">
                        8. You have always wanted to improve equality,
                        regardless of gender identities.
                      </font>
                    </b>
                  </TableCell>
                  <TableCell className="px-0" colspan="11">
                    <LikertButtons questionId="q-8" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ justifyContent: "space-evenly" }}>
                  <TableCell className="px-0" colspan="8">
                    <b>
                      <font size="4">
                        9. You want to ensure the availability of clean water
                        and sanitation for everyone.
                      </font>
                    </b>
                  </TableCell>
                  <TableCell className="px-0" colspan="11">
                    <LikertButtons questionId="q-9" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ justifyContent: "space-evenly" }}>
                  <TableCell className="px-0" colspan="8">
                    <b>
                      <font size="4">
                        10. You want to help provide access to clean, afforable
                        and renewable energy for all.
                      </font>
                    </b>
                  </TableCell>
                  <TableCell className="px-0" colspan="11">
                    <LikertButtons questionId="q-10" />
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
          {this.props.nextButton}
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

export default Surveypage2;
