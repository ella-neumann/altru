import React from "react";

const Survey = [
  {
    path: "/Survey",
    component: React.lazy(() => import("./Survey")),
  },
  {
    path: "/SurveyResults",
    component: React.lazy(() => import("./SurveyResults")),
  },
];

export default Survey;
