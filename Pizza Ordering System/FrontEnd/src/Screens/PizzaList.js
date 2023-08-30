import React, { Component } from 'react'
import PizzaService from './PizzaService';

export default class PizzaList extends Component {
    constructor(props){
        super(props)

        this.state = {
            pizza :[]

        }
        this.addPizza = this.addPizza.bind(this);
        this.editPizza = this.editPizza.bind(this);
        this.deletePizza = this.deletePizza.bind(this);
    }

    editPizza(id){
        this.props.history.push('/upate-pizza/${id}');
    }

    deletePizza(id){
        PizzaService.deletePizza(id).then(res =>{
            this.setState({pizza: this.state.pizza.filter(pizza => pizza.id !== id)});

        
        });
        
    }


    componentDidMount(){
        PizzaService.getPizza().then((res)=>{
            this.setState({pizza:res.data});
        });
    }

    addPizza(){
        this.props.history.push('/add-pizza');
    }
  render() {
    return (
      <div >
            <h1 className='text-center'>Pizza Manager</h1>
            <div>
            <h1>     </h1>
                <button className="btn btn-primary" onClick={this.addPizza}>Add Pizza</button><h1>     </h1>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Pizza id</th>
                            <th>Pizza title</th>
                            <th>Pizza category</th>
                            <th>Price</th>
                            <th>description</th>
                            <th>photo</th>
                            <th>Acton</th>
                            
                            
                            
                        </tr>

                    </thead>

                    <tbody>
                         {
                            this.state.pizza.map(
                                pizza =>
                                <tr key= {pizza.id}>
                                    <td>{pizza.id}</td>
                                    <td>{pizza.name}</td>
                                    <td>{pizza.category}</td>
                                    <td>Small:{pizza.prices[0]?.small}<br/>Medium:{pizza.prices[0]?.medium}<br/>Large:{pizza.prices[0]?.large}</td>
                                    <td>{pizza.description}</td>
                                    <td>{pizza.image}</td>
                                    {/* <td><button class="btn btn-info" onClick={()=>this.editPizza(pizza.id)}>Update</button>  */}
                                    <td><button class="btn btn-danger" onClick={()=>this.deletePizza(pizza.id)}>Delete</button></td>
                                </tr>

                                    

                            )
                         }
                    </tbody>
                </table>
            </div>



      </div>
    )
  }
}
