import React, { useState } from "react";
import PageBanner from "../../PageBanner/PageBanner";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Registaion = () => {
  const [iserror, setisError] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorupdate] = useUpdateProfile(auth);

  // redirect page
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const createAccount = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const re = new RegExp("^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
    const isOk = re.test(password);

    console.log(isOk);

    if (!isOk) {
      setisError(true);
      return toast.error("Weak!provide strong password");
    }

    alert("You are successfully create account");

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };
  return (
    <div>
      <PageBanner page="Registation in your Account" />
      <section>
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-2/5 lg:w-2/5 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone"
              />
            </div>
            <div className="md:w-2/5 lg:w-2/5 lg:ml-20">
              <form onSubmit={createAccount}>
                <div className="mb-2">
                  <input
                    type="text"
                    name="name"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 border bg-white bg-clip-padding border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none "
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-2">
                  <label className="text-sm text-red-600 pt-0 mt-0">
                    {iserror &&
                      "Password must Upper,Low,Num,special and minimum 8 characters"}
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 border bg-white bg-clip-padding border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none "
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-2">
                  <label className="text-sm text-red-600 pt-0 mt-0">
                    {iserror &&
                      "Password must Upper,Low,Num,special and minimum 8 characters"}
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control block w-full px-4 py-2 text-xl border font-normal text-gray-700 bg-white bg-clip-padding border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none "
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      checked
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 active:text-red-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>

                <Link to="/login">
                  <p className="text-purple-500 text-center pt-4 cursor-pointer">
                    Already have a account! Please Login
                  </p>
                </Link>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <SocialLogin />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registaion;
