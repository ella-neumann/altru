import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, Button, IconButton, Fab } from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function AppButton() {
  const classes = useStyles();

  return (
    <div className="m-sm-30">
      <Button variant="contained" color="primary" className={classes.button}>
            Strongly Disagree
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
            Disagree
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
            Neutral
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
            Agree
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
            Strongly Agree
        </Button>
    </div>
  );
}