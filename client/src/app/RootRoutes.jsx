import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import utilitiesRoutes from "./views/utilities/UtilitiesRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import aboutRoutes from "./views/about/AboutRoutes";
import nonprofitsRoutes from "./views/Nonprofits/NonprofitsRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";
import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";
import SurveyRoute from "./views/Survey/SurveyRoute";

import formsRoutes from "./views/forms/FormsRoutes";
import shareRoute from "./views/share/ShareRoute";

import profileRoutes from "./views/account/ProfileRoutes";

import searchBarRoute from "./views/search/SearchBarRoute";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/analytics" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...materialRoutes,
  ...nonprofitsRoutes,
  ...aboutRoutes,
  ...utilitiesRoutes,
  ...SurveyRoute,
  ...formsRoutes,
  ...shareRoute,
  ...redirectRoute,
  ...profileRoutes,
  ...searchBarRoute,
  ...errorRoute
];

export default routes;
