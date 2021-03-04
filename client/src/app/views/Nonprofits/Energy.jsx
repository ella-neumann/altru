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

      <SimpleCard title="7: Affordable and Clean Energy">
        <center><img src="/assets/images/7Energy.png"  height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 7: Ensure access to affordable, reliable, sustainable and modern energy</h4>

        <ul>
          <li>
          The world is making progress towards Goal 7, with encouraging signs that energy is becoming more sustainable and widely available. Access to electricity in poorer countries has begun to accelerate, energy efficiency continues to improve, and renewable energy is making impressive gains in the electricity sector. 
          </li>
          <p> </p>
          <li>
          Nevertheless, more focused attention is needed to improve access to clean and safe cooking fuels and technologies for 3 billion people, to expand the use of renewable energy beyond the electricity sector, and to increase electrification in sub-Saharan Africa.
          </li>
        </ul>
        <p>The Energy Progress Report provides global dashboard to register progress on energy access, energy efficiency and renewable energy. It assesses the progress made by each country on these three pillars and provides a snapshot of how far we are from achieving the 2030 Sustainable Development Goals targets. </p>

      </SimpleCard>

      <SimpleCard title="Affordable and Clean Energy">
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
                <TableCell className="px-0"><span className="H5"><a href='http://energycoalition.org/'  className="H5"><b>Energy Coalition</b></a></span></TableCell>
                <TableCell className="px-0" colspan="3">We empower communities to leap into the future of clean energy! By bringing ideas, technology, and expertise to public agencies, businesses, educators and more, we’re creating the building blocks for a new energy economy. We envision a future in which communities are energy-producing networks and clean energy is affordable and accessible for everyone. </TableCell>
                <TableCell className="px-0">
                <LikeButton></LikeButton>
                </TableCell>
                <TableCell className="px-0"><span className="H6"><b>A</b></span></TableCell>
                <TableCell className="px-0">
                <Button>
                    <img 
                      src={"/assets/images/volunteer.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://energycoalition.org/work-with-us/";
                       }}
                      style={{
                        position: "relative"
                      }} 
                    />
                </Button>
              </TableCell>
              <TableCell className="px-0"><img src="/assets/images/national.JPEG" width="70px" alt="Local" /></TableCell>
              <TableCell className="px-0">
                  <Button>
                    <img 
                      src={ig_icon} 
                       onClick={() => {
                         window.location.href = "https://www.instagram.com/theenergycoalition/";
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
                         window.location.href = "https://www.facebook.com/The-Energy-Coalition-108158244274950";
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
                <TableCell className="px-0"><span className="H5"><a href='http://www.energyoutwest.org/'  className="H5"><b>Energy OutWest</b></a></span></TableCell>
                <TableCell className="px-0" colspan="3">Energy OutWest, Inc. (EOW) is an independent, nonprofit charitable organization (501c3) devoted to the promotion and advancement of the technical capacity of the region’s energy and environmental services network through education and training in energy conservation, renewable practices, and technologies. Our goal is to have our membership provide quality service to all clients. Every other year Energy OutWest organizes and delivers a regional conference that features the latest technical and organizational advances in the weatherization profession.</TableCell>
                <TableCell className="px-0">
                <LikeButton></LikeButton>
                </TableCell>
                <TableCell className="px-0"><span className="H6"><b>A-</b></span></TableCell>
                <TableCell className="px-0">
              </TableCell>
              <TableCell className="px-0"><img src="/assets/images/national.JPEG" width="70px" alt="National" /></TableCell>
              <TableCell className="px-0">
                  <Button>
                    <img 
                      src={ig_icon} 
                       onClick={() => {
                         window.location.href = "https://www.instagram.com/energyoutwest/";
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
                         window.location.href = "https://www.facebook.com/EnergyOutWest";
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
                <TableCell className="px-0"><span className="H5"><a href='https://www.elevatenp.org/'  className="H5"><b>Elevate Energy</b></a></span></TableCell>
                <TableCell className="px-0" colspan="3">Elevate wants everyone to have access to clean and affordable heat, power, and water in their homes and communities. We’re centering equity in the climate conversation.</TableCell>
                <TableCell className="px-0">
                <LikeButton></LikeButton>
                </TableCell>
                <TableCell className="px-0"><span className="H6"><b>B</b></span></TableCell>
                <TableCell className="px-0">
              </TableCell>
              <TableCell className="px-0"><img src="/assets/images/national.JPEG" width="70px" alt="Local" /></TableCell>
              <TableCell className="px-0">
                  <Button>
                    <img 
                      src={fb_icon} 
                       onClick={() => {
                         window.location.href = "https://www.facebook.com/ElevateNPOrg";
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

export default Energy;
