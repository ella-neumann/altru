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
import { Button } from "@material-ui/core";
import fb_icon from './fb_icon.png';
import ig_icon from './instagram_icon.png';
import LikeButton from './LikeButton';
import RefineInputs from './RefineInputs'

const Peace = () => {
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
            { name: "Peace, Justice, and Strong Institutions"}
          ]}
        />
      </div>

      <RefineInputs> </RefineInputs>

      <SimpleCard title="16: Peace, Justice and Strong Institutions">
        <center><img src="/assets/images/16PeaceJustice.png" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 16: Promote just, peaceful and inclusive societies</h4>

        <ul>
          <li>
          Conflict, insecurity, weak institutions and limited access to justice remain a great threat to sustainable development. 
          </li>
          <p></p>
          <li>
          The number of people fleeing war, persecution and conflict exceeded 70 million in 2018, the highest level recorded by the UN refugee agency (UNHCR) in almost 70 years. 
          </li>
          <p></p>
          <li>
          In 2019, the United Nations tracked 357 killings and 30 enforced disappearances of human rights defenders, journalists and trade unionists in 47 countries.
          </li>
          <p></p>
          <li>
          The births of around one in four children under age 5 worldwide are never officially recorded, depriving them of a proof of legal identity crucial for the protection of their rights and for access to justice and social services.
          </li>
        </ul>
      </SimpleCard>

      <SimpleCard title="Peace, Justice, and Strong Institutions">
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
              <TableCell className="px-0"><a href='https://www.theadvocatesforhumanrights.org/'  className="H5"><b>The Advocates for Human Rights</b></a></TableCell>
              <TableCell className="px-0" colspan="3">The Advocates for Human Rights (formerly Minnesota Advocates for Human Rights) is an organization dedicated to the promotion and protection of internationally recognized human rights. The Advocates provides investigative fact finding, direct legal representation, collaboration for education and training, and a broad distribution of publications. The Advocates has produced more than 81 reports documenting human rights practices in more than 22 countries. Every year, The Advocates educates over 8,000 students and community members on human rights issues, and provides legal representation and assistance to over 1,000 disadvantaged individuals and families.</TableCell>
              <TableCell className="px-0">
              <LikeButton></LikeButton>
              </TableCell>
              <TableCell className="px-0"><span className="H6"><b>A</b></span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0">
              <Button>
                    <img 
                      src={ig_icon} 
                      // onClick={() => {
                      //   window.location.href = "https://instagram.com";
                      // }}
                      style={{
                        position: "relative",
                        width: "50px",
                      }} 
                    />
                  </Button>
                  <Button>
                    <img 
                      src={fb_icon} 
                      // onClick={() => {
                      //   window.location.href = "https://facebook.com";
                      // }}
                      style={{
                        position: "relative",
                        width: "80px",
                      }} 
                    />
                  </Button>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </SimpleCard>
    </div>
  );
};

export default Peace;