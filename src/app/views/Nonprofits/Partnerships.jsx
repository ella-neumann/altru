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
import Highlight from "react-highlight";
import LikeButton from './LikeButton';

const Partnerships = () => {
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
            { name: "Partnerships for Goals"}
          ]}
        />
      </div>

      <SimpleCard title="17: Partnerships for the Goals">
        <center><img src="/assets/images/17PartnershipsForGoals.png" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 17: Revitalize the global partnership for sustainable development</h4>

        <ul>
          <li>
          The SDGs can only be realized with strong global partnerships and cooperation.
          </li>
          <p></p>
          <li>
          A successful development agenda requires inclusive partnerships — at the global, regional, national and local levels — built upon principles and values, and upon a shared vision and shared goals placing people and the planet at the centre.
          </li>
        </ul>
      </SimpleCard>

      <SimpleCard title="Partnerships for Goals">
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

export default Partnerships;
