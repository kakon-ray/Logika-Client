import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Loading from "../Loading/Loading";

const Product = ({
  name,
  price,
  text,
  img,
  btnText,
  btnLink,
  supplierName,
  id,
  quantity,
}) => {
  return (
    <>
      <div class="mb-6 lg:mb-0">
        <div class="bg-white block rounded-lg shadow-lg">
          <div class="relative overflow-hidden bg-no-repeat bg-cover">
            <img src={img} class="w-full rounded-t-lg" />
            <p>
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
            </p>
            <svg
              class="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style={{ left: 0, bottom: 0 }}
            >
              <path
                fill="#fff"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div class="p-6">
            <div className="flex justify-between">
              <h5 class="text-lg font-bold mb-4 text-center">{name}</h5>
              <p class="text-gray-500 mb-4 text-center">{price}$</p>
            </div>
            <div className="flex justify-center">
              <Link to={`/inventory/${id}`}>
                <button
                  type="button"
                  className="inline-block bg-[#14a800] rounded-full font-bold text-center  py-3 px-8 border-2 border-white-500 text-white font-medium text-xs leading-tight hover:bg-[#178a08] hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Update Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
