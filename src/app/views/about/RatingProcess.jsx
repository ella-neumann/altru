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
          <li>
            <code>m</code> - for classes that set <code>margin</code>
          </li>
          <li>
            <code>p</code> - for classes that set <code>padding</code>
          </li>
        </ul>
        <p>
          Where <em>sides</em> is one of:
        </p>
        <ul>
          <li>
            <code>t</code> - for classes that set <code>margin-top</code> or{" "}
            <code>padding-top</code>
          </li>
          <li>
            <code>b</code> - for classes that set <code>margin-bottom</code> or{" "}
            <code>padding-bottom</code>
          </li>
          <li>
            <code>l</code> - for classes that set <code>margin-left</code> or{" "}
            <code>padding-left</code>
          </li>
          <li>
            <code>r</code> - for classes that set <code>margin-right</code> or{" "}
            <code>padding-right</code>
          </li>
          <li>
            <code>x</code> - for classes that set both <code>*-left</code> and{" "}
            <code>*-right</code>
          </li>
          <li>
            <code>y</code> - for classes that set both <code>*-top</code> and{" "}
            <code>*-bottom</code>
          </li>
          <li>
            blank - for classes that set a <code>margin</code> or{" "}
            <code>padding</code> on all 4 sides of the element
          </li>
        </ul>
        
      </SimpleCard>
    </div>
  );
};

export default AboutAltru;
