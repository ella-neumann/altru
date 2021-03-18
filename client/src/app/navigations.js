export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/analytics",
    icon: "dashboard",
  },
  {
    name: "Survey",
    path: "/survey",
    icon: "assignment",
  },
  {
    name: "Survey Results",
    path: "/surveyresults",
    icon: "assignment",
  },
  {
    name: "Nonprofits by SDG",
    path: "/nonprofits",
    icon: "favorite",
    children: [
      {
        name: "No Poverty",
        path: "/nonprofits/no-poverty",
      },
      {
        name: "Zero Hunger",
        path: "/nonprofits/zero-hunger",
      },
      {
        name: "Good Health and Well-Being",
        path: "/nonprofits/good-health",
      },
      {
        name: "Quality Education",
        path: "/nonprofits/quality-education",
      },
      {
        name: "Gender Equality",
        path: "/nonprofits/gender-equality",
      },
      {
        name: "Clean Water and Sanitation",
        path: "/nonprofits/sanitation",
      },
      {
        name: "Affordable and Clean Energy",
        path: "/nonprofits/energy",
      },
      {
        name: "Decent Work and Economic Growth",
        path: "/nonprofits/decent-work",
      },
      {
        name: "Industry, Innovation, and Infrastructure",
        path: "/nonprofits/industry",
      },
      {
        name: "Reduced Inequalities",
        path: "/nonprofits/reduce-inequalities",
      },
      {
        name: "Sustainable Cities and Communities",
        path: "/nonprofits/sustainable-cities",
      },
      {
        name: "Responsible Consumption, and Production",
        path: "/nonprofits/responsible-consumption",
      },
      {
        name: "Climate Action",
        path: "/nonprofits/climate-action",
      },
      {
        name: "Life Below Water",
        path: "/nonprofits/life-below-water",
      },
      {
        name: "Life on Land",
        path: "/nonprofits/life-on-land",
      },
      {
        name: "Peace, Justice, and Strong Institutions",
        path: "/nonprofits/peace",
      },
      {
        name: "Partnerships for Goals",
        path: "/nonprofits/partnerships",
      },
    ],
  },
  {
    name: "Information",
    icon: "info",
    children: [
      {
        name: "About Altru",
        path: "/about/about-altru",
      },
      {
        name: "Rating System",
        path: "/about/rating-process",
      },
      {
        name: "About SDGs",
        path: "/about/sdg",
      },
    ],
  },
  {
    name: "Forms",
    icon: "description",
    children: [
      {
        name: "Basic",
        path: "/forms/basic",
        iconText: "B",
      },
      {
        name: "Editor",
        path: "/forms/editor",
        iconText: "E",
      },
    ],
  },
  {
    name: "Sessions",
    icon: "trending_up",
    children: [
      {
        name: "Sign in",
        iconText: "SI",
        path: "/session/signin",
      },
      {
        name: "Sign up",
        iconText: "SU",
        path: "/session/signup",
      },
      {
        name: "Forgot password",
        iconText: "FP",
        path: "/session/forgot-password",
      },
      {
        name: "Error",
        iconText: "404",
        path: "/session/404",
      },
    ],
  },
  {
    name: "Share",
    icon: "add_location",
    path: "/share/share",
  },
];
