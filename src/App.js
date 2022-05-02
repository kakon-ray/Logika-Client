import Footer from "./component/Footer/Footer";
import Login from "./component/LoginRegistation/Login/Login";
import Registaion from "./component/LoginRegistation/Registation/Registation";
import Navbar from "./component/Navbar/Navbar";
import Delivery from "./component/Section/Service/Service";
import MetOurTem from "./component/Section/MetOurTem/MetOurTem";
import Slider from "./component/Slider/Slider";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Pages/Home/Home";
import ManageItems from "./component/Pages/ManageItems/ManageItems";
import Blog from "./component/Blog/Blog";
import AddItem from "./component/AddItem/AddItem";
import Update from "./component/Update/Update";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import MyItem from "./component/MyItem/MyItem";
import ServicesPage from "./component/Pages/Services/ServicesPage";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/manageitems/:id" element={<Update></Update>} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="services" element={<ServicesPage></ServicesPage>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="registation" element={<Registaion></Registaion>} />
        <Route
          path="manageitems"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        />
        <Route
          path="myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        />
        <Route
          path="add"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        />
      </Routes>
      <Footer></Footer>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
