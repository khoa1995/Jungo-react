import React, { Component } from 'react';
import '../../node_modules/pattern.css'
import BurgerView from 'components/Content/BurgerBuilder/BurgerContainer';
import BurgerControl from 'components/Content/BurgerBuilder/BurgerControl/BurgerControl';

const ingredients_prices = {
  salad: 2,
  cheese: 3,
  meat: 5,
}
class Burger extends Component {
  state= {
    ingredients: {
      cheese: 0,
      salad: 0,
      meat: 0,
    },
    totalPrice: 3,
    orderNow: false, 
  }
  //function add ingredients with type received
  addIngredientHandler = (type) => {
    //get old number of type
    const oldCount = this.state.ingredients[type];
    // update new number of type
    const updatedCount = oldCount + 1;
    //using spread operator to create new ingredient
    const updatedIngredients = {
      ...this.state.ingredients
    }
    // update new number in new ingredient
    updatedIngredients[type] = updatedCount
    const priceAdd = ingredients_prices[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdd;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }
  //function remove ingredients with type received
  removeIngredientHandler = (type) => {
        //get old number of type
        const oldCount = this.state.ingredients[type];
        if(oldCount > 0 ){
        // update new number of type
        const updatedCount = oldCount - 1;
        //using spread operator to create new ingredient
        const updatedIngredients = {
          ...this.state.ingredients
        }
        // update new number in new ingredient
        updatedIngredients[type] = updatedCount
        const priceRemove = ingredients_prices[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceRemove;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        }
  }
  // //function order now
  // orderBurgerHandler () {
  //   const ingredients = {...this.state.ingredients}
  //   // get value = name of ingredients, ex: salad, cheese,...
  //   const sum = Object.keys(ingredients)
  //     .map(igkey => {
  //       return ingredients[igkey]
  //     })
  //     .reduce((sum,el) => {
  //       return sum + el
  //     },0)
  //   this.setState({orderBurgerHandler: sum > 0})
  // }
  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    //check value in loop from zero to updated number for disable
    for(let key in disableInfo){
      //check given key is smaller or equal than zero, return true or false
      disableInfo[key]= disableInfo[key] <= 0
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <BurgerControl 
                ingredientAdd ={this.addIngredientHandler} 
                ingredientRemove ={this.removeIngredientHandler}
                price = {this.state.totalPrice}
                disabled = {disableInfo}>
            </BurgerControl>
          </div>

          <div className="col">
            <BurgerView ingredients={this.state.ingredients}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Burger;