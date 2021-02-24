import React, { Component } from "react";
import { Breadcrumb } from "matx";
import { Card } from "@material-ui/core";
import fb_icon from '../Nonprofits/fb_icon.png';
import ig_icon from '../Nonprofits/instagram_icon.png';
import twitter_icon from '../Nonprofits/twitter_icon.png';
import { Button } from "@material-ui/core";

class Share extends Component {
  state = {};
  render() {
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb routeSegments={[{ name: "Share" }]} />
        </div>
        <Card>
        <Button>
          <img 
            src={ig_icon} 
            onClick={() => {
              window.location.href = "https://instagram.com";
            }}
            style={{
              position: "relative",
              width:"180px",
            }} 
          />
        </Button>
        </Card>
        <div className="py-3" />
        <Card>
        <Button>
          <img 
            src={fb_icon} 
            onClick={() => {
              window.location.href = "https://facebook.com";
            }}
            style={{
              position: "relative",
              width:"240px",
              right:"17%",
            }} 
          />
        </Button>
        </Card>
        <div className="py-3" />
        <Card>
        <Button>
          <img 
            src={twitter_icon} 
            onClick={() => {
              window.location.href = "https://twitter.com";
            }}
            style={{
              position: "relative",
              width:"180px",
            }} 
          />
        </Button>

        </Card>
      </div>
    );
  }
}

export default Share;
