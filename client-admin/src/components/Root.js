import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Dna } from "react-loader-spinner";

export default function Root() {
  const { isLoading } = useSelector((state) => {
    return state.rootReducer;
  });
  return (
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <div className="flex flex-1 gap-8">
        <ul className="menu p-4 bg-base-100 text-base-content w-1/5">
          <Sidebar />
        </ul>

        <div className={isLoading ? "hidden" : "w-4/5"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
