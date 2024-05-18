import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center space-y-5">
      <p className=" text-3xl">Intro Page</p>
      <p className=" text-3xl">A Gateway to Login Page</p>
      <Link to="/login">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Go to Login Page
        </button>
      </Link>
    </div>
  );
};

export default Intro;
