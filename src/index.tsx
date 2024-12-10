import App from "./app/App";

import { createRoot } from "react-dom/client";
import { InterstateThemeProvider } from "@interstate/components/InterstateThemeProvider";
import { interstateThemeRegistry } from "@interstate/components/InterstateTheming/themes/interstateThemeRegistry";

const container = document.getElementById("root");
createRoot(container!).render(
  <InterstateThemeProvider
    themeName="Interstate"
    applicationName="ids-react-datepicker-poc"
    scopeName="ids-react-datepicker-poc"
    themeRegistries={[interstateThemeRegistry]}
  >
    <App />
  </InterstateThemeProvider>,
);
