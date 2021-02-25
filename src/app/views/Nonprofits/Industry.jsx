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

const Industry = () => {
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
            { name: "Industry, Innovation, and Infrastructure"}
          ]}
        />
      </div>

      <SimpleCard title="9: industry innovation and infrastructure">
        <center><img src="/assets/images/9Industry.png" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 9: Build resilient infrastructure, promote sustainable industrialization and foster innovation</h4>

        <ul>
          <li>
          Inclusive and sustainable industrialization, together with innovation and infrastructure, can unleash dynamic and competitive economic forces that generate employment and income. They play a key role in introducing and promoting new technologies, facilitating international trade and enabling the efficient use of resources. 
          </li>
          <p></p>
          <li>
          However, the world still has a long way to go to fully tap this potential. Least developed countries, in particular, need to accelerate the development of their manufacturing sector if they are to meet the 2030 target, and scale up investment in scientific research and innovation. 
          </li>
          <p></p>
          <li>
          Global manufacturing growth has been steadily declining, even before the outbreak of the COVID-19 pandemic. The pandemic is hitting manufacturing industries hard and causing disruptions in global value chains and the supply of products. 
          </li>
        </ul>
        <p>Innovation and technological progress are key to finding lasting solutions to both economic and environmental challenges, such as increased resource and energy-efficiency. Globally, investment in research and development (R&D) as a proportion of GDP increased from 1.5 per cent in 2000 to 1.7 per cent in 2015 and remained almost unchanged in 2017, but was only less than 1 per cent  in developing regions.</p>
        
        <p>In terms of communications infrastructure, more than half of the world’s population is now online and almost the entire world population lives in an area covered by a mobile network. It is estimated that in 2019, 96.5 per cent were covered by at least a 2G network.</p>
      </SimpleCard>

      <SimpleCard title="Industry, Innovation, and Infrastructure">
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

export default Industry;
