import React from "react";
import "./SwitchButton.css"

class SwitchButton extends React.Component {

    render() {
      return (
        <label className="switch">
          <input type = "checkbox" />
          <span className = "slider" />
          </label>
      );
    }
  }

export default SwitchButton;