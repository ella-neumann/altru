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


      <SimpleCard title="Climate Action">
        <Table>
          <TableHead>
            <TableRow className="bg-default">
              <TableCell className="px-0">Nonprofit</TableCell>
              <TableCell className="px-0" colspan="2">Summary</TableCell>
              <TableCell className="px-0">Rating</TableCell>
              <TableCell className="px-0">Status</TableCell>
              <TableCell className="px-0">Scope</TableCell>
              <TableCell className="px-0">Like</TableCell>
              <TableCell className="px-0">Social Media</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
              <TableCell className="px-0"><span className="H5"><a href='https://zooatlanta.org/'  className="H5">Zoo Atlanta</a></span></TableCell>
              <TableCell className="px-0" colspan="2">Zoo Atlanta's mission is to save wildlife and their habitats through research, conservation, education and engaging experiences. The Zoo's efforts connect people to animals and inspire conservation action.</TableCell>
              <TableCell className="px-0"><span className="H6">A+</span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-0"><a href='https://www.rainforestcoalition.org/'  className="H5">Coalition for Rainforest Nations</a></TableCell>
              <TableCell className="px-0" colspan="2">The Coalition for Rainforest Nations (CfRN or the ‘Coalition) assists tropical governments, communities and peoples responsibly manage their rainforests. Healthy rainforests protect against a changing climate, generate needed biodiversity and provide safe habitats.</TableCell>
              <TableCell className="px-0"><span className="H6">B+</span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-0"><a href='https://www.adirondackcouncil.org/'  className="H5">The Adirondack Council</a></TableCell>
              <TableCell className="px-0" colspan="2">The Council's protection efforts include: advocacy and lobbying for land use planning and land protection; research issues that affect the ecology and economy of the Park; public education through media and schools; environmental monitoring on the local, state, and national levels; and litigation, when necessary.</TableCell>
              <TableCell className="px-0"><span className="H6">A+</span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-0"><a href='https://www.rainforestcoalition.org/'  className="H5">Coalition for Rainforest Nations</a></TableCell>
              <TableCell className="px-0" colspan="2">The Coalition for Rainforest Nations (CfRN or the ‘Coalition) assists tropical governments, communities and peoples responsibly manage their rainforests. Healthy rainforests protect against a changing climate, generate needed biodiversity and provide safe habitats.</TableCell>
              <TableCell className="px-0"><span className="H6">B+</span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-0"><a href='https://ncascades.org/'  className="H5">North Cascades Institute</a></TableCell>
              <TableCell className="px-0" colspan="2">North Cascades Institute's mission is to inspire and empower environmental stewardship for all through transformative educational experiences in nature. Since 1986, we have helped connect people, nature and community through science, art, literature and the hands-on study of the natural and cultural history of the Pacific Northwest. Our goal is to help people of all ages experience and enjoy the mountains, rivers, forests, people and wildlife of the Pacific Northwest - so all will care for and protect this special place.</TableCell>
              <TableCell className="px-0"><span className="H6">A</span></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
              <TableCell className="px-0"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-0"><a href='https://www.wta.org/'  className="H5">Washington Trails Association</a></TableCell>
              <TableCell className="px-0" colspan="2">Washington Trails Association (WTA) is the voice for hikers in Washington state. WTA protects hiking trails and wild lands, takes thousands of volunteers out to maintain trails, and promotes hiking as a healthy, fun way to explore Washington. WTA's volunteer trail maintenance program is among the largest in the nation, with 4,400 volunteers (25% of them youth) giving back more than 140,000 hours of service annually to the trails they love--and getting a good dose of personal reward in return. Washington Trails Association protects trails through lobbying and grassroots advocacy on issues that impact hikers, like trail funding and wilderness protection. We work closely with federal and state policymakers to advance hiker's interests in forest planning and new recreation projects.</TableCell>
              <TableCell className="px-0"><span className="H6">A</span></TableCell>
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

export default ClimateAction;
