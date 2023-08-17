import DashBoard from "./DashBoard";
import CheckoutForm from "./Checkout";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Controller() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/checkout" component={CheckoutForm} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Controller;
