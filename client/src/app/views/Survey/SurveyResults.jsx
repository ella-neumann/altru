import React from "react";
import { Breadcrumb, SimpleCard } from "matx";

class SurveyResults extends React.Component{
  constructor(props) {
    super(props);
    this.state = {apiResponse: []}
  }
  callAPI() {
    fetch("http://localhost:3001/surveyresults")
    .then(res => res.json())
    .then(res => this.setState({apiResponse : res}))
    .catch(err => err)
  }
  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Survey", path: "/Survey" },
              { name: "Results" },
            ]}
          />
        </div>
        <SimpleCard>
          <h2>Survey Results!</h2>
            {this.state.apiResponse.map((data, key) =>{
              return(
                <div key={key}>
                  <h4>Charity:</h4>
                    <b>{data.charityName}</b>
                    <h5>&emsp;&emsp;Mission Statement:</h5>
                    <p>
                      <ul>{data.mission}</ul>
                    </p>
                    <h5>&emsp;&emsp;Current Rating:</h5>
                      <ul>{data.currentRating.rating}</ul>
                    <h5>&emsp;&emsp;IRS Classifications:</h5>
                      <ul>Contributions: {data.irsClassification.deductibility}</ul>
                      <ul>IRS filing type: {data.irsClassification.subsection}</ul>
                      <ul>Charity Income: {data.irsClassification.incomeAmount}</ul>
                      <ul>Charity Classification: {data.irsClassification.classification}</ul>
                      <ul>Charity Affiliation: {data.irsClassification.affiliation}</ul>
                    <h5>&emsp;&emsp;Location:</h5>
                      <ul>{data.mailingAddress.city + ", " + data.mailingAddress.stateOrProvince}</ul>
                </div>
              )
            })}
        </SimpleCard>
      </div>
    );
  }
}

export default SurveyResults;