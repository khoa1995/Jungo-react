import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'


const BurgerContainer = (props) => {
    return (
        <div className="burger-container">
            <BurgerIngredients type="bread-top"/>
            <BurgerIngredients type="cheese"/>
            <BurgerIngredients type="salad"/>
            <BurgerIngredients type="meat"/>
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};


export default BurgerContainer;
