import React, { Component } from "react";
import { Breadcrumb } from "matx";
import { Card } from "@material-ui/core";
import fb_icon from '../Nonprofits/fb_icon.png';
import ig_icon from '../Nonprofits/instagram_icon.png';
import twitter_icon from '../Nonprofits/twitter_icon.png';

class Share extends Component {
  state = {};
  render() {
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb routeSegments={[{ name: "Share" }]} />
        </div>
        <Card>
        <input type="image" 
          id="ig" 
          src={ig_icon}
          variant="contained"
          style={{
            position: "relative",
            maxWidth: "13%",
            left: "3.5%"
          }} 
        />
        </Card>
        <div className="py-3" />
        <Card>
        <input type="image" 
          id="fb" 
          src={fb_icon}
          variant="contained"
          style={{
            position: "relative",
            maxWidth: "60%",
          }} 
        />
        </Card>
        <div className="py-3" />
        <Card>
        <input type="image" 
          id="fb" 
          src={twitter_icon}
          variant="contained"
          style={{
            position: "relative",
            maxWidth: "15%",
            left: "2%"
          }} 
        />
        </Card>
      </div>
    );
  }
}

export default Share;
