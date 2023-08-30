import axios from "axios";
import { getConfig } from "../utils/utils";
const PIZZA_API_BASE_URL="http://localhost:7070/pizza"

const config = getConfig(sessionStorage.getItem("jwtToken"))
class PizzaService{
    

    getPizza(){
        
        return axios.get(PIZZA_API_BASE_URL,config);
    }

    createPizza(pizza){
        return axios.post(PIZZA_API_BASE_URL,pizza,config);
    }

    
    



    getPizzabyId(pizzaId){
        return axios.get(PIZZA_API_BASE_URL + '/' + pizzaId,config);
    }

    deletePizza(pizzaId){
        return axios.delete(PIZZA_API_BASE_URL +'/'+pizzaId,config);
    }
}
export default new PizzaService()