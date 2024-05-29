import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>

      <form className="flex flex-col gap-4">
        <input
          className="p-3 border rounded-lg "
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="p-3 border rounded-lg "
          type="text"
          placeholder="email"
          id="email"
        />
        <input
          className="p-3 border rounded-lg "
          type="text"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-700 p-3 text-white rounded-lg hover:opacity-95 disabled:opacity-80">
          Sing Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700 ">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
