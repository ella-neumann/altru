import React, { Component, Fragment } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import { Icon, Button, IconButton, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LikertButtons from './LikertButtons'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    }
  }));


const Survey = () => {
    const classes = useStyles();
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Survey", path: "/Survey" },
              { name: "questionnaire" }
            ]}
          />
        </div>
        <SimpleCard title="Question 1">
            <LikertButtons/>
        </SimpleCard>
        <div className="py-3" />
        <SimpleCard title="Question 2">
            <LikertButtons/>
        </SimpleCard>
        <div className="py-3" />
        <SimpleCard title="Question 3">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 4">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 5">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 6">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 7">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 8">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 9">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 10">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 11">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 12">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 13">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 14">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 15">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 16">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 17">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 18">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 19">
            <LikertButtons/>
        </SimpleCard>
        <SimpleCard title="Question 20">
            <LikertButtons/>
        </SimpleCard>
      </div>
    );
  };
  
  export default Survey;