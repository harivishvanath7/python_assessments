import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className=" h-screen flex flex-col items-center justify-center space-y-5">
        <h1 className=" text-3xl">Home Page</h1>
        <h1 className=" text-3xl ">You have successfully logged in</h1>
        <Link to="/" className=" text-3xl underline">
          <p>Go back to Intro</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
