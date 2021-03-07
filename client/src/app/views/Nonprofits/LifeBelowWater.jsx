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
import { Button } from "@material-ui/core";
import Highlight from "react-highlight";
import LikeButton from './LikeButton';
import fb_icon from './fb_icon.png';
import ig_icon from './instagram_icon.png';
import RefineInputs from './RefineInputs'

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

      <RefineInputs> </RefineInputs>

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
              <TableCell className="px-0"><a href='https://www.savebuzzardsbay.org/'  className="H5"><b>Buzzards Bay Coalition</b></a></TableCell>
              <TableCell className="px-0" colspan="3">Founded in 1987, The Buzzards Bay Coalition is a membership-supported organization dedicated to the restoration, protection and sustainable use and enjoyment of our irreplaceable Bay and its watershed. The Coalition works to improve the health of the Bay ecosystem for all through education, conservation, research and advocacy. The Coalition strives for a Bay shoreline defined by safe swimming beaches, open shellfish beds, and stretches of scenic spaces for all to enjoy; healthy waters that support abundant fish, shellfish, and wildlife populations; a Bay safe from the threats of oil spills, industrial and sewer discharges, and ocean dumping; and a watershed where rivers, streams, inland forests, and wetlands that buffer the Bay are protected.</TableCell>
              <TableCell className="px-0">
              <LikeButton></LikeButton>
              </TableCell>
              <TableCell className="px-0"><span className="H6"><b>A-</b></span></TableCell>
              <TableCell className="px-0">
                <Button>
                    <img 
                      src={"/assets/images/donate.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://www.savebuzzardsbay.org/take-action/donate/";
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
                         window.location.href = "https://www.instagram.com/savebuzzardsbay/";
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
                         window.location.href = "https://www.facebook.com/savebuzzardsbay";
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
              <TableCell className="px-0"><a href='https://coastalstudies.org/'  className="H5"><b>Center for Coastal Studies</b></a></TableCell>
              <TableCell className="px-0" colspan="3">The Center for Coastal Studies believes the preservation of marine and coastal habitats and the recovery of species is crucial to the health of all life. At the heart of our mission is conservation biology, what socio-biologist E.O. Wilson calls, "a discipline with a deadline, for what we do not save today may be gone tomorrow." Our mission is: to conduct scientific research with emphasis on marine mammals of the western North Atlantic and on the coastal and marine habitats and resources of the Gulf of Maine; to promote stewardship of coastal and marine ecosystems; to conduct educational activities and to provide resources that encourage the responsible use and conservation of coastal and marine ecosystems; and to collaborate with other institutions and individuals whenever possible to advance the Center's mission.</TableCell>
              <TableCell className="px-0">
              <LikeButton></LikeButton>
              </TableCell>
              <TableCell className="px-0"><span className="H6"><b>A-</b></span></TableCell>
              <TableCell className="px-0">
              <Button>
                    <img 
                      src={"/assets/images/donate.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://coastalstudies.org/donate/";
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
                         window.location.href = "https://coastalstudies.org/about/volunteers/";
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
                         window.location.href = "https://www.instagram.com/coastalstudiesptown/?hl=en";
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
                         window.location.href = "https://www.facebook.com/coastalstudies/";
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

export default LifeBelowWater;
