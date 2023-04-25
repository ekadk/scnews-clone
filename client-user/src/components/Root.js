import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopBanner from "./TopBanner";
export default function Root() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <div className="mx-auto px-24 mt-4">
        <Outlet />
      </div>
    </>
  );
}
