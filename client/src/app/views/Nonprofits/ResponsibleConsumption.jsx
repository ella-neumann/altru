import React from "react";
import ReactHtmlParser from "react-html-parser";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow
} from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
import { Button } from "@material-ui/core";
import Highlight from "react-highlight";
import LikeButton from './LikeButton';
import fb_icon from './fb_icon.png';
import ig_icon from './instagram_icon.png';
import RefineInputs from './RefineInputs'

const ResponsibleConsumption = () => {
  let list = [
    {
      className: ".font-light",
      description: "font-weight: 300"
    },
    {
      className: ".font-normal",
      description: "font-weight: normal"
    },
    {
      className: ".font-medium",
      description: "font-weight: 500"
    },
    {
      className: ".font-semibold",
      description: "font-weight: 600"
    },
    {
      className: ".font-bold",
      description: "font-weight: 700"
    },
    {
      className: ".capitalize",
      description: "Capitalize String"
    },
    {
      className: ".uppercase",
      description: "UPPERCASE STRING"
    },
    {
      className: ".lowercase",
      description: "lowercase string"
    },
    {
      className: ".whitespace-pre",
      description: "white-space: pre"
    },
    {
      className: ".whitespace-pre-wrap",
      description: "white-space: pre-wrap"
    },
    {
      className: ".whitespace-no-wrap",
      description: "white-space: nowrap"
    }
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Nonprofits", path: "/nonprofits" },
            { name: "Responsible Consumption, and Production"}
          ]}
        />
      </div>

      <RefineInputs> </RefineInputs>

      <SimpleCard title="12: Responsible Consumption and Production">
        <center><img src="/assets/images/12Responsible.png" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 12: Ensure sustainable consumption and production patterns</h4>

        <ul>
          <li>
          Each year, an estimated one third of all food produced – equivalent to 1.3 billion tonnes worth around $1 trillion – ends up rotting in the bins of consumers and retailers, or spoiling due to poor transportation and harvesting practices.
          </li>
          <p></p>
          <li>
          If people worldwide switched to energy efficient light bulbs the world would save US$120 billion annually.
          </li>
          <p></p>
          <li>
          Should the global population reach 9.6 billion by 2050, the equivalent of almost three planets could be required to provide the natural resources needed to sustain current lifestyles.
          </li>
        </ul>
      </SimpleCard>

      <SimpleCard title="Responsible Consumption, and Production">
      <Table>
            <TableHead>
              <TableRow className="bg-default">
                <TableCell className="px-0">Nonprofit</TableCell>
                <TableCell className="px-0" colspan="3">Summary</TableCell>
                <TableCell className="px-0">Like</TableCell>
                <TableCell className="px-0">Rating</TableCell>
                <TableCell className="px-0">Status</TableCell>
                <TableCell className="px-0">Scope</TableCell>
                <TableCell className="px-0">Social Media</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell className="px-0"><span className="H5"><b></b></span></TableCell>
                <TableCell className="px-0" colspan="3"></TableCell>
                <TableCell className="px-0"></TableCell>
                <TableCell className="px-0"><span className="H6"><b></b></span></TableCell>
                <TableCell className="px-0"></TableCell>
                <TableCell className="px-0"></TableCell>
                <TableCell className="px-0"></TableCell>
              </TableRow>

            </TableBody>
          </Table>
      </SimpleCard>
    </div>
  );
};

export default ResponsibleConsumption;
