import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import LikertButtons from "./LikertButtons";

const questions = [
  // 1
  "Given the chance, you prefer to dontate your time to a charitable organzation or non-profit entity.",
  // 2
  "Given the chance, you prefer to donate your money to a chartiable organzation or non-profit entity.",
  // 3
  "You favor local charities, rather than national or multi-national organizations.",
  // 4
  "You have a passion for helping those less fortunate than you.",
  // 5
  "You have a desire to work with food banks or meal kitchens.",
  // 6
  "You have always wanted to volunteer at a local hospital.",
  // 7
  "You greatly appreciate your educational opportunities, and would like to ensure others can get the same quality of education.",
  // 8
  "You have always wanted to improve equality, regardless of gender identities.",
  // 9
  "You want to ensure the availability of clean water and sanitation for everyone.",
  // 10
  "You want to help provide access to clean, afforable and renewable energy for all.",
  // 11
  "Bringing in jobs for everyone to bolster the economy is something you often think about.",
  // 12
  "You want to help strengthen the infrastructure and foster an inclusive innovation environment.",
  // 13
  "You would like to reduce inequalities, regardless of race, religion, or socio-economic status.",
  // 14
  "You would like to help build strong sustainable communities.",
  // 15
  "You have wanted to help reduce waste and promote responsible consumption of products.",
  // 16
  "You have noticed that the call to action for climate change has fallen short of your expectations and want to do more.",
  // 17
  "You are often concerned about ocean life and want to help reduce our negative impacts on the ocean.",
  // 18
  "You are often concerned about life on land and want to help reduce our negative impacts on the affected ecosystems.",
  // 19
  "You want to help improve peace and social justice, at all levels, locally or around the world.",
  // 20
  "You want to get involved with each of the implimentations of the Sustainable Development Goals.",
];

const questionsPerPage = 5;

class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      questionPages: [],
    };

    let filledQuestionPages = this.state.questionPages;
    for (let i = 0; i < questions.length; i++) {
      let pageIdx = (i / questionsPerPage) >> 0;
      console.log(pageIdx);
      while (filledQuestionPages[pageIdx] === undefined) {
        filledQuestionPages.push([]);
      }

      filledQuestionPages[pageIdx].push({
        id: "q-" + i,
        answered: "none",
        text: i + 1 + ". " + questions[i],
      });
    }
    this.setState({ questionPages: filledQuestionPages });
  }

  nextButton() {
    return (
      <Button
        variant="contained"
        color="primary"
        style={{
          width: "150px",
        }}
        onClick={() => {
          this.setState({ page: this.state.page + 1 });
        }}
      >
        Next
      </Button>
    );
  }

  submitButton() {
    return (
      <Button
        variant="contained"
        color="secondary"
        style={{
          width: "150px",
        }}
        onClick={() => {
          window.location.href = "../surveyresults";
        }}
      >
        Submit
      </Button>
    );
  }

  backButton() {
    return (
      <Button
        variant="contained"
        color="primary"
        style={{
          width: "150px",
        }}
        onClick={() => {
          this.setState({ page: this.state.page - 1 });
        }}
      >
        Back
      </Button>
    );
  }

  render() {
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Survey", path: "/Survey" },
              {
                name:
                  "Page " +
                  this.state.page +
                  "/" +
                  questions.length / questionsPerPage,
              },
            ]}
          />
        </div>
        <div>
          <SimpleCard>
            <Table>
              <TableHead>
                <TableRow
                  className="bg-default"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <TableCell className="px-0" colSpan="9"></TableCell>
                  <TableCell className="px-0" colSpan="2">
                    Strongly Disagree{" "}
                  </TableCell>
                  <TableCell className="px-0" colSpan="2">
                    {" "}
                    Disagree{" "}
                  </TableCell>
                  <TableCell className="px-0" colSpan="2">
                    {" "}
                    Neutral{" "}
                  </TableCell>
                  <TableCell className="px-0" colSpan="2">
                    {" "}
                    Agree{" "}
                  </TableCell>
                  <TableCell className="px-0" colSpan="2">
                    {" "}
                    Strongly Agree{" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.questionPages[this.state.page - 1].map(
                  (question) => {
                    return (
                      <TableRow
                        style={{ justifyContent: "space-evenly" }}
                        key={"QuestionRow" + question.id}
                      >
                        <TableCell className="px-0" colSpan="8">
                          <b>
                            <font size="4">{question.text}</font>
                          </b>
                        </TableCell>
                        <TableCell className="px-0" colSpan="11">
                          <LikertButtons questionId={question.id} />
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </SimpleCard>
        </div>

        <div
          style={{
            position: "absolute",
            margin: "20px",
            right: "15px",
          }}
        >
          {this.nextButton()}
        </div>
        <div
          style={{
            position: "absolute",
            margin: "20px",
            left: "15px",
          }}
        >
          {this.backButton()}
        </div>
      </div>
    );
  }
}

export default Survey;
