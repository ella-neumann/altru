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

const NoPoverty = () => {
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
            { name: "No Poverty"}
          ]}
        />
      </div>

      <SimpleCard title="No Poverty">
        <Table>
            <TableHead>
              <TableRow className="bg-default">
                <TableCell className="px-0">Nonprofit</TableCell>
                <TableCell className="px-0">Like</TableCell>
                <TableCell className="px-0" colspan="3">Summary</TableCell>
                <TableCell className="px-0">Rating</TableCell>
                <TableCell className="px-0">Status</TableCell>
                <TableCell className="px-0">Scope</TableCell>
                <TableCell className="px-0">Social Media</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <TableRow>
                <TableCell className="px-0"><a href='https://www.bbbsps.org/'  className="H5"><b>Big Brothers Big Sisters of Puget Sound</b></a></TableCell>
                <TableCell className="px-0"></TableCell>
                <TableCell className="px-0" colspan="3">Founded in 1957, Big Brothers Big Brothers Big Sisters of Puget Sound creates and supports 1-to-1 mentoring relationships that ignite the power and promise of youth. We work with children who deal with all kinds of challenges, including poverty, family instability, and marginalization. Big Brothers Big Sisters directly serves more than 2400 mentors and youth each year, building strong and supportive relationships to foster change in each person, family, and community.</TableCell>
                <TableCell className="px-0"><span className="H6"><b>A-</b></span></TableCell>
                <TableCell className="px-0"></TableCell>
                <TableCell className="px-0"></TableCell>
              </TableRow>

            </TableBody>
          </Table>

      </SimpleCard>
    </div>
  );
};

export default NoPoverty;
