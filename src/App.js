import React, { Suspense } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Common/Layout";
import routes from "./routes";
import Loader from "./components/Common/Loader";
const Landing = React.lazy(() => import("./pages/Landing"));

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          {routes.map(({ path, component: Component }) => (
            <Route
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
