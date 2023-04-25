import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/HomeView";
import DetailView from "../views/DetailView";
import Root from "../components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomeView />
      },
      {
        path: "posts/:id",
        element: <DetailView />
      }
    ]
  }
])

export default router