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

const GenderEquality = () => {
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
            { name: "Gender Equality"}
          ]}
        />
      </div>

      <RefineInputs> </RefineInputs>

      <SimpleCard title="5: Gender Equality">
        <center><img src="/assets/images/5GenderEquality.png" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 5: Achieve gender equality and empower all women and girls</h4>

        <ul>
          <li>
          Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world.  
          </li>
          <p></p>
          <li>
          There has been progress over the last decades: More girls are going to school, fewer girls are forced into early marriage, more women are serving in parliament and positions of leadership, and laws are being reformed to advance gender equality. 
          </li>
          <p></p>
          <li>
          Despite gains, many challenges remain: discriminatory laws and social norms remain pervasive, women continue to be underrepresented at all levels of political leadership, and 1 in 5 women and girls between the ages of 15 and 49 report experiencing physical or sexual violence by an intimate partner within a 12-month period.
          </li>
          <p></p>
          <li>
          The effects of the COVID-19 pandemic could reverse the limited progress that has been made on gender equality and women’s rights.  The coronavirus outbreak exacerbates existing inequalities for women and girls across every sphere – from health and the economy, to security and social protection. 
          </li>
        </ul>
        <p>Women play a disproportionate role in responding to the virus, including as frontline healthcare workers and carers at home. Women’s unpaid care work has increased significantly as a result of school closures and the increased needs of older people. Women are also harder hit by the economic impacts of COVID-19, as they disproportionately work in insecure labour markets. Nearly 60 per cent of women work in the informal economy, which puts them at greater risk of falling into poverty. </p>
        
        <p>The pandemic has also led to a steep increase in violence against women and girls. With lockdown measures in place, many women are trapped at home with their abusers, struggling to access services that are suffering from cuts and restrictions. Emerging data shows that, since the outbreak of the pandemic, violence against women and girls – and particularly domestic violence – has intensified.</p>
      </SimpleCard>

      <SimpleCard title="Gender Equality">
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
                  <TableCell className="px-0"><span className="H5"><a href='https://www.madre.org/'  className="H5"><b>MADRE</b></a></span></TableCell>
                  <TableCell className="px-0" colspan="3">MADRE is an international women's human rights organization that works towards a world in which all people enjoy the fullest range of individual and collective human rights; in which resources are shared equitably and sustainably; in which women participate effectively in all aspects of society; and in which people have a meaningful say in decisions that affect their lives. MADRE uses human rights to advance social justice. We partner with women in communities worldwide to meet urgent, local needs and create long-term solutions to the problems that women face. Our program areas are: peace building; women's health and combating violence against women; and economic and environmental justice.</TableCell>
                  <TableCell className="px-0">
                  <LikeButton></LikeButton>
                  </TableCell>
                  <TableCell className="px-0"><span className="H6"><b>A</b></span></TableCell>
                  <TableCell className="px-0">
              <Button>
                    <img 
                      src={"/assets/images/donate.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://support.madre.org/give/327715/#!/donation/checkout";
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
                         window.location.href = "https://www.madre.org/volunteer";
                       }}
                      style={{
                        position: "relative"
                      }} 
                    />
                </Button>
              </TableCell>
              <TableCell className="px-0"><img src="/assets/images/global.JPEG" width="70px" alt="Global" /></TableCell>
              <TableCell className="px-0">
                  <Button>
                    <img 
                      src={ig_icon} 
                       onClick={() => {
                         window.location.href = "https://www.instagram.com/madrespeaks/";
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
                         window.location.href = "https://www.facebook.com/madre.org";
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
                  <TableCell className="px-0"><span className="H5"><a href='www.beyondborders.net'  className="H5"><b>Beyond Borders </b></a></span></TableCell>
                  <TableCell className="px-0" colspan="3">Helping People Build Movements for Liberation in Haiti. To do this Beyond Borders strengthens grassroots organizations, trains educators and community activists, develops pedagogical tools and curriculum, engages the Haitian government and civic leaders, and facilitates cross-cultural collaboration.</TableCell>
                  <TableCell className="px-0">
                  <LikeButton></LikeButton>
                  </TableCell>
                  <TableCell className="px-0"><span className="H6"><b>A</b></span></TableCell>
                  <TableCell className="px-0">
              <Button>
                    <img 
                      src={"/assets/images/donate.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://beyondborders.net/donate/";
                       }}
                      style={{
                        position: "relative",
                        height: "30px"
                      }} 
                    />
                </Button>
              </TableCell>
              <TableCell className="px-0"><img src="/assets/images/global.JPEG" width="70px" alt="Global" /></TableCell>
              <TableCell className="px-0">
                  <Button>
                    <img 
                      src={ig_icon} 
                       onClick={() => {
                         window.location.href = "https://www.instagram.com/madrespeaks/";
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
                         window.location.href = "https://www.facebook.com/madre.org";
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

                <TableRow>
                  <TableCell className="px-0"><span className="H5"><a href='https://www.equalitynow.org/'  className="H5"><b>Equality Now </b></a></span></TableCell>
                  <TableCell className="px-0" colspan="3">Equality Now was founded in 1992 to work for the protection and promotion of the human rights of women around the world. Working with national human rights organizations and individual activists, Equality Now documents violence and discrimination against women and mobilizes international action to support their efforts to stop these human rights abuses. Through its Women's Action Network of concerned groups and individuals around the world, Equality Now distributes information about human rights violations; takes action to protest these violations; and brings public attention to human rights violations against women.</TableCell>
                  <TableCell className="px-0">
                  <LikeButton></LikeButton>
                  </TableCell>
                  <TableCell className="px-0"><span className="H6"><b>A-</b></span></TableCell>
                  <TableCell className="px-0">
              <Button>
                    <img 
                      src={"/assets/images/donate.JPEG"} 
                       onClick={() => {
                         window.location.href = "https://www.equalitynow.org/donate";
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
              <TableCell className="px-0"><img src="/assets/images/global.JPEG" width="70px" alt="Global" /></TableCell>
              <TableCell className="px-0">
                  <Button>
                    <img 
                      src={ig_icon} 
                       onClick={() => {
                         window.location.href = "https://www.instagram.com/equalitynoworg/";
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
                         window.location.href = "https://www.facebook.com/equalitynoworg";
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

export default GenderEquality;
