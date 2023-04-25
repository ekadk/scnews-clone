import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/actions/actionCreators";

export default function RegisterView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });

  function handleChangeForm(e) {
    const { name, value } = e.target;
    const newInput = { ...registerForm, [name]: value };
    setRegisterForm(newInput);
  }

  function submitRegisterForm(e) {
    e.preventDefault();
    console.log(registerForm);
    dispatch(register(registerForm)).then(() => {
      navigate("/");
    });
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-8">
        Register New Admin
      </h1>
      <div className="flex justify-center">
        <form onSubmit={submitRegisterForm}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleChangeForm}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password:</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="******"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleChangeForm}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone Number:</span>
                </label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="eg: +12345"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleChangeForm}
                />
              </div>

              <div className="form-control w-full max-w-xs mb-8">
                <label className="label">
                  <span className="label-text">Address:</span>
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="eg: Sesame Street 11"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleChangeForm}
                />
              </div>

              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
