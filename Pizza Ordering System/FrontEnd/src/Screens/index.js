
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
import RegisterUserForm  from "./hello";
import './styles/common.css'
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/registerUser" component={RegisterUser}/>
          <Route exact path ="/RegisterUserForm" component={RegisterUserForm}/>
        </Switch>
         <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default Controller;
