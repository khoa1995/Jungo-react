import React from 'react';

import './BuidControl.scss'

const BuildControl = (props) => {
    return (
        <div className="build-controller">
            <div className="build-controller__label">{props.label}</div>
            <button className={`build-controller__less ${props.disabled? 'disabled':''}`} onClick={props.remove} disabled={props.disabled}>Less</button>
            <button className="build-controller__more"
                //tạo event click lấy prop add từ comp cha là burger control 
                onClick={props.add}>More</button>            
        </div>
    );
};

export default BuildControl;
