import React from "react";

const shareRoute = [
  {
    path: "/share/share",
    component: React.lazy(() => import("./Share"))
  }
];

export default shareRoute;
