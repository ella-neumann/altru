import React from "react";

const aboutRoutes = [
  {
    path: "/about/about-altru",
    component: React.lazy(() => import("./AboutAltru"))
  },
  {
    path: "/about/rating-process",
    component: React.lazy(() => import("./RatingProcess"))
  },
  {
    path: "/about/sdg",
    component: React.lazy(() => import("./AboutSDGs"))
  }
];

export default aboutRoutes;
