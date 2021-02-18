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

      <SimpleCard title="Partnerships for Goals">
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
              <TableCell className="px-0"><span className="H5">Zoo Atlanta</span></TableCell>
              <TableCell className="px-0" colspan="2">Zoo Atlanta's mission is to save wildlife and their habitats through research, conservation, education and engaging experiences. The Zoo's efforts connect people to animals and inspire conservation action.</TableCell>
              <TableCell className="px-0"><span className="H6">A+</span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-0"><a href='https://www.rainforestcoalition.org/'  className="H5">Coalition for Rainforest Nations</a></TableCell>
              <TableCell className="px-0" colspan="2">The Coalition for Rainforest Nations (CfRN or the ‘Coalition) assists tropical governments, communities and peoples responsibly manage their rainforests. Healthy rainforests protect against a changing climate, generate needed biodiversity and provide safe habitats.</TableCell>
              <TableCell className="px-0"><span className="H6">B+</span></TableCell>
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
