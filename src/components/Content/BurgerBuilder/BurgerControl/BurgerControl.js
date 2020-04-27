import React from 'react';

import BuildControl from './BuidControl/BuildControl'

const controls = [
    {label: 'cheese', type: 'cheese'},
    {label: 'salad', type: 'salad'},
    {label: 'meat', type: 'meat'},
]

const BurgerControl = (props) => {
    return (
        <div className="burger-control container">
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    type = {ctrl.type}
                    //lấy ingredientAdd từ comp cha dựa theo type trong control
                    add ={()=>props.ingredientAdd(ctrl.type)}/>
            ))}
        </div>
    );
};


export default BurgerControl;
