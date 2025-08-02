import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StoreProvider from "./redux/StoreProvider";
import { MantineProvider, createTheme } from "@mantine/core";
import QueryProvider from "./lib/QueryProvider";
import { BrowserRouter } from "react-router-dom";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/core/styles.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const theme = createTheme({
  primaryColor: "primary",
  colors: {
    primary: [
      "#EEF0FE", // 0 - lightest
  "#D8DAFC", // 1
  "#C2C3FA", // 2
  "#ABACF8", // 3
  "#9596F5", // 4
  "#7F7FF3", // 5
  "#6366F1", // 6 - base color
  "#5557D0", // 7
  "#4647AF", // 8
  "#38388E", // 9 - darkest
    ],
  },
  components: {
    Button: {
      defaultProps: {
        radius: "md",
        size: "md",
        variant: "gradient", // Apply default gradient to all buttons
      },
    },
  
    ActionIcon: {
      defaultProps: {
        variant: "gradient", // Apply default gradient to all buttons
      },
    },
    Badge: {
      defaultProps: {
        radius: "sm", // Apply default gradient to all buttons
        variant:'light'
      },
    },
Select:{
defaultProps:{
allowDeselect:false
}
},
    TextInput: {
      defaultProps: {
     
      },
   
    },

  },
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <MantineProvider theme={theme}>
          <QueryProvider>
            <ModalsProvider >
              <Notifications position="top-right" limit={5} />
              <NavigationProgress color="primary" size={5} />
              <App />
            </ModalsProvider>
          </QueryProvider>
        </MantineProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
