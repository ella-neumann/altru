import React from "react";

const Survey = [
  {
    path: "/Survey",
    component: React.lazy(() => import("./Survey"))
  }
];

export default Survey;