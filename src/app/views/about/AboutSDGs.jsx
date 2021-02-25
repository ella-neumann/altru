import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
import Highlight from "react-highlight";

const AboutSDGs = () => {
  let list = [
    {
      className: ".m-0",
      description: `margin 0px`,
    },
    {
      className: ".mx-4",
      description: `margin right 1rem & margin left 1rem`,
    },
    {
      className: ".p-0",
      description: `padding 0px`,
    },
    {
      className: ".py-2",
      description: `padding top 0.5rem & padding bottom 0.5rem`,
    },
    {
      className: ".py-2px",
      description: `padding top 2px & padding bottom 2px`,
    },
    {
      className: ".m-auto",
      description: `margin: auto`,
    },
    {
      className: ".mx-auto",
      description: `margin-right: auto; margin-left: auto`,
    },
    {
      className: ".m-sm-30",
      description: `
      screen size below 768px:: margin is 16px 
      screen size over 768px:: margin is 30px
      `,
    },
    {
      className: ".mb-sm-30",
      description: `
      screen size below 768px:: margin-bottom is 16px 
      screen size over 768px:: margin-bottom is 30px
      `,
    },
    {
      className: ".px-sm-30",
      description: `
      screen size below 768px:: padding right and left is 16px 
      screen size over 768px:: padding right and left is 30px
      `,
    },
    {
      className: ".p-sm-30",
      description: `
      screen size below 768px:: padding is 16px 
      screen size over 768px:: padding is 24px
      `,
    },
    {
      className: ".px-sm-24",
      description: `
      screen size below 768px:: padding right and left is 16px
      screen size over 768px:: padding right and left is 24px
       `,
    },
    {
      className: ".pt-sm-24",
      description: `
      screen size below 768px:: padding top is 16px
      screen size over 768px:: padding top is 24px
       `,
    },
    {
      className: ".pl-sm-24",
      description: `
      screen size below 768px:: padding left is 16px
      screen size over 768px:: padding left is 24px
       `,
    },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "About SDGs", path: "/sdg" }]} />
      </div>
      <SimpleCard title="The United Nations Sustainable Development Goals">
        <a href="https://sdgs.un.org/goals">
          <center>
            <img
              src="/assets/images/sdgs.png"
              width="170"
              height="140"
              alt="sdgs"
            />
          </center>
        </a>
        <p>
          <li>
            A collection of 17 interlinked global goals, Sustainable Develpment
            Goals (SDGs), designed to be a "blueprint to achieve a better and
            more sustainable future for all"
          </li>

          <li>
            Set in 2015 by the United Nations General Assembly and are intended
            to be achieved by the year 2030.
          </li>
        </p>

        <p>
          The SGDs recognize that ending poverty and other deprivations must go
          hand-in-hand with strategies that improve health and education, reduce
          inequality, and spur economic growth – all while tackling climate
          change and working to preserve our oceans and forests.
        </p>

        <p>
          To find out more,&nbsp;
          <a href="https://sdgs.un.org/goals" style={{ color: "blue" }}>
            <u>click here</u>
          </a>
          .
        </p>
      </SimpleCard>
    </div>
  );
};

export default AboutSDGs;
