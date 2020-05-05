import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'


const BurgerContainer = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        //lấy giá trị prop từ comp cha rồi list ra thành từg mảng
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredients key={igKey + i} type= {igKey}/>
            });
        })
        //loại bỏ những object ko có giá trị rồi gộp thành mảng
        .reduce((arr, elm) => {
            return arr.concat(elm)
        },[]);

    // check mảng đó có giá trị không
    if(transformIngredients.length <= 0) {
        transformIngredients = <p className="text-center m-3"><b>Please adding ingredients</b></p>
    }

    return (
        <div className="burger-container">
        <BurgerIngredients type="bread-top"/>
        {transformIngredients}
        <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};


export default BurgerContainer;

