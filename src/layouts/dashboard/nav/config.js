// component
import {
  DashboardOutlined,
  LocalShipping,
  PeopleAltOutlined,
} from "@mui/icons-material";
// import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { useEffect } from "react";
import { ROLE_ADMIN } from "src/utils/constants";
import SvgColor from "../../../components/svg-color";
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import ContactEmergencyRoundedIcon from '@mui/icons-material/ContactEmergencyRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

function navConfig() {
  const user = JSON.parse(localStorage.user || "{}");
  const dashboardNavItem = {
    title: "Create a Batch",
    path: "/dashboard/app",
    icon: <DashboardOutlined />,
  };
  const allOrdersNavItem = {
    title: "All Batches",
    path: "/dashboard/all-orders",
    icon: <SchoolIcon />,
  };
  const requestedOrdersNavItem = {
    title: "requested orders",
    path: "/dashboard/requested-orders",
    icon: <ShoppingCartOutlinedIcon />,
  };
  const newOrderRequestNavItem = {
    title: "All Students",
    path: "/dashboard/new-order",
    icon: <LibraryBooksIcon />,
  };
  const allCustomersNavItem = {
    title: "all customers",
    path: "/dashboard/all-customers",
    icon: <PeopleAltOutlined />,
  };
  const deliveriesNavItem = {
    title: "Student Information ",
    path: "/dashboard/deliveries",
    icon: <ImportContactsOutlinedIcon />,
  };
  const studentallNavItem = {
    title: "Student ",
    path: "/dashboard/student",
    icon: <LocalShipping />,
  };
  
  const allstudentdNavItem = {
    title: "All Student",
    path: "/dashboard/student",
    icon: <ContactEmergencyRoundedIcon />,
  };
  const interestedstudentdNavItem = {
    title: "Interested Students",
    path: "/dashboard/student",
    icon: <ContactPageRoundedIcon />,
  };

  let routeConfig = [];
  // All Customers is available only to ADMINS
  if (user.role === ROLE_ADMIN) {
    routeConfig.push(
      dashboardNavItem,
      allOrdersNavItem,
      requestedOrdersNavItem,
      newOrderRequestNavItem,
      allCustomersNavItem,
      deliveriesNavItem,
      allstudentdNavItem,
      interestedstudentdNavItem
    );
  } else {
    routeConfig.push(
      dashboardNavItem,
      allOrdersNavItem,
      newOrderRequestNavItem,
      deliveriesNavItem,
      allstudentdNavItem,
      interestedstudentdNavItem
    );
  }
  return routeConfig;
}

export default navConfig;
