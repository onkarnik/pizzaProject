import React, { Component } from 'react'
import PizzaService from './PizzaService';

export default class AddPizza extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:"",
            category:"",
            prices: {
                small: "",
                medium: "",
                large: ""
            },
            image:"",
            description:""

        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeregularPriceHandler = this.changeregularPriceHandler.bind(this);
        this.changemediumPriceHandler = this.changemediumPriceHandler.bind(this);
        this.changelargePriceHandler = this.changelargePriceHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.chanegePhotoHandler = this.chanegePhotoHandler.bind(this);
        this.savePizza = this.savePizza.bind(this);

    }
    savePizza=(e)=>{
        e.preventDefault();
        let pizza = {name:this.state.name, 
             prices:{
                small:this.state.prices.small,
                medium:this.state.prices.medium,
                large:this.state.prices.large},
                category:this.state.category,
                image:this.state.image,
                description:this.state.description };


        // console.log("pizza =>"+ JSON.stringify(pizza));
        // PizzaService.careatePizza(pizza).then(res =>{
        //     this.props.history.push("/admin-pizza");
        // });

        try {
            const response = PizzaService.createPizza(pizza);
            console.log("Response:", response);
            this.props.history.push("/admin-pizza");
        } catch (error) {
            console.error("Error:", error);
        }


        
    }
    

    changeTitleHandler=(event)=>{
        this.setState({name: event.target.value});
    }

    changeCategoryHandler=(event)=>{
        this.setState({category: event.target.value});
    }

    changeregularPriceHandler = (event) => {
        this.setState({
            prices: {
                ...this.state.prices,
                small: event.target.value
            }
        });
    }

    changemediumPriceHandler = (event) => {
        this.setState({
            prices: {
                ...this.state.prices,
                medium: event.target.value
            }
        });
    }

    changelargePriceHandler = (event) => {
        this.setState({
            prices: {
                ...this.state.prices,
                large: event.target.value
            }
        });
    }
    
    

    changeDescriptionHandler=(event)=>{
        this.setState({description: event.target.value});
    }

    chanegePhotoHandler=(event)=>{
        this.setState({image: event.target.value});
    }

    cancel(){
        this.props.history.push('/admin-pizza');
    }

  render() {
    return (
      <div>
        <h1>Add Pizza Form</h1>
        <div className="container">
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Pizza Details</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Pizza title</label>
                                <input placeholder='Pizza Name' name="name" className='form-control'
                                value={this.state.name} onChange={this.changeTitleHandler} />
                            </div>
                            <div className='form-group'>
                                <label>Pizza category</label>
                                <input placeholder='category' name="category" className='form-control'
                                value={this.state.category} onChange={this.changeCategoryHandler} />
                            </div>
                            <div className='form-group'>
                                <label>Pizza price</label>
                                <input placeholder='small Price' name="small" className='form-control'
                                value={this.state.prices.small} onChange={this.changeregularPriceHandler} />

                                <input placeholder='medium Price' name="medium" className='form-control'
                                value={this.state.prices.medium} onChange={this.changemediumPriceHandler} />

                                <input placeholder='large Price' name="large" className='form-control'
                                value={this.state.prices.large} onChange={this.changelargePriceHandler} />
                            </div>
                            <div className='form-group'>
                                <label>Pizza description</label>
                                <input placeholder='Description' name="description" className='form-control'
                                value={this.state.description} onChange={this.changeDescriptionHandler} />
                            </div>
                            <div className='form-group'>
                                <label>Pizza Photo</label>
                                <input placeholder='Photo' name="Photo" className='form-control'
                                value={this.state.Photo} onChange={this.chanegePhotoHandler} />
                            </div>
                            <div>
                            <h1>     </h1><button class="btn btn-success" onClick={this.savePizza}>Add</button><h1>     </h1>
                            <button class="btn btn-danger" onClick={this.cancel.bind(this)}>Reset</button>

                            </div>


                        </form>

                    </div>


                </div>

            </div>

        </div>
      </div>
    )
  }
}
