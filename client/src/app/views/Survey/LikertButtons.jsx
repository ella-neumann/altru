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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.checked) {
      this.setState({ selected: e.target.id });
      this.props.changeLikert(this.props.questionId, e.target.id);
    }
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
                onChange={(e) => this.handleChange(e)}
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
