import React from "react";

const searchBarRoute = [
  {
    path: "/search/searchbar",
    component: React.lazy(() => import("./SearchBar"))
  }
];

export default searchBarRoute;