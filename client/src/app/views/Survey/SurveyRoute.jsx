import React from "react";

const Survey = [
  {
    path: "/Survey",
    component: React.lazy(() => import("./Survey"))
  },
  {
    path: "/SurveyPage2",
    component: React.lazy(() => import("./SurveyPage2"))
  },
  {
    path: "/SurveyPage3",
    component: React.lazy(() => import("./SurveyPage3"))
  },
  {
    path: "/SurveyPage4",
    component: React.lazy(() => import("./SurveyPage4"))
  },
  {
    path: "/SurveyResults",
    component: React.lazy(() => import("./SurveyResults"))
  }
];

export default Survey;