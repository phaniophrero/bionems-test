import dashboardIcon from "../images/Dashboard.svg";
import productsIcon from "../images/clipboard.svg";
import mapsIcon from "../images/world.svg";
import reviewsIcon from "../images/users.svg";

const navbarDashboardData = [
  {
    id: "n1",
    name: "Dashboard",
    cName: "dashboard--navbar__link",
    path: "/bionems-admin",
    icon: dashboardIcon,
    hover: true,
  },
  {
    id: "n2",
    name: "Products",
    cName: "dashboard--navbar__link",
    path: "/bionems-admin/productlist",
    icon: productsIcon,
    hover: true,
  },
  {
    id: "n3",
    name: "Users",
    cName: "dashboard--navbar__link",
    path: "/bionems-admin/userlist",
    icon: productsIcon,
    hover: true,
  },
  {
    id: "n4",
    name: "Maps",
    cName: "dashboard--navbar__link",
    path: "#",
    icon: mapsIcon,
    hover: true,
  },
  {
    id: "n5",
    name: "Reviews",
    cName: "dashboard--navbar__link",
    path: "#",
    icon: reviewsIcon,
    hover: true,
  },
  // {
  //   id: "n5",
  //   name: "###",
  //   cName: "dashboard--navbar__link",
  //   path: "#",
  //   hover: true,
  // },
  // {
  //   id: "n6",
  //   name: "###",
  //   cName: "dashboard--navbar__link",
  //   path: "#",
  //   hover: true,
  // },
];

export default navbarDashboardData;
