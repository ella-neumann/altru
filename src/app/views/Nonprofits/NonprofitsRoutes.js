import React from "react";

const nonprofitsRoutes = [
  {
    path: "/nonprofits/no-poverty",
    component: React.lazy(() => import("./NoPoverty"))
  }
];

export default nonprofitsRoutes;
