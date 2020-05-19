import React from 'react';

import './BuidControl.scss'

const BuildControl = (props) => {

    return (
        <div className="build-controller">
            <div className="build-controller__label">{props.label}<span className="build-controller__price">(+${props.price})</span></div>
            <div className="build-controller__btn">
                <button className={`build-controller__less ${props.disabled? 'disabled':''}`} onClick={props.remove} disabled={props.disabled}>-</button>
                <div>{props.ingredients}</div>
                <button className="build-controller__more"
                    //tạo event click lấy prop add từ comp cha là burger control 
                    onClick={props.add}>+</button> 
            </div>           
        </div>
    );
};

export default BuildControl;
