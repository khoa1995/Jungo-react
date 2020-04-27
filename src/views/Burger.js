import React, { Component } from 'react';
import BurgerView from 'components/Content/BurgerBuilder/BurgerContainer';
import BurgerControl from 'components/Content/BurgerBuilder/BurgerControl/BurgerControl';

const ingredients_prices = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
}
class Burger extends Component {
  state= {
    ingredients: {
      cheese: 0,
      salad: 0,
      meat: 0,
    },
    totalPrice: 3
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
  render() {
    return (
      <div>
        <BurgerView ingredients={this.state.ingredients}/>
        <BurgerControl ingredientAdd ={this.addIngredientHandler}></BurgerControl>
      </div>
    );
  }
}

export default Burger;