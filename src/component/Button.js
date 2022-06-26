import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className="inline-block font-bold text-center  mr-2 px-6 py-1.5 border-2 border-lime-500 text-lime-500 font-medium text-lg leading-tight skew-x-12 hover:bg-[#14a800] hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {props.children}
    </button>
  );
};

export default Button;
