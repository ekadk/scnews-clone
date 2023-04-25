import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadingStart, loadingStop, login } from "../store/actions/actionCreators";

export default function LoginView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  function handleFormChange(e) {
    const { name, value } = e.target;
    const newInput = { ...loginForm, [name]: value };
    setLoginForm(newInput);
  }

  function submitLogin(e) {
    e.preventDefault();
    dispatch(loadingStart())
    dispatch(login(loginForm)).then((data) => {
      localStorage.setItem('access_token', data)
      navigate("/");
    }).then(() => {
      dispatch(loadingStop())
    });
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-cover" style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1492&q=80")` 
    }}>
      <div className="card">
      <div className="card-body bg-white">
      <h1 className="text-2xl font-bold text-center">Login Admin</h1>
        <form className="flex flex-col gap-4" onSubmit={submitLogin}>
          <div>
            <label className="label">
              <span className="label-text text-base">Email:</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="eg: johndoe@mail.com"
              className="input input-bordered w-full"
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-base">Password:</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="*****"
              className="input input-bordered w-full"
              onChange={handleFormChange}
            />
          </div>

          <div className="flex justify-end mt-4">
            <button type="submit" className="btn btn-primary btn-wide">
              Login
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
