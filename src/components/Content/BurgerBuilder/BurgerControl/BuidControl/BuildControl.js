import React from 'react';

import './BuidControl.scss'

const BuildControl = (props) => {
    return (
        <div className="buid-controller">
            <div className="buid-controller__label">{props.label}</div>
            <div className="btn buid-controller__less">Less</div>
            <div className="btn buid-controller__more"
                //tạo event click lấy prop add từ comp cha là burger control 
                onClick={props.add}>More</div>            
        </div>
    );
};

export default BuildControl;
