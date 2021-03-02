import React from "react";

const profileRoutes = [
  {
    path: "/account/profile",
    component: React.lazy(() => import("./Profile"))
  }
];

export default profileRoutes;