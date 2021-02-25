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

const LifeBelowWater = () => {
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
            { name: "Life Below Water"}
          ]}
        />
      </div>

      <SimpleCard title="14: Life Below Water">
        <center><img src="/assets/images/14LifeBelow.png" height="120" alt="water" /></center>
        <p></p>
        <h4>Goal 14: Conserve and sustainably use the oceans, seas and marine resources</h4>

        <ul>
          <li>
          The ocean drives global systems that make the Earth habitable for humankind. Our rainwater, drinking water, weather, climate, coastlines, much of our food, and even the oxygen in the air we breathe, are all ultimately provided and regulated by the sea.  
          </li>
          <p></p>
          <li>
          Careful management of this essential global resource is a key feature of a sustainable future. However, at the current time, there is a continuous deterioration of coastal waters owing to pollution, and ocean acidification is having an adversarial effect on the functioning of ecosystems and biodiversity. This is also negatively impacting small scale fisheries. 
          </li>
          <p></p>
          <li>
          Saving our ocean must remain a priority. Marine biodiversity is critical to the health of people and our planet. Marine protected areas need to be effectively managed and well-resourced and regulations need to be put in place to reduce overfishing, marine pollution and ocean acidification.
          </li>
        </ul>
      </SimpleCard>

      <SimpleCard title="Life Below Water">
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

export default LifeBelowWater;
