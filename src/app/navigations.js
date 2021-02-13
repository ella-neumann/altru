export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/analytics",
    icon: "dashboard"
  },
  {
    name: "Nonprofits",
    path: "/nonprofits",
    icon: "favorite",
    children: [
      {
        name: "No Poverty",
        path: "/nonprofits/no-poverty"
      },
      {
        name: "Zero Hunger",
        path: "/nonprofits/zero-hunger"
      },
      {
        name: "Good Health and Well-Being",
        path: "/nonprofits/good-health"
      },
      {
        name: "Quality Education",
        path: "/nonprofits/quality-education"
      },
      {
        name: "Gender Equality",
        path: "/nonprofits/gender-equality"
      },
      {
        name: "Clean Water and Sanitation",
        path: "/nonprofits/clean-water"
      },
      {
        name: "Affordable and Clean Energy",
        path: "/nonprofits/clean-energy"
      },
      {
        name: "Decent Work and Economic Growth",
        path: "/nonprofits/decent-work"
      },
      {
        name: "Industry, Innovation, and Infrastructure",
        path: "/nonprofits/industry"
      },
      {
        name: "Reduced Inequalties",
        path: "/nonprofits/reduced-inqualities"
      },
      {
        name: "Sustainable Cities and Communities",
        path: "/nonprofits/nopoverty"
      },
      {
        name: "Responsible Consumption, and Production",
        path: "/nonprofits/responsible-consumption"
      },
      {
        name: "Climate Action",
        path: "/nonprofits/climate-action"
      },
      {
        name: "Life Below Water",
        path: "/nonprofits/life-below-water"
      },
      {
        name: "Life on Land",
        path: "/nonprofits/life-on-land"
      },
      {
        name: "Peace, Justice, and Strong Institutions",
        path: "/nonprofits/peace-justice"
      },
      {
        name: "Partnerships for Goals",
        path: "/nonprofits/partnerships"
      }
    ]
  },
  {
    name: "Nonprofit Rating System",
    icon: "trending_up",
    children:[
      {
        name: "About Altru",
        path: "/about/about-altru",
      },
      {
        name: "Rating System",
        path: "/about/rating-process"
      }
    ]
  },
  {
    name: "Forms",
    icon: "description",
    children: [
      {
        name: "Basic",
        path: "/forms/basic",
        iconText: "B"
      },
      {
        name: "Editor",
        path: "/forms/editor",
        iconText: "E"
      }
    ]
  },
  {
    name: "Drag and Drop",
    icon: "control_camera",
    path: "/others/drag-and-drop"
  },
  {
    name: "Multilevel",
    icon: "trending_up",
    children: [
      {
        name: "Level 1",
        icon: "list",
        children: [
          {
            name: "Item 1",
            path: "/charts/victory-charts",
            iconText: "1"
          },
          {
            name: "Item 2",
            path: "/charts/react-vis",
            iconText: "2"
          },
          {
            name: "Item 3",
            path: "/charts/recharts",
            iconText: "3"
          },
          {
            name: "Item 4",
            path: "/charts/echarts",
            iconText: "4"
          }
        ]
      }
    ]
  },
  {
    name: "Utilities",
    icon: "format_list_bulleted",
    children: [
      {
        name: "Color",
        path: "/utilities/color",
        iconText: "C"
      },
      {
        name: "Spacing",
        path: "/utilities/spacing",
        iconText: "S"
      },
      {
        name: "Typography",
        path: "/utilities/typography",
        iconText: "T"
      },
      {
        name: "Display",
        path: "/utilities/display",
        iconText: "D"
      }
    ]
  },
  {
    name: "Sessions",
    icon: "trending_up",
    children: [
      {
        name: "Sign in",
        iconText: "SI",
        path: "/session/signin"
      },
      {
        name: "Sign up",
        iconText: "SU",
        path: "/session/signup"
      },
      {
        name: "Forgot password",
        iconText: "FP",
        path: "/session/forgot-password"
      },
      {
        name: "Error",
        iconText: "404",
        path: "/session/404"
      }
    ]
  },

  {
    name: "UI Kits",
    icon: "favorite",
    badge: { value: "50+", color: "secondary" },
    children: [
      {
        name: "Auto Complete",
        path: "/material/autocomplete",
        iconText: "A"
      },
      {
        name: "Buttons",
        path: "/material/buttons",
        iconText: "B"
      },
      {
        name: "Checkbox",
        path: "/material/checkbox",
        iconText: "C"
      },
      {
        name: "Dialog",
        path: "/material/dialog",
        iconText: "D"
      },
      {
        name: "Expansion Panel",
        path: "/material/expansion-panel",
        iconText: "E"
      },
      {
        name: "Form",
        path: "/material/form",
        iconText: "F"
      },
      {
        name: "Icons",
        path: "/material/icons",
        iconText: "I"
      },
      {
        name: "Menu",
        path: "/material/menu",
        iconText: "M"
      },
      {
        name: "Progress",
        path: "/material/progress",
        iconText: "P"
      },
      {
        name: "Radio",
        path: "/material/radio",
        iconText: "R"
      },
      {
        name: "Switch",
        path: "/material/switch",
        iconText: "S"
      },
      {
        name: "Slider",
        path: "/material/slider",
        iconText: "S"
      },
      {
        name: "Snackbar",
        path: "/material/snackbar",
        iconText: "S"
      },
      {
        name: "Table",
        path: "/material/table",
        iconText: "T"
      }
    ]
  },

  {
    name: "Map",
    icon: "add_location",
    path: "/map"
  }
];
