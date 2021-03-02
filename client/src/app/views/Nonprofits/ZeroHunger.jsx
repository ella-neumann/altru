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

const ZeroHunger = () => {
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
            { name:  "Zero Hunger"}
          ]}
        />
      </div>

      <SimpleCard title="Goal 2: Zero Hunger">
        <center><img src="/assets/images/2ZeroHunger.png" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 2: Zero Hunger</h4>

        <ul>
          <li>
          After decades of steady decline, the number of people who suffer from hunger – as measured by the prevalence of undernourishment – began to slowly increase again in 2015. Current estimates show that nearly 690 million people are hungry, or 8.9 percent of the world population – up by 10 million people in one year and by nearly 60 million in five years.
          </li>
          <p></p>
          <li>
          The world is not on track to achieve Zero Hunger by 2030. If recent trends continue, the number of people affected by hunger would surpass 840 million by 2030.
          </li>
          <p></p>
          <li>
          According to the World Food Programme, 135 million suffer from acute hunger largely due to man-made conflicts, climate change and economic downturns. The COVID-19 pandemic could now double that number, putting an additional 130 million people at risk of suffering acute hunger by the end of 2020.
          </li>
          <p></p>
          <li>
          With more than a quarter of a billion people potentially at the brink of starvation, swift action needs to be taken to provide food and humanitarian relief to the most at-risk regions.
          </li>
        </ul>
        <p>A profound change of the global food and agriculture system is needed if we are to nourish the more than 690 million people who are hungry today – and the additional 2 billion people the world will have by 2050. Increasing agricultural productivity and sustainable food production are crucial to help alleviate the perils of hunger.</p>
      </SimpleCard>

      <SimpleCard title="Zero Hunger">
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
              <TableCell className="px-0"><a href='https://www.actionagainsthunger.org/'  className="H5"><b>Act Against Hunger</b></a></TableCell>
              <TableCell className="px-0" colspan="3">Action Against Hunger is the world's hunger specialist whose primary goal is to create a better way to deal with deadly hunger. For almost 40 years, this global humanitarian organization has been on the front lines treating and preventing hunger across nearly 50 countries; serving more than 20 million people in 2017 alone. Action Against Hunger is the leader in a global movement that aims to end life-threatening hunger for good within our lifetimes. The organization is committed to doubling the number of children who receive urgent hunger care, from three million to six million by 2020. Of every dollar donated, 93 cents go directly to saving lives today and preventing hunger tomorrow.</TableCell>
              <TableCell className="px-0">
              <LikeButton></LikeButton>
              </TableCell>
              <TableCell className="px-0"><span className="H6"><b>A+</b></span></TableCell>
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

            <TableRow>
              <TableCell className="px-0"><a href='https://www.akroncantonfoodbank.org/'  className="H5"><b>Akron-Canton Regional Foodbank</b></a></TableCell>
              <TableCell className="px-0" colspan="3">The mission of the Akron-Canton Regional Foodbank is to lead a collaborative network that empowers people to experience healthy and hunger-free lives. We distribute food to feed people and we advocate, engage, and convene our community in the fight to end hunger.</TableCell>
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

            <TableRow>
              <TableCell className="px-0"><a href='https://arminarm.org/'  className="H5"><b>Arm in Arm</b></a></TableCell>
              <TableCell className="px-0" colspan="3">Arm In Arm, formerly called The Crisis Ministry of Mercer County, provides practical, caring programs that address hunger prevention, homelessness prevention and workforce training. Through our three food pantries, mobile pantry, and home food delivery service, customers receive three days worth of food for each member of their family at each visit. Arm In Arm helps to stabilize critical housing situations through emergency financial assistance and housing stability case management. </TableCell>
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

export default ZeroHunger;