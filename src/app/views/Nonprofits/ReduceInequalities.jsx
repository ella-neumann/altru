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

const ReduceInequalities = () => {
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
            { name: "Reduced Inequalities"}
          ]}
        />
      </div>

      <SimpleCard title="Reduced Inequalities">
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
              <TableCell className="px-0"><a href='https://bcnc.net/'  className="H5"><b>Boston Chinatown Neighborhood Center</b></a></TableCell>
              <TableCell className="px-0" colspan="3">The mission of Boston Chinatown Neighborhood Center is to ensure that the children, youth and families we serve have the resources and support they need to achieve greater economic success and social and physical well-being. Since 1969, BCNC has served as a vital link supporting the growing Asian immigrant and Asian American community of Greater Boston. Focusing on those most in need, over 70% of BCNC's constituents meet federal poverty guidelines.</TableCell>
              <TableCell className="px-0">
              <Button id = "likeBtn" 
                    variant="contained"
                    color="primary"
                    onClick={() => {
                       changeLike("likeBtn");
                    }}
                    style={{
                      minWidth: "60%",
                    }}
                  >LIKE
                  </Button>
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

export default ReduceInequalities;

function changeLike(btnID) {
  var change  = document.getElementById(btnID);

  if (change.innerHTML == "LIKE") {
    change.innerHTML = "UNLIKE";
    change.style.backgroundColor = "#6a75c9";
  }
  else {
    change.innerHTML = "LIKE";
    change.style.backgroundColor = "#7467ef";
  }
}

