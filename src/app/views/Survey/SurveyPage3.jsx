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
  TableRow
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

const SurveyPage3 = () => {
  const classes = useStyles();
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Survey", path: "/SurveyPage3" },
            { name: "Page 3" },
          ]}
        />
      </div>
      <SimpleCard>
      <Table>
          <TableHead>
            <TableRow className="bg-default" style={{justifyContent: "space-evenly" }}>
              <TableCell className="px-0" colspan="9"></TableCell>
              <TableCell className="px-0" colspan="2">Strongly Disagree </TableCell>
              <TableCell className="px-0" colspan="2">     Disagree     </TableCell>
              <TableCell className="px-0" colspan="2">     Neutral      </TableCell>
              <TableCell className="px-0" colspan="2">      Agree       </TableCell>
              <TableCell className="px-0" colspan="2">  Strongly Agree  </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow style={{justifyContent: "space-evenly" }}>
              <TableCell className="px-0" colspan="8"><b><font size="4">11. Bringing in jobs for everyone to bolster the economy is something you often think about.</font></b></TableCell>
              <TableCell className="px-0" colspan="11"><LikertButtons questionId="q-11" /></TableCell>
            </TableRow>
            <TableRow style={{justifyContent: "space-evenly" }}>
              <TableCell className="px-0" colspan="8"><b><font size="4">12. You want to help strengthen the infrastructure and foster an inclusive innovation environment.</font></b></TableCell>
              <TableCell className="px-0" colspan="11"><LikertButtons questionId="q-12" /></TableCell>
            </TableRow>
            <TableRow style={{justifyContent: "space-evenly" }}>
              <TableCell className="px-0" colspan="8"><b><font size="4">13. You would like to reduce inequalities, regardless of race, religion, or socio-economic status.</font></b></TableCell>
              <TableCell className="px-0" colspan="11"><LikertButtons questionId="q-13" /></TableCell>
            </TableRow>
            <TableRow style={{justifyContent: "space-evenly" }}>
              <TableCell className="px-0" colspan="8"><b><font size="4">14. You would like to help build strong sustainable communities.</font></b></TableCell>
              <TableCell className="px-0" colspan="11"><LikertButtons questionId="q-14" /></TableCell>
            </TableRow>
            <TableRow style={{justifyContent: "space-evenly" }}>
              <TableCell className="px-0" colspan="8"><b><font size="4">15. You have wanted to help reduce waste and promote responsible consumption of products.</font></b></TableCell>
              <TableCell className="px-0" colspan="11"><LikertButtons questionId="q-15" /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </SimpleCard>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          window.location.href = "../surveypage4";
        }}
        style={{
            position: "fixed",
            minWidth: "10%",
            bottom: 200,
            right: 750
          }}
        >Next
      </Button>
    </div>
  );
};

export default SurveyPage3;
