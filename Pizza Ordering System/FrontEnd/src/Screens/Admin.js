import PizzaList from './PizzaList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddPizza from "./AddPizza";
import UpdatePizza from "./UpdatePizza";
function Admin() {
  
  return (
    <div>
      <Router>
        <div className="container">
          <Switch> 
          <Route path =  "/admin-pizza" component={PizzaList}></Route>
            <Route path =  "/add-pizza" component={AddPizza}></Route>
            <Route path =  "/update-pizza/:id" component={UpdatePizza}></Route>
            <AddPizza/>
          </Switch>
          
        </div>
      </Router>

    </div>
           
  );
}

export default Admin;
