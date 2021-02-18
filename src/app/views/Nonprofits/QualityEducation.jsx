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

const QualityEducation = () => {
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
            { name: "Quality Education"}
          ]}
        />
      </div>

      <SimpleCard title="Quality Education">
        <Table>
          <TableHead>
            <TableRow className="bg-default">
              <TableCell className="px-0">Nonprofit</TableCell>
              <TableCell className="px-0" colspan="2">Summary</TableCell>
              <TableCell className="px-0">Rating</TableCell>
              <TableCell className="px-0">Status</TableCell>
              <TableCell className="px-0">Scope</TableCell>
              <TableCell className="px-0">Like</TableCell>
              <TableCell className="px-0">Social Media</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
              <TableCell className="px-0"><span className="H5"><a href='https://www.acescholarships.org/'  className="H5">Ace Scholarships</a></span></TableCell>
              <TableCell className="px-0" colspan="2">Provide children of low-income families with scholarships to private schools in grades K-12, and to advocate for expanded school choice.</TableCell>
              <TableCell className="px-0"><span className="H6">A+</span></TableCell>
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

export default QualityEducation;
