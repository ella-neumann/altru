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

const Energy = () => {
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
            { name: "Affordable and Clean Energy"}
          ]}
        />
      </div>

      <SimpleCard title="Affordable and Clean Energy">
        <Table>
          <TableHead>
            <TableRow className="bg-default">
              <TableCell className="px-0">Nonprofit</TableCell>
              <TableCell className="px-0">Summary</TableCell>
              <TableCell className="px-0">Rating</TableCell>
              <TableCell className="px-0">Volunteer/Donation Status</TableCell>
              <TableCell className="px-0">Scope</TableCell>
              <TableCell className="px-0">Like</TableCell>
              <TableCell className="px-0">Social Media</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(7).keys()]
              .slice(1)
              .reverse()
              .map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="px-0">h{item}</TableCell>
                  <TableCell className="px-0 capitalize"></TableCell>
                  <TableCell className="px-0 capitalize">
                    {ReactHtmlParser(`<h${item}>h${item}</h${item}>`)}
                  </TableCell>
                </TableRow>
              ))}
            <TableRow>
              <TableCell className="px-0">text-small</TableCell>
              <TableCell className="px-0 capitalize">0.8125rem</TableCell>
              <TableCell className="px-0 capitalize">
                <span className="text-small">text-small</span>
              </TableCell>
            </TableRow>

            {[13, 14, 16, 18, 20, 22, 24, 30, 32].map((item, index) => (
              <TableRow key={index}>
                <TableCell className="px-0">text-{item}</TableCell>
                <TableCell className="px-0 capitalize">{item}px</TableCell>
                <TableCell className="px-0 capitalize">
                  {ReactHtmlParser(
                    `<span class="text-${item}">text-${item}</span>`
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="py-2"></div>
        {list.map((item, ind) => (
          <div
            key={ind}
            className="flex items-center flex-wrap justify-between"
          >
            <code>{item.className}</code>
            <div className="highlight-js">
              <Highlight className="html">{`<div className="${item.className.replace(
                ".",
                ""
              )}">${item.description}</div>`}</Highlight>
            </div>
          </div>
        ))}
      </SimpleCard>
    </div>
  );
};

export default Energy;
