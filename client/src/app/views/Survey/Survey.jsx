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

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

const Survey = () => {
  const classes = useStyles();
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Survey", path: "/Survey" },
            { name: "Page 1" },
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
                      1. Given the chance, you prefer to dontate your time to a
                      charitable organzation or non-profit entity.
                    </font>
                  </b>
                </TableCell>
                <TableCell className="px-0" colspan="11">
                  <LikertButtons questionId="q-1" />
                </TableCell>
              </TableRow>
              <TableRow style={{ justifyContent: "space-evenly" }}>
                <TableCell className="px-0" colspan="8">
                  <b>
                    <font size="4">
                      2. Given the chance, you prefer to donate your money to a
                      chartiable organzation or non-profit entity.
                    </font>
                  </b>
                </TableCell>
                <TableCell className="px-0" colspan="11">
                  <LikertButtons questionId="q-2" />
                </TableCell>
              </TableRow>
              <TableRow style={{ justifyContent: "space-evenly" }}>
                <TableCell className="px-0" colspan="8">
                  <b>
                    <font size="4">
                      3. You favor local charities, rather than national or
                      multi-national organizations.
                    </font>
                  </b>
                </TableCell>
                <TableCell className="px-0" colspan="11">
                  <LikertButtons questionId="q-3" />
                </TableCell>
              </TableRow>
              <TableRow style={{ justifyContent: "space-evenly" }}>
                <TableCell className="px-0" colspan="8">
                  <b>
                    <font size="4">
                      4. You have a passion for helping those less fortunate
                      than you.
                    </font>
                  </b>
                </TableCell>
                <TableCell className="px-0" colspan="11">
                  <LikertButtons questionId="q-4" />
                </TableCell>
              </TableRow>
              <TableRow style={{ justifyContent: "space-evenly" }}>
                <TableCell className="px-0" colspan="8">
                  <b>
                    <font size="4">
                      5. You have a desire to work with food banks or meal
                      kitchens.
                    </font>
                  </b>
                </TableCell>
                <TableCell className="px-0" colspan="11">
                  <LikertButtons questionId="q-5" />
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
          color="primary"
          style={{
            width: "150px",
          }}
          onClick={() => {
            window.location.href = "../surveypage2";
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Survey;
