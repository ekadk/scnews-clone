import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul className="fixed lg:w-36 2xl:w-64">
      <li>
        <NavLink to={"/"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/posts"}>News</NavLink>
      </li>
      <li>
        <NavLink to={"/categories"}>Categories</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </ul>
  );
}
