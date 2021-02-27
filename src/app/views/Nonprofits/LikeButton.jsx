import React from "react";
import { Button } from "@material-ui/core";

class LikeButton extends React.Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }
    
    render() {
      const label = this.state.liked ? 'Unlike' : 'Like'
      return (
        <Button className="customContainer" variant="contained"
        color="primary" style={{minWidth: "60%"}}
        onClick= {this.handleClick}>
            {label}
        </Button>
      );
    }
  }

export default LikeButton;