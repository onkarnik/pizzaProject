import axios from "axios";
import { getConfig } from "../utils/utils";
const PIZZA_API_BASE_URL="http://localhost:7070/pizza"
const config = getConfig(sessionStorage.getItem("jwtToken"))
class PizzaService{
    

    getPizza(){
        
        return axios.get(PIZZA_API_BASE_URL,config);
    }

    // careatePizza(pizza){
    //     return axios.post(PIZZA_API_BASE_URL,pizza,config);
    // }

    async createPizza(pizza) {
        try {
            const response = await axios.post(PIZZA_API_BASE_URL, pizza, config);
            return response.data;
        } catch (error) {
            console.log("Error response data:", error.response.data);
            console.log("Error response status:", error.response.status);
            throw error;
        }
    }

    getPizzabyId(pizzaId){
        return axios.get(PIZZA_API_BASE_URL + '/' + pizzaId,config);
    }

    deletePizza(pizzaId){
        return axios.delete(PIZZA_API_BASE_URL +'/'+pizzaId,config);
    }
}
export default new PizzaService()