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

const QualityEducation = () => {
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
            { name: "Quality Education"}
          ]}
        />
      </div>

      <SimpleCard title="4: Quality Education">
        <center><img src="/assets/images/4QualityEducation.png" height="120" alt="climate-action" /></center>
        <p></p>
        <h4>Goal 4: Help all people gain access to quality education</h4>

        <ul>
          <li>
          Education enables upward socioeconomic mobility and is a key to escaping poverty. Over the past decade, major progress was made towards increasing access to education and school enrollment rates at all levels, particularly for girls. Nevertheless, about 260 million children were still out of school in 2018 — nearly one fifth of the global population in that age group. And more than half of all children and adolescents worldwide are not meeting minimum proficiency standards in reading and mathematics. 
          </li>
          <p></p>
          <li>
          In 2020, as the COVID-19 pandemic spread across the globe, a majority of countries announced the temporary closure of schools, impacting more than 91 per cent of students worldwide. By April 2020, close to 1.6 billion children and youth were out of school. And nearly 369 million children who rely on school meals needed to look to other sources for daily nutrition.
          </li>
          <p></p>
          <li>
          Never before have so many children been out of school at the same time, disrupting learning and upending lives, especially the most vulnerable and marginalised. The global pandemic has far-reaching consequences that may jeopardize hard won gains made in improving global education.
          </li>
        </ul>
      </SimpleCard>

      <SimpleCard title="Quality Education">
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
              <TableCell className="px-0"><span className="H5"><a href='https://www.acescholarships.org/'  className="H5"><b>Ace Scholarships</b></a></span></TableCell>
              <TableCell className="px-0"colspan="3">Provide children of low-income families with scholarships to private schools in grades K-12, and to advocate for expanded school choice.</TableCell>
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
              <TableCell className="px-0"><span className="H5"><a href='AdoptAClassroom.org'  className="H5"><b>AdoptAClassroom.org</b></a></span></TableCell>
              <TableCell className="px-0"colspan="3">AdoptAClassroom.org gives teachers a hand by providing needed classroom materials so that students can succeed.</TableCell>
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
              <TableCell className="px-0"><span className="H5"><a href='http://www.pageahead.org/'  className="H5"><b>Page Ahead Children's Literacy Program</b></a></span></TableCell>
              <TableCell className="px-0" colspan="3">Guided by the fact that literacy is essential to lifelong success, Page Ahead provides new books and develops reading activities that empower at-risk children. Founded in 1990, Page Ahead Children's Literacy Program has given more than 3.5 million new books to more than 950,000 children through collaborations with schools, social service agencies, preschools, and early childhood programs across Washington.</TableCell>
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

export default QualityEducation;
