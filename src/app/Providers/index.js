import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "store";

export const Providers = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </ReduxProvider>
  );
};
