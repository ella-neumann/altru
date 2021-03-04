import React, { Component, Fragment } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import { Icon, Button, IconButton, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

class Results extends React.Component{
//display the http get request here?
}

const SurveyResults = () => {
  const classes = useStyles();
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Survey", path: "/Survey" },
            { name: "Results" },
          ]}
        />
      </div>
      <SimpleCard>
      <h4>Survey Results!</h4>
      {/* <Results/> */}
      </SimpleCard>
    </div>
  );
};

export default SurveyResults;