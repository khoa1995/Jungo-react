import React, {Component} from 'react';
import './BurgerIngredients.scss'
import PropTypes from 'prop-types'

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;
        const type = this.props.type;
        if (type === 'bread-bottom') {
            ingredient = <div className="bread-bottom"></div>
        }else if (type === 'bread-top') {
            ingredient = <div className="bread-top"></div>
        }else if (type === 'meat') {
            ingredient = <div className="meat"></div>
        }else if (type === 'cheese') {
            ingredient = <div className="cheese"></div>
        }else if (type === 'salad') {
            ingredient = <div className="salad"></div>
        }else {
            ingredient = null;
        }
        return ingredient;
    }

}
BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}
export default BurgerIngredients

