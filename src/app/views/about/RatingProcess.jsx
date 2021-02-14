import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow
} from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
import Highlight from "react-highlight";

const AboutAltru = () => {
  let list = [
    {
      className: ".m-0",
      description: `margin 0px`
    },
    {
      className: ".mx-4",
      description: `margin right 1rem & margin left 1rem`
    },
    {
      className: ".p-0",
      description: `padding 0px`
    },
    {
      className: ".py-2",
      description: `padding top 0.5rem & padding bottom 0.5rem`
    },
    {
      className: ".py-2px",
      description: `padding top 2px & padding bottom 2px`
    },
    {
      className: ".m-auto",
      description: `margin: auto`
    },
    {
      className: ".mx-auto",
      description: `margin-right: auto; margin-left: auto`
    },
    {
      className: ".m-sm-30",
      description: `
      screen size below 768px:: margin is 16px 
      screen size over 768px:: margin is 30px
      `
    },
    {
      className: ".mb-sm-30",
      description: `
      screen size below 768px:: margin-bottom is 16px 
      screen size over 768px:: margin-bottom is 30px
      `
    },
    {
      className: ".px-sm-30",
      description: `
      screen size below 768px:: padding right and left is 16px 
      screen size over 768px:: padding right and left is 30px
      `
    },
    {
      className: ".p-sm-30",
      description: `
      screen size below 768px:: padding is 16px 
      screen size over 768px:: padding is 24px
      `
    },
    {
      className: ".px-sm-24",
      description: `
      screen size below 768px:: padding right and left is 16px
      screen size over 768px:: padding right and left is 24px
       `
    },
    {
      className: ".pt-sm-24",
      description: `
      screen size below 768px:: padding top is 16px
      screen size over 768px:: padding top is 24px
       `
    },
    {
      className: ".pl-sm-24",
      description: `
      screen size below 768px:: padding left is 16px
      screen size over 768px:: padding left is 24px
       `
    }
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "About", path: "/about" },
          ]}
        />
      </div>
      <SimpleCard title="The Altru Nonprofit Rating Process">
        <h3>We are constantly working to find the best nonprofits for you</h3>
        <ul>
          
        </ul>

        
      </SimpleCard>
    </div>
  );
};

export default AboutAltru;
