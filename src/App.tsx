import { setUserProperties } from "firebase/analytics";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { analytics } from "~/firebase/config";

import { router } from "./routes";

export function App() {
  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((v) => v.json())
      .then((v) => setUserProperties(analytics, { ip: v?.ip || "" }));
  }, []);

  return <RouterProvider router={router} />;
}
