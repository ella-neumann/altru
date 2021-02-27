import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, Button, IconButton, Fab } from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
import Form from "react-bootstrap/Form";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

const LikertScale = [
  {
    id: "sd",
    label: "Strongly Disagree",
  },
  {
    id: "d",
    label: "Disagree",
  },
  {
    id: "naod",
    label: "Neither Agree or Disagree",
  },
  {
    id: "a",
    label: "Agree",
  },
  {
    id: "sa",
    label: "Strongly Agree",
  },
];

class LikertButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "none",
    };
  }

  handleChange(e) {
    // e.preventDefault();
    this.setState({ selected: e.target.id });
  }

  render() {
    return (
      <Form>
        <div
          key="custom-inline-radio"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {LikertScale.map((option) => {
            return (
              <Form.Check
                type="radio"
                // label={option.label}
                id={option.id + this.props.questionId}
                onChange={this.handleChange.bind(this)}
                checked={
                  this.state.selected === option.id + this.props.questionId
                }
              />
            );
          })}
        </div>
      </Form>
    );
  }
}

export default LikertButtons;
