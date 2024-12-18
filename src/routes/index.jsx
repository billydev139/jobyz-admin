import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import PATHS from "./path";
import { DefaultLayout } from "../components";
import Preloader from "../common/Preloader";
import SignIn from "../pages/auth/SignIn";

// import About from "../pages/About";
import AboutNew from "../pages/About/New";
import AboutOld from "../pages/About/Old";
import Users from "../pages/Home/index";
import Customers from "../components/user-list";
import GetAQuote from "../pages/getAQuote/getAQuote";
import UploadCVData from "../pages/uploadCVData";

const NotFound = lazy(() => import("../pages/NotFound"));

// const routes = [
//   {
//     path: PATHS.index,
//     element: <DefaultLayout />,
//     children: [
//       { path: PATHS.index, element: <SignIn /> },
//       { path: PATHS.home, element: <Home /> },
//       {
//         path: PATHS.about,
//         children: [
//           { path: "new", element: <AboutNew /> },
//           { path: "old", element: <AboutOld /> },
//         ],
//       },
//       { path: PATHS.notFound, element: <NotFound /> },
//     ],
//   },
// ];
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/" replace />;
};
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/users" element={<ProtectedRoute element={<Users />} />} />
        <Route path="/get-a-quote" element={<ProtectedRoute element={<GetAQuote />} />} />
        <Route path="/upload-your-cv" element={<ProtectedRoute element={<UploadCVData />} />} />

        <Route path="/customers" element={<ProtectedRoute element={<Customers />} />} />

        <Route path="/about">
          <Route path="new" element={<AboutNew />} />
          <Route path="old" element={<AboutOld />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
