import React from "react";

const nonprofitsRoutes = [
  {
    path: "/nonprofits/no-poverty",
    component: React.lazy(() => import("./NoPoverty"))
  },
  {
    path: "/nonprofits/partnerships",
    component: React.lazy(() => import("./Partnerships"))
  },
  {
    path: "/nonprofits/zero-hunger",
    component: React.lazy(() => import("./ZeroHunger"))
  },
  {
    path: "/nonprofits/good-health",
    component: React.lazy(() => import("./GoodHealth"))
  },
  {
    path: "/nonprofits/quality-education",
    component: React.lazy(() => import("./QualityEducation"))
  },
  {
    path: "/nonprofits/gender-equality",
    component: React.lazy(() => import("./GenderEquality"))
  },
  {
    path: "/nonprofits/sanitation",
    component: React.lazy(() => import("./Sanitation"))
  },
  {
    path: "/nonprofits/energy",
    component: React.lazy(() => import("./Energy"))
  },
  {
    path: "/nonprofits/decent-work",
    component: React.lazy(() => import("./DecentWork"))
  },
  {
    path: "/nonprofits/industry",
    component: React.lazy(() => import("./Industry"))
  },
  {
    path: "/nonprofits/reduce-inequalities",
    component: React.lazy(() => import("./ReduceInequalities"))
  },
  {
    path: "/nonprofits/sustainable-cities",
    component: React.lazy(() => import("./SustainableCities"))
  },
  {
    path: "/nonprofits/responsible-consumption",
    component: React.lazy(() => import("./ResponsibleConsumption"))
  },
  {
    path: "/nonprofits/climate-action",
    component: React.lazy(() => import("./ClimateAction"))
  },
  {
    path: "/nonprofits/life-below-water",
    component: React.lazy(() => import("./LifeBelowWater"))
  },
  {
    path: "/nonprofits/life-on-land",
    component: React.lazy(() => import("./LifeOnLand"))
  },
  {
    path: "/nonprofits/peace",
    component: React.lazy(() => import("./Peace"))
  },
];

export default nonprofitsRoutes;
