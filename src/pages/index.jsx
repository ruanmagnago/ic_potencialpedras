import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import FormDashboard from "./FormsPage";
import { forms } from "../forms";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "/home",
  //   element: <HomePage />,
  // },
  {
    path: "/",
    element: <FormDashboard />,
  },
  ...forms
    .slice()
    .sort((a, b) => a.nome.localeCompare(b.nome))
    .map((form) => ({
      path: form.path,
      element: <form.component />,
    })),
  // ...forms.map((form) => ({
  //   path: form.path,
  //   element: <form.component />,
  // })),
]);

export const Router = () => <RouterProvider router={router} />;
