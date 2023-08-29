import DashBoard from "./DashBoard";
import CheckoutForm from "./Checkout";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import RegisterUser from "./RegisterUser";
import About from "./About";

import "./styles/common.css";
import address from "../Components/Address";
function Controller() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  //const isLoggedIn = sessionStorage.getItem("isLoggedIn")

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={DashBoard} />
          <ProtectedRoute exact path="/pizza" component={Card} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/RegisterUser" component={RegisterUser} />
          <Route exact path="/checkout" component={address} />
          <Route exact path="/About" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Controller;
