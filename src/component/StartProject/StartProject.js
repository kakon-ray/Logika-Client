import React from "react";
import img from "../../assets/img/startproject.png";
import "./StartProject.css";
import Fade from "react-reveal/Fade";

const StartProject = () => {
  return (
    <div id="startProject">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 container mx-auto px-4 md:px-20 py-8 pt-1">
        <Fade left>
          <div>
            <img src={img} alt="Start Your Project" className="project-img" />
          </div>
        </Fade>
        <Fade right>
          <div className="my-auto sm:pl-5 sm:pt-8">
            <h1 className="text-5xl font-bold text-[#14a800]">
              We Like to Start Your Project With Us
            </h1>
            <p className="text-lg py-2 text-gray-400 font-bold">
              We like to start your project with us. We start your project an
              ddesign dress.We like to start your project with us. We start your
              project an ddesign dress.
            </p>
            <button
              type="button"
              className="inline-block bg-[#14a800] rounded-full font-bold text-center  py-3 px-8 border-2 border-white-500 text-white font-medium text-xs leading-tight bg-[#178a08] hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Get Order
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default StartProject;
