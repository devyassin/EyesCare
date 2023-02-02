import React from "react";
import { EyeCare } from "../../assets";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginActions } from "../../store/LoginSlice";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.login.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitFrom = (e) => {
    e.preventDefault();
    if (users && email && password) {
      users.map((user) => {
        if (user.email === email && user.password === password) {
          dispatch(loginActions.login());
          navigate("/Cours");
          console.log("welcome");
        }
      });
    }
    console.log("hello");
  };

  return (
    <form
      onSubmit={submitFrom}
      className="flex flex-col shadow space-y-8 pb-8 px-8 w-full md:w-1/2 items-center rounded-lg DropShadow bg-black-gradient-2 "
    >
      {/* Logo */}
      <div className="flex  flex-col space-y-4 w-full -translate-y-16 items-center">
        <div className="bg-background1  rounded-full p-6">
          <img
            className="w-16 drop-shadow-2xl rounded-full"
            src={EyeCare}
            alt="Logo"
          />
        </div>
        <h1 className="text-3xl font-bold text-gradient">Login</h1>
      </div>

      {/* Email Field */}
      <div className="flex flex-col w-full items-start space-y-3">
        <h1 className="text-xl text-accent1 opacity-80 font-semibold">Email</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pr-8 pl-2 py-2 rounded-lg w-full bg-gray-200 outline-none"
          type="text"
          placeholder="Email"
          required
        />
      </div>
      {/* Password Field */}
      <div className="flex flex-col w-full items-start space-y-3">
        <h1 className="text-xl text-accent1 opacity-80 font-semibold">Password</h1>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="pr-8 pl-2 py-2 w-full rounded-lg bg-gray-200 outline-none"
          type="Password"
          placeholder="Password"
          required
        />
      </div>
      {/* Submit Button */}

      <button
        type="Submit"
        className="text-xl opacity-80 font-semibold drop-shadow-2xl hover:translate-y-1 duration-300
         hover:bg-red-600 bg-red-500 px-6 py-2 rounded-lg w-full"
      >
        Login
      </button>
    </form>
  );
};

export default Form;
