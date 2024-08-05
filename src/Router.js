import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing";
import Homepage from "./pages/Homepage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Landing />,
        // index: true,
      },
      {
        element: <Homepage />,
        index: true,
        // path: "/init",
      },
    ],
  },
]);
