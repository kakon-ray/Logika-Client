import React, { useEffect, useState } from "react";
import Delivery from "../../Section/Service/Service";
import MetOurTem from "../../Section/MetOurTem/MetOurTem";
import Slider from "../../Slider/Slider";
import useProducts from "../../../Hook/useProducts";
import Product from "../../Product/Product";
import Button from "../../Button";
import Loading from "../../Loading/Loading";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import LightSpeed from "react-reveal/LightSpeed";
import StartProject from "../../StartProject/StartProject";
const Home = () => {
  const [products, setProducts] = useState();

  // limit data load serverside
  useEffect(() => {
    async function fetchFunction() {
      try {
        const response = await fetch(
          `https://still-gorge-24214.herokuapp.com/homeproduct`
        );
        const json = await response.json();
        setProducts(json);
      } catch (err) {
        throw err;
        console.log(err);
      }
    }
    fetchFunction();
  }, []);

  var sectionStyle = {
    backgroundPosition: "50%",
    backgroundImage: `url("https://mdbcdn.b-cdn.net/img/new/slides/146.webp")`,

    height: "500px",
  };

  return (
    <div className="dark:bg-black">
      <Slider></Slider>

      <div className="container  py-8 pt-12">
        <h1 className="text-3xl text-stone-900 font-bold uppercase text-center mx-auto mb-12 dark:text-slate-200">
          Stock Products
        </h1>
        {products?.length === 0 ? (
          <div className="flex justify-center items-center space-x-2">
            <div
              className="
                spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
                  text-lime-500
                "
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 mx-auto px-4 md:px-8 xl:grid-cols-4  gap-5">
            {products?.map((item) => {
              return (
                <React.Fragment key={item._id}>
                  <Zoom>
                    <Product
                      key={item._id}
                      name={item.name}
                      img={item.img}
                      text={item.text}
                      price={item.price}
                      supplierName={item.supplierName}
                      id={item._id}
                      quantity={item.quantity}
                    ></Product>
                  </Zoom>
                </React.Fragment>
              );
            })}
          </div>
        )}

        <LightSpeed>
          <div className="flex justify-center mt-12">
            <Link to="/allinventory">
              <button
                type="button"
                className="inline-block bg-[#14a800] ml-6 rounded-full font-bold text-center  py-3 px-8 border-2 border-white-500 text-white font-medium text-xs leading-tight hover:bg-[#178a08] hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                See All Products
              </button>
            </Link>
          </div>
        </LightSpeed>
      </div>
      <section class=" my-12">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style={sectionStyle}
        >
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            <div class="flex justify-center items-center h-full">
              <div class="text-center text-white px-6 md:px-12">
                <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  The best offer on the market <br />
                  <span>for your business</span>
                </h1>
                <button
                  type="button"
                  class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Delivery></Delivery>

      <MetOurTem></MetOurTem>
      <StartProject />
    </div>
  );
};

export default Home;
