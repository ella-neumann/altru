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


const GoodHealth = () => {
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
            { name: "Good Health and Well-Being"}
          ]}
        />
      </div>

      <SimpleCard title="3: Good Health and Well-Being">
        <center><img src="/assets/images/3Health.png" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 3: Ensure healthy lives and promote well-being for all at all ages</h4>

        <ul>
          <li>
          Ensuring healthy lives and promoting well-being at all ages is essential to sustainable development. Currently, the world is facing a global health crisis unlike any other — COVID-19 is spreading human suffering, destabilizing the global economy and upending the lives of billions of people around the globe. 
          </li>
          <p></p>
          <li>
          Before the pandemic, major progress was made in improving the health of millions of people. Significant strides were made in increasing life expectancy and reducing some of the common killers associated with child and maternal mortality. But more efforts are needed to fully eradicate a wide range of diseases and address many different persistent and emerging health issues. By focusing on providing more efficient funding of health systems, improved sanitation and hygiene, and increased access to physicians, significant progress can be made in helping to save the lives of millions.
          </li>
          <p></p>
          <li>
          Health emergencies such as COVID-19 pose a global risk and have shown the critical need for preparedness. The United Nations Development Programme highlighted huge disparities in countries’ abilities to cope with and recover from the COVID-19 crisis. The pandemic provides a watershed moment for health emergency preparedness and for investment in critical 21st century public services. 
          </li>
        </ul>
      </SimpleCard>

      <SimpleCard title="Good Health and Well-Being">
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
              <TableCell className="px-0"><a href='https://www.activeminds.org/'  className="H5"><b>Active Minds</b></a></TableCell>
              <TableCell className="px-0" colspan="3">Active Minds is the nation's premier nonprofit organization supporting mental health awareness and education for young adults We are dedicated to saving lives and to building stronger families and communities. Through education, research, advocacy, and a focus on young adults ages 14–25, Active Minds is opening up the conversation about mental health and creating lasting change in the way mental health is talked about, cared for, and valued in the United States. What has guided and distinguished us from the start is a belief that young people will be the drivers of change.</TableCell>
              <TableCell className="px-0">
              <LikeButton></LikeButton>
              </TableCell>
              <TableCell className="px-0"><span className="H6"><b>A+</b></span></TableCell>
              <TableCell className="px-0">
              <Button>
                    <img 
                      src={"/assets/images/donate.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://give.wta.org/give/311808/#!/donation/checkout";
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
                         window.location.href = "https://www.wta.org/get-involved/volunteer";
                       }}
                      style={{
                        position: "relative"
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
                         window.location.href = "https://www.instagram.com/washingtontrails/";
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
                         window.location.href = "https://www.facebook.com/washingtontrails";
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
              <TableCell className="px-0"><a href='https://bikeworks.org/'  className="H5"><b>Bike Works Seattle</b></a></TableCell>
              <TableCell className="px-0" colspan="3">Bike Works promotes the bicycle as a vehicle for change to empower youth and build resilient communities. We believe that bicycling is an accessible form of transportation that promotes public health, builds confidence, encourages environmental stewardship and strengthens community. </TableCell>
              <TableCell className="px-0">
              <LikeButton></LikeButton>
              </TableCell>
              <TableCell className="px-0"><span className="H6"><b>A</b></span></TableCell>
              <TableCell className="px-0">
              <Button>
                    <img 
                      src={"/assets/images/donate.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://bikeworks.org/donate/";
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
                         window.location.href = "https://bikeworks.org/adult-classes/volunteering-community-service/";
                       }}
                      style={{
                        position: "relative"
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
                         window.location.href = "https://www.instagram.com/bikeworks206/?hl=en";
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
                         window.location.href = "https://www.facebook.com/BikeWorksSeattle/";
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

export default GoodHealth;
