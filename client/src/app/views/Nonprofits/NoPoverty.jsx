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

      <SimpleCard title="1: No Poverty">
        <center><img src="/assets/images/1NoPoverty.gif" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 1: End poverty in all its forms everywhere</h4>

        <ul>
          <li>
          Globally, the number of people living in extreme poverty declined from 36 per cent in 1990 to 10 per cent in 2015. But the pace of change is decelerating and the COVID-19 crisis risks reversing decades of progress in the fight against poverty. New research published by the UNU World Institute for Development Economics Research warns that the economic fallout from the global pandemic could increase global poverty by as much as half a billion people, or 8% of the total human population. This would be the first time that poverty has increased globally in thirty years, since 1990.
          </li>
          <p></p>
          <li>
          More than 700 million people, or 10 per cent of the world population, still live in extreme poverty today, struggling to fulfil the most basic needs like health, education, and access to water and sanitation, to name a few. The majority of people living on less than $1.90 a day live in sub-Saharan Africa. Worldwide, the poverty rate in rural areas is 17.2 per cent—more than three times higher than in urban areas. 
          </li>
          <p></p>
          <li>
          For those who work, having a job does not guarantee a decent living. In fact, 8 per cent of employed workers and their families worldwide lived in extreme poverty in 2018. One out of five children live in extreme poverty. Ensuring social protection for all children and other vulnerable groups is critical to reduce poverty.
          </li>
          
        </ul>
      </SimpleCard>

      <SimpleCard title="No Poverty">
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
                <TableCell className="px-0"><a href='https://www.bbbsps.org/'  className="H5"><b>Big Brothers Big Sisters of Puget Sound</b></a></TableCell>
                <TableCell className="px-0" colspan="3">Founded in 1957, Big Brothers Big Brothers Big Sisters of Puget Sound creates and supports 1-to-1 mentoring relationships that ignite the power and promise of youth. We work with children who deal with all kinds of challenges, including poverty, family instability, and marginalization. Big Brothers Big Sisters directly serves more than 2400 mentors and youth each year, building strong and supportive relationships to foster change in each person, family, and community.</TableCell>
                <TableCell className="px-0"> 
                  <LikeButton></LikeButton>
              </TableCell>
                <TableCell className="px-0"><span className="H6"><b>A-</b></span></TableCell>
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

export default NoPoverty;
