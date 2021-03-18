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

const questionObjects = [
  // 1
  {
    text:
      "Given the chance, you prefer to dontate your time to a charitable organzation or non-profit entity.",
    desc: "time",
  },
  // 2
  {
    text:
      "Given the chance, you prefer to donate your money to a chartiable organzation or non-profit entity.",
    desc: "money",
  },
  // 3
  {
    text:
      "You favor local charities, rather than national or multi-national organizations.",
    desc: "local",
  },
  // 4
  {
    text: "You have a passion for helping those less fortunate than you.",
    desc: "poverty",
  },
  // 5
  {
    text: "You have a desire to work with food banks or meal kitchens.",
    desc: "hunger",
  },
  // 6
  {
    text: "You have always wanted to volunteer at a local hospital.",
    desc: "good health",
  },
  // 7
  {
    text:
      "You greatly appreciate your educational opportunities, and would like to ensure others can get the same quality of education.",
    desc: "quality ed",
  },
  // 8
  {
    text:
      "You have always wanted to improve equality, regardless of gender identities.",
    desc: "gender eq",
  },
  // 9
  {
    text:
      "You want to ensure the availability of clean water and sanitation for everyone.",
    desc: "clean water",
  },
  // 10
  {
    text:
      "You want to help provide access to clean, afforable and renewable energy for all.",
    desc: "affordable",
  },
  // 11
  {
    text:
      "Bringing in jobs for everyone to bolster the economy is something you often think about.",
    desc: "decent work",
  },
  // 12
  {
    text:
      "You want to help strengthen the infrastructure and foster an inclusive innovation environment.",
    desc: "industry, innovation",
  },
  // 13
  {
    text:
      "You would like to reduce inequalities, regardless of race, religion, or socio-economic status.",
    desc: "reduced",
  },
  // 14
  {
    text: "You would like to help build strong sustainable communities.",
    desc: "sustainable cities",
  },
  // 15
  {
    text:
      "You have wanted to help reduce waste and promote responsible consumption of products.",
    desc: "responsible consumption",
  },
  // 16
  {
    text:
      "You have noticed that the call to action for climate change has fallen short of your expectations and want to do more.",
    desc: "climate action",
  },
  // 17
  {
    text:
      "You are often concerned about ocean life and want to help reduce our negative impacts on the ocean.",
    desc: "life below water",
  },
  // 18
  {
    text:
      "You are often concerned about life on land and want to help reduce our negative impacts on the affected ecosystems.",
    desc: "life on land",
  },
  // 19
  {
    text:
      "You want to help improve peace and social justice, at all levels, locally or around the world.",
    desc: "peace justice",
  },
  // 20
  {
    text:
      "You want to get involved with each of the implimentations of the Sustainable Development Goals.",
    desc: "the goals",
  },
];
const questions = questionObjects.map((obj) => obj.text);

const questionsPerPage = 5;

class Survey extends Component {
  constructor(props) {
    super(props);

    let filledQuestionPages = [];
    for (let i = 0; i < questions.length; i++) {
      let pageIdx = (i / questionsPerPage) >> 0;

      while (filledQuestionPages[pageIdx] === undefined) {
        filledQuestionPages.push([]);
      }

      filledQuestionPages[pageIdx].push({
        id: "q-" + (i + 1),
        answered: "none",
        text: i + 1 + ". " + questions[i],
      });
    }

    this.state = {
      page: 1,
      questionPages: filledQuestionPages,
    };
  }

  changeLikert(questionId, newAnswer) {
    let updQuestions = this.state.questionPages;
    updQuestions.forEach((page) => {
      let questionToBeUpd = page.find((question) => {
        return question.id === questionId;
      });
      if (questionToBeUpd !== undefined) {
        questionToBeUpd.answered = newAnswer;
      }
    });
    this.setState({ questionPages: updQuestions });
  }

  nextButton() {
    return this.state.page < (questions.length / questionsPerPage) >> 0 ? (
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
    ) : (
      <Button
        variant="contained"
        color="secondary"
        style={{
          width: "150px",
        }}
        onClick={() => {
          console.log(this.state.questionPages);
          let compiledQuestions = [];

          let qp = this.state.questionPages;

          qp.map((page) => {
            page.map((qstn) => {
              let score =
                qstn.answered === "none"
                  ? 0
                  : qstn.answered.includes("naod")
                  ? 3
                  : qstn.answered.includes("sd")
                  ? 1
                  : qstn.answered.includes("d")
                  ? 2
                  : qstn.answered.includes("sa")
                  ? 5
                  : qstn.answered.includes("a")
                  ? 4
                  : -1;

              let desc = questionObjects.find((qobj) =>
                qstn.text.includes(qobj.text)
              );

              desc = desc ? desc.desc : null;

              compiledQuestions.push({
                prefDesc: desc,
                prefWeight: score,
              });
            });
          });

          console.log(compiledQuestions);

          // window.location.href = "../surveyresults";
        }}
      >
        Submit
      </Button>
    );
  }

  backButton() {
    return this.state.page > 1 ? (
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
    ) : null;
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
                          <LikertButtons
                            questionId={question.id}
                            changeLikert={this.changeLikert.bind(this)}
                            selected={question.answered}
                          />
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
