import React, { Component , useState } from 'react'
import { getConfig } from "../utils/utils";
import PizzaService from './PizzaService';
import axios from 'axios';


const AddPizza = () => {
 
  const [smallPrice, setSmallPrice] = useState("0"); // Initialize the small price
  const [mediumPrice, setMediumPrice] = useState("0");
  const [largePrice, setLargePrice] = useState("0");
  const config = getConfig(sessionStorage.getItem("jwtToken"));
  const [pizzaData, setPizzaData] = useState({
    name: "",
    prices: [
      {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      }
    ],
    image: "",
    category: "",
    description: "",
  });

  

  const handlePostPizza = async () => {
    const url = 'http://localhost:7070/pizza'; // Replace with your API endpoint

    try {
      const response = await axios.post(url, pizzaData, config);
      
      console.log("pizza =>"+ JSON.stringify(pizzaData));

      // Redirect to the admin-pizza page after successful post
      window.location.href = '/admin-pizza';
    } catch (error) {
      console.error('Error posting pizza:', error);
    }
  };
  


  return (
    <div>
    
      <h2>Add Pizza</h2>
      <div>
        <label htmlFor="name">Pizza Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className='form-control'
          value={pizzaData.name}
          onChange={event => setPizzaData({ ...pizzaData, name: event.target.value })}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          className='form-control'
          value={pizzaData.category}
          onChange={event => setPizzaData({ ...pizzaData, category: event.target.value })}
        />
      </div>
      <div>
        <label htmlFor="smallPrice">Small Price:</label>
        <input
          type="number"
          id="smallPrice"
          name="smallPrice"
          className='form-control'
          value={smallPrice}
          onChange={event => setSmallPrice(parseInt(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="mediumPrice">Medium Price:</label>
        <input
          type="number"
          id="mediumPrice"
          name="mediumPrice"
          className='form-control'
          value={mediumPrice}
          onChange={event => setMediumPrice(parseInt(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="largePrice">Large Price:</label>
        <input
          type="number"
          id="largePrice"
          name="largePrice"
          className='form-control'
          value={largePrice}
          onChange={event => setLargePrice(parseInt(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          className='form-control'
          value={pizzaData.image}
          onChange={event => setPizzaData({ ...pizzaData, image: event.target.value })}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          className='form-control'
          value={pizzaData.description}
          onChange={event => setPizzaData({ ...pizzaData, description: event.target.value })}
        />
      </div>
      <button onClick={handlePostPizza}>Add Pizza</button>
    </div>
  );
};

export default AddPizza;









// export default class AddPizza extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             name:"",
//             category:"",
//             prices: {
//                 small: "",
//                 medium: "",
//                 large: ""
//             },
//             image:"",
//             description:""

//         }
//         this.changeTitleHandler = this.changeTitleHandler.bind(this);
//         this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
//         this.changeregularPriceHandler = this.changeregularPriceHandler.bind(this);
//         this.changemediumPriceHandler = this.changemediumPriceHandler.bind(this);
//         this.changelargePriceHandler = this.changelargePriceHandler.bind(this);
//         this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
//         this.chanegePhotoHandler = this.chanegePhotoHandler.bind(this);
//         this.savePizza = this.savePizza.bind(this);

//     }
//     savePizza=(e)=>{
//         e.preventDefault();
//         let pizza = {name:this.state.name, 
//              prices:{
//                 small:this.state.prices.small,
//                 medium:this.state.prices.medium,
//                 large:this.state.prices.large},
//                 category:this.state.category,
//                 image:this.state.image,
//                 description:this.state.description };


//         console.log("pizza =>"+ JSON.stringify(pizza));
//         PizzaService.createPizza(pizza).then(res =>{
//             this.props.history.push("/admin-pizza");
//         });

        

        
        

        
//     }
    

//     changeTitleHandler=(event)=>{
//         this.setState({name: event.target.value});
//     }

//     changeCategoryHandler=(event)=>{
//         this.setState({category: event.target.value});
//     }

//     changeregularPriceHandler = (event) => {
//         this.setState({
//             prices: {
//                 ...this.state.prices,
//                 small: event.target.value
//             }
//         });
//     }

//     changemediumPriceHandler = (event) => {
//         this.setState({
//             prices: {
//                 ...this.state.prices,
//                 medium: event.target.value
//             }
//         });
//     }

//     changelargePriceHandler = (event) => {
//         this.setState({
//             prices: {
//                 ...this.state.prices,
//                 large: event.target.value
//             }
//         });
//     }
    
    

//     changeDescriptionHandler=(event)=>{
//         this.setState({description: event.target.value});
//     }

//     chanegePhotoHandler=(event)=>{
//         this.setState({image: event.target.value});
//     }

//     cancel(){
//         this.props.history.push('/admin-pizza');
//     }

//   render() {
//     return (
//       <div>
//         <CreatePizza/>
//         <h1>Add Pizza Form</h1>
//         <div className="container">
//             <div className='row'>
//                 <div className='card col-md-6 offset-md-3 offset-md-3'>
//                     <h3 className='text-center'>Add Pizza Details</h3>
//                     <div className='card-body'>
//                         <form>
//                             <div className='form-group'>
//                                 <label>Pizza title</label>
//                                 <input placeholder='Pizza Name' name="name" className='form-control'
//                                 value={this.state.name} onChange={this.changeTitleHandler} />
//                             </div>
//                             <div className='form-group'>
//                                 <label>Pizza category</label>
//                                 <input placeholder='category' name="category" className='form-control'
//                                 value={this.state.category} onChange={this.changeCategoryHandler} />
//                             </div>
//                             <div className='form-group'>
//                                 <label>Pizza price</label>
//                                 <input placeholder='small Price' name="small" className='form-control'
//                                 value={this.state.prices.small} onChange={this.changeregularPriceHandler} />

//                                 <input placeholder='medium Price' name="medium" className='form-control'
//                                 value={this.state.prices.medium} onChange={this.changemediumPriceHandler} />

//                                 <input placeholder='large Price' name="large" className='form-control'
//                                 value={this.state.prices.large} onChange={this.changelargePriceHandler} />
//                             </div>
//                             <div className='form-group'>
//                                 <label>Pizza description</label>
//                                 <input placeholder='Description' name="description" className='form-control'
//                                 value={this.state.description} onChange={this.changeDescriptionHandler} />
//                             </div>
//                             <div className='form-group'>
//                                 <label>Pizza Photo</label>
//                                 <input placeholder='Photo' name="Photo" className='form-control'
//                                 value={this.state.Photo} onChange={this.chanegePhotoHandler} />
//                             </div>
//                             <div>
//                             <h1>     </h1><button class="btn btn-success" onClick={this.savePizza}>Add</button><h1>     </h1>
//                             <button class="btn btn-danger" onClick={this.cancel.bind(this)}>Reset</button>

//                             </div>


//                         </form>

//                     </div>


//                 </div>

//             </div>

//         </div>
//       </div>
//     )
//   }
// }
