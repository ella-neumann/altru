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

const DecentWork = () => {
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
            { name: "Decent Work and Economic Growth"}
          ]}
        />
      </div>

      <RefineInputs> </RefineInputs>
      
      <SimpleCard title="8: Decent Work and Economic Growth">
        <center><img src="/assets/images/8DecentWork.png"  height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 8: Promote inclusive and sustainable economic growth, employment and decent work for all</h4>

        <ul>
          <li>
          Sustained and inclusive economic growth can drive progress, create decent jobs for all and improve living standards. 
          </li>
          <p> </p>
          <li>
          COVID-19 has disrupted billions of lives and endangered the global economy. The International Monetary Fund (IMF) expects a global recession as bad as or worse than in 2009. As job losses escalate, the International Labor Organization estimates that nearly half of the global workforce is at risk of losing their livelihoods.
          </li>
        </ul>
        <p>Even before the outbreak of COVID-19, one in five countries – home to billions of people living in poverty – were likely to see per capita incomes stagnate or decline in 2020. Now, the economic and financial shocks associated with COVID-19—such as disruptions to industrial production, falling commodity prices, financial market volatility, and rising insecurity—are derailing the already tepid economic growth and compounding heightened risks from other factors.  </p>

      </SimpleCard>

      <SimpleCard title="Decent Work and Economic Growth">
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
                <TableCell className="px-0"><span className="H5"><a href='www.anitaborg.org'  className="H5"><b>Anitab.org </b></a></span></TableCell>
                <TableCell className="px-0" colspan="3">At AnitaB.org, we envision a future where the people who imagine and build technology mirror the people and societies for whom they build it. We connect, inspire, and guide women in computing, and organizations that view technology innovation as a strategic imperative.</TableCell>
                <TableCell className="px-0">
                <LikeButton></LikeButton>
                </TableCell>
                <TableCell className="px-0"><span className="H6"><b>A-</b></span></TableCell>
                <TableCell className="px-0">
              <Button>
                    <img 
                      src={"/assets/images/donate.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://anitab.org/donate/";
                       }}
                      style={{
                        position: "relative",
                        height: "30px"
                      }} 
                    />
                </Button>
                <Button>
                    <img 
                      src={"/assets/images/volunteer.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://anitab.org/volunteer/";
                       }}
                      style={{
                        position: "relative",
                        height: "60px"
                      }} 
                    />
                </Button>
              </TableCell>
              <TableCell className="px-0"><img src="/assets/images/global.JPEG" width="70px" alt="Local" /></TableCell>
              <TableCell className="px-0">
                  <Button>
                    <img 
                      src={ig_icon} 
                       onClick={() => {
                         window.location.href = "https://www.instagram.com/anitab_org/";
                       }}
                      style={{
                        position: "relative",
                        width: "30px",
                      }} 
                    />
                  </Button>
                  <Button>
                    <img 
                      src={fb_icon} 
                       onClick={() => {
                         window.location.href = "https://www.facebook.com/AnitaB.0rg/";
                       }}
                      style={{
                        position: "relative",
                        width: "60px",
                      }} 
                    />
                  </Button>
              </TableCell>
            </TableRow>

              <TableRow>
                <TableCell className="px-0"><span className="H5"><a href='www.capitalidea.org'  className="H5"><b>Capital IDEA </b></a></span></TableCell>
                <TableCell className="px-0" colspan="3">Founded in 1999, Capital IDEA offers financial support to adults pursuing higher education. Our mission is to lift working adults out of poverty and into living wage careers through education. Capital IDEA accomplishes this by connecting with local employers and supporting adults in targeted, career oriented fields. We aim to help our participants overcome common barriers that prevent low-income adults from entering skilled occupations. The inability to pay for the necessary education is only one barrier. </TableCell>
                <TableCell className="px-0">
                <LikeButton></LikeButton>
                </TableCell>
                <TableCell className="px-0"><span className="H6"><b>A-</b></span></TableCell>
                <TableCell className="px-0">
              <Button>
                    <img 
                      src={"/assets/images/donate.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://secure.capitalidea.org/np/clients/capitalidea/survey.jsp?surveyId=1";
                       }}
                      style={{
                        position: "relative",
                        height: "30px"
                      }} 
                    />
                </Button>
              </TableCell>
              <TableCell className="px-0"><img src="/assets/images/local.JPEG" width="70px" alt="Local" /></TableCell>
              <TableCell className="px-0">
                  <Button>
                    <img 
                      src={ig_icon} 
                       onClick={() => {
                         window.location.href = "https://www.instagram.com/capital_idea_atx/?hl=en";
                       }}
                      style={{
                        position: "relative",
                        width: "30px",
                      }} 
                    />
                  </Button>
                  <Button>
                    <img 
                      src={fb_icon} 
                       onClick={() => {
                         window.location.href = "https://www.facebook.com/capitalidea.austin";
                       }}
                      style={{
                        position: "relative",
                        width: "60px",
                      }} 
                    />
                  </Button>
              </TableCell>
            </TableRow>

              <TableRow>
                <TableCell className="px-0"><span className="H5"><a href='https://dressforsuccess.org/'  className="H5"><b>Dress for Success</b></a></span></TableCell>
                <TableCell className="px-0" colspan="3">Dress for Success is an international not-for-profit organization that empowers women to achieve economic independence by providing a network of support, professional attire and the development tools to help women thrive in work and in life. Since starting operations in 1997, Dress for Success has expanded to over 150 cities in 30 countries. To date, Dress for Success has helped more than one million women work towards self-sufficiency.</TableCell>
                <TableCell className="px-0">
                <LikeButton></LikeButton>
                </TableCell>
                <TableCell className="px-0"><span className="H6"><b>A-</b></span></TableCell>
                <TableCell className="px-0">
              <Button>
                    <img 
                      src={"/assets/images/donate.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://yourhourherpower.org/donate";
                       }}
                      style={{
                        position: "relative",
                        height: "30px"
                      }} 
                    />
                </Button>
                <Button>
                    <img 
                      src={"/assets/images/volunteer.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://dressforsuccess.org/get-involved/volunteer/";
                       }}
                      style={{
                        position: "relative"
                      }} 
                    />
                </Button>
              </TableCell>
              <TableCell className="px-0"><img src="/assets/images/global.JPEG" width="70px" alt="Local" /></TableCell>
              <TableCell className="px-0">
                  <Button>
                    <img 
                      src={ig_icon} 
                       onClick={() => {
                         window.location.href = "https://www.instagram.com/dressforsuccess/";
                       }}
                      style={{
                        position: "relative",
                        width: "30px",
                      }} 
                    />
                  </Button>
                  <Button>
                    <img 
                      src={fb_icon} 
                       onClick={() => {
                         window.location.href = "https://www.facebook.com/DressForSuccess/";
                       }}
                      style={{
                        position: "relative",
                        width: "60px",
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

export default DecentWork;
