import { createBrowserRouter, redirect } from "react-router-dom";

import Root from "../components/Root";
import NewsListView from "../views/NewsListView";
import AddNewsView from "../views/AddNewsView";
import CategoriesView from "../views/CategoriesView";
import DetailsView from "../views/DetailsView";
import AddCategoriesView from "../views/AddCategoriesView";
import UpdateNewsView from "../views/UpdateNewsView";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import UpdateCategoriesView from "../views/UpdateCategoryViews";
import RegisterView from "../views/RegisterView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => {
      let access_token = localStorage.getItem("access_token");
      if (!access_token) {
        return redirect("/login");
      }
      return access_token;
    },
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "register",
        element: <RegisterView />
      },
      {
        path: "posts",
        element: <NewsListView />,
      },
      {
        path: "posts/add",
        element: <AddNewsView />,
      },
      {
        path: "posts/edit/:id",
        element: <UpdateNewsView />,
      },
      {
        path: "posts/:id",
        element: <DetailsView />,
      },
      {
        path: "categories",
        element: <CategoriesView />,
      },
      {
        path: "categories/add",
        element: <AddCategoriesView />,
      },
      {
        path: "categories/edit/:id",
        element: <UpdateCategoriesView />
      },
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
  },
]);

export default router;
