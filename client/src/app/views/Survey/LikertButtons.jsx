import React from "react";
import Form from "react-bootstrap/Form";

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
      selected: this.props.selected,
    };
  }

  handleChange(e) {
    // e.preventDefault();
    console.log(e.target.id);
    this.setState({ selected: e.target.id });

    console.log(this.state.selected);
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
                key={option.id}
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
