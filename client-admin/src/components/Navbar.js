import { useDispatch } from "react-redux";
import { Link, NavLink, redirect, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/actionCreators";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 border-b-2 mb-8">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Admin Panel
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {localStorage.access_token ? (
            <>
              <li>
                <button
                  className="btn btn-warning btn-ghost"
                  onClick={() => {
                    dispatch(logout());
                    navigate('/login')
                  }}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
}
