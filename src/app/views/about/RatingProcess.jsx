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
        <center><img src="/assets/images/logo.png" width="70" height="70" alt="company-logo" /></center>
        <h3>We are constantly working to find the best nonprofits for you</h3>
        <ul>
          Altru rates nonprofits with letter grades based on their fiscal transparency, distribution of funds, and accountability. We know that your money and time is valuable, so we want you to make the biggest impact possible.
        </ul>
        <h4>Let us break down what factors go into our Nonprofit ratings:</h4>
        <ul>
          <li>Fiscal Transparency: We want to make sure that the nonprofits are  willingness to publish and make available critical data about the organization. This information includes auditing explaining to stakeholders how funds are used. It is also important that organizations provide their tax returns and the IRS Form 990.</li>
          <li>Distribution of funds: Altru belives that it is important that nonprofits equitably distribute funds. This means that folks at the top of the company do not make absurd amounts of money, funds are not disappearing, or money is being used carelessly.</li>
          <li>Accountability: It is critical that you, the donator and volunteer, have full access to the practices and the ethics of the organizations that you support. We take accountability into account when scoring nonprofits.</li>
        </ul>
      </SimpleCard>
    </div>
  );
};

export default AboutAltru;
