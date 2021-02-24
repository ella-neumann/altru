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

const ClimateAction = () => {
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
            { name: "Climate Action"}
          ]}
        />
      </div>

      <SimpleCard title="13: Climate Action">
        <center><img src="/assets/images/13ClimateAction.png" width="100" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 13: Take urgent action to combat climate change and its impacts</h4>

        <ul>
          <li>
          2019 was the second warmest year on record and the end of the warmest decade (2010- 2019) ever recorded.  
          </li>
          <p> </p>
          <li>
          Carbon dioxide (CO2) levels and other greenhouse gases in the atmosphere rose to new records in 2019. 
          </li>
          <p> </p>
          <li>
          Climate change is affecting every country on every continent. It is disrupting national economies and affecting lives. Weather patterns are changing, sea levels are rising, and weather events are becoming more extreme.
          </li>
        </ul>
        <p>Although greenhouse gas emissions are projected to drop about 6 per cent in 2020 due to travel bans and economic slowdowns resulting from the COVID-19 pandemic, this improvement is only temporary. Climate change is not on pause. Once the global economy begins to recover from the pandemic, emissions are expected to return to higher levels.</p>

        <p>Saving lives and livelihoods requires urgent action to address both the pandemic and the climate emergency.</p>

        <p>The Paris Agreement, adopted in 2015, aims to strengthen the global response to the threat of climate change by keeping a global temperature rise this century well below 2 degrees Celsius above pre-industrial levels. The agreement also aims to strengthen the ability of countries to deal with the impacts of climate change, through appropriate financial flows, a new technology framework and an enhanced capacity building framework.</p>

      </SimpleCard>

      <SimpleCard title="Climate Action">
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
              <TableCell className="px-0"><span className="H5"><a href='https://zooatlanta.org/'  className="H5"><b>Zoo Atlanta</b></a></span></TableCell>
              <TableCell className="px-0" colspan="3">Zoo Atlanta's mission is to save wildlife and their habitats through research, conservation, education and engaging experiences. The Zoo's efforts connect people to animals and inspire conservation action.</TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"><span className="H6"><b>A+</b></span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-0"><a href='https://www.adirondackcouncil.org/'  className="H5"><b>The Adirondack Council</b></a></TableCell>
              <TableCell className="px-0" colspan="3">The Council's protection efforts include: advocacy and lobbying for land use planning and land protection; research issues that affect the ecology and economy of the Park; public education through media and schools; environmental monitoring on the local, state, and national levels; and litigation, when necessary.</TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"><span className="H6"><b>A</b></span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-0"><a href='https://ncascades.org/'  className="H5"><b>North Cascades Institute</b></a></TableCell>
              <TableCell className="px-0" colspan="3">North Cascades Institute's mission is to inspire and empower environmental stewardship for all through transformative educational experiences in nature. Since 1986, we have helped connect people, nature and community through science, art, literature and the hands-on study of the natural and cultural history of the Pacific Northwest. Our goal is to help people of all ages experience and enjoy the mountains, rivers, forests, people and wildlife of the Pacific Northwest - so all will care for and protect this special place.</TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"><span className="H6"><b>A</b></span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-0"><a href='https://www.wta.org/'  className="H5"><b>Washington Trails Association</b></a></TableCell>
              <TableCell className="px-0" colspan="3">Washington Trails Association (WTA) is the voice for hikers in Washington state. WTA protects hiking trails and wild lands, takes thousands of volunteers out to maintain trails, and promotes hiking as a healthy, fun way to explore Washington. WTA's volunteer trail maintenance program is among the largest in the nation, with 4,400 volunteers (25% of them youth) giving back more than 140,000 hours of service annually to the trails they love--and getting a good dose of personal reward in return. Washington Trails Association protects trails through lobbying and grassroots advocacy on issues that impact hikers, like trail funding and wilderness protection. We work closely with federal and state policymakers to advance hiker's interests in forest planning and new recreation projects.</TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"><span className="H6"><b>A</b></span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-0"><a href='https://www.rainforestcoalition.org/'  className="H5"><b>Coalition for Rainforest Nations</b></a></TableCell>
              <TableCell className="px-0" colspan="3">The Coalition for Rainforest Nations (CfRN or the ‘Coalition) assists tropical governments, communities and peoples responsibly manage their rainforests. Healthy rainforests protect against a changing climate, generate needed biodiversity and provide safe habitats.</TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"><span className="H6"><b>B+</b></span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

          </TableBody>
        </Table>

      </SimpleCard>
    </div>
  );
};

export default ClimateAction;
