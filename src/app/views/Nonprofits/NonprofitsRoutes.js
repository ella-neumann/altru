import React from "react";

const utilitiesRoutes = [
  {
    path: "/nonprofits/no-poverty",
    component: React.lazy(() => import("./NoPoverty"))
  }
];

export default utilitiesRoutes;
