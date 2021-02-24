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

const LifeOnLand = () => {
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
            { name: "Life On Land"}
          ]}
        />
      </div>

      <SimpleCard title="15: Life on Land">
        <center><img src="/assets/images/15Land.png" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 15: Sustainably manage forests, combat desertification, halt and reverse land degradation, halt biodiversity loss</h4>

        <ul>
          <li>
          Nature is critical to our survival: nature provides us with our oxygen, regulates our weather patterns, pollinates our crops, produces our food, feed and fibre. But it is under increasing stress. Human activity has altered almost 75 per cent of the earth’s surface, squeezing wildlife and nature into an ever-smaller corner of the planet.
          </li>
          <p></p>
          <li>
          Around 1 million animal and plant species are threatened with extinction – many within decades – according to the 2019 Global Assessment Report on Biodiversity and Ecosystem Service. The report called for transformative changes to restore and protect nature. It found that the health of ecosystems on which we and all other species depend is deteriorating more rapidly than ever, affecting  the very foundations of our economies, livelihoods, food security, health and quality of life worldwide.
          </li>
          <p></p>
          <li>
          Deforestation and desertification – caused by human activities and climate change – pose major challenges to sustainable development and have affected the lives and livelihoods of millions of people. Forests are vitally important for sustaining life on Earth, and play a major role in the fight against climate change. And investing in land restoration is critical for improving livelihoods, reducing vulnerabilities, and reducing risks for the economy.
          </li>
          <p></p>
          <li>
          The health of our planet also plays an important role in the emergence of zoonotic diseases, i.e. diseases that are transmissible between animals and humans. As we continue to encroach on fragile ecosystems, we bring humans into ever-greater contact with wildlife, enabling pathogens in wildlife to spill over to livestock and humans, increasing the risk of disease emergence and amplification.
          </li>
        </ul>
      </SimpleCard>

      <SimpleCard title="Life On Land">
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

export default LifeOnLand;
