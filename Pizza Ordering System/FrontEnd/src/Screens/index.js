
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
import  RegisterUser from "./RegisterUser";
import AddPizza from "./AddPizza";
import UpdatePizza from "./UpdatePizza";

import './styles/common.css'
import Admin from "./Admin";
function Controller() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn")

  return (
    <>
      <BrowserRouter>
        
        <Navbar/>
        
        <Switch>
          <Route exact path="/" component={DashBoard}/>
          <ProtectedRoute exact path="/pizza" component={Card} />
          <ProtectedRoute exact path="/checkout" component={CheckoutForm} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login}/>
          <Route exact path ="/RegisterUser" component={RegisterUser}/>
          <ProtectedRoute exact path="/admin-pizza" component={Admin} />
          <ProtectedRoute exact path =  "/add-pizza" component={AddPizza}/>
         </Switch>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default Controller;
