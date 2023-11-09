import { lazy } from "react";
const Landing = lazy(() => import("../pages/Landing"));
const Contact = lazy(() => import("../pages/Contact"));

const coreRoutes = [
  {
    path: "/",
    title: "AIOverflow",
    component: Landing,
  },
  {
    path: "/contact",
    title: "Contact",
    component: Contact,
  },
];

const routes = [...coreRoutes];
export default routes;
