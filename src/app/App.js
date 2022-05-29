import React from "react";

import { Router } from "./Router";
import { Providers } from "./Providers";
import { GlobalStyles } from "./globalStyles";

function App() {
  return (
    <Providers>
      <Router />
      <GlobalStyles />
    </Providers>
  );
}

export default App;
