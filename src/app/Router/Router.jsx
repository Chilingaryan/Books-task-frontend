import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./config";

const routesList = Object.values(routes);

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesList.map((route, ind) => {
          // Note: routesList will never be updated, that is why it is okay to use index as a key
          return <Route key={ind} {...route} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
