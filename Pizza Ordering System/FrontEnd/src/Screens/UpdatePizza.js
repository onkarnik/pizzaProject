import React, { Component } from 'react'
import PizzaService from './PizzaService';
import AddPizza from './AddPizza';

export default class UpdatePizza extends Component {
    constructor(props){
        super(props)

        this.state = {
            id:this.props.match.params.id,
            Title:"",
            Category:"",
            Price:"",
            Description:"",
            Photo:""

        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.chanegePhotoHandler = this.chanegePhotoHandler.bind(this);
        this.updatePizza = this.updatePizza.bind(this);

    }

    componentDidMount(){
        PizzaService.getPizzabyId(this.state.id).then(res =>{
            let pizza = res.data;
            this.setState({name:pizza.Title, email:pizza.Category, password:pizza.Price, address:pizza.Description,
                role:pizza.Photo})
        })

    }
    updatePizza=(e)=>{
        e.preventDefault();
        let pizza = {name:this.state.Title, email:this.state.Category, password:this.state.Price, address:this.state.Description,
        role:this.state.Photo };
        console.log("pizza =>"+ JSON.stringify(pizza));
        PizzaService.careatePizza(pizza).then(res =>{
            this.props.history.push("/pizza");
        })

    }

    changeTitleHandler=(event)=>{
        this.setState({Title: event.target.value});
    }

    changeCategoryHandler=(event)=>{
        this.setState({Category: event.target.value});
    }

    changePriceHandler=(event)=>{
        this.setState({Price: event.target.value});
    }

    changeDescriptionHandler=(event)=>{
        this.setState({Description: event.target.value});
    }

    chanegePhotoHandler=(event)=>{
        this.setState({Photo: event.target.value});
    }

    cancel(){
        this.props.history.push('/pizza');
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
                                <input placeholder='Title' name="Title" className='form-control'
                                value={this.state.Title} onChange={this.changeTitleHandler} />
                            </div>
                            <div className='form-group'>
                                <label>Pizza category</label>
                                <input placeholder='Category' name="Category" className='form-control'
                                value={this.state.Category} onChange={this.changeCategoryHandler} />
                            </div>
                            <div className='form-group'>
                                <label>Pizza price</label>
                                <input placeholder='Price' name="Price" className='form-control'
                                value={this.state.Price} onChange={this.changePriceHandler} />
                            </div>
                            <div className='form-group'>
                                <label>Pizza description</label>
                                <input placeholder='Description' name="Description" className='form-control'
                                value={this.state.Description} onChange={this.changeDescriptionHandler} />
                            </div>
                            <div className='form-group'>
                                <label>Pizza Photo</label>
                                <input placeholder='Photo' name="Photo" className='form-control'
                                value={this.state.Photo} onChange={this.chanegePhotoHandler} />
                            </div>
                            <div>
                            <h1>     </h1><button class="btn btn-success" onClick={this.updatePizza}>Add</button><h1>     </h1>
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