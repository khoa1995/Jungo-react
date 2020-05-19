import React, {useState} from 'react';
import './BurgerControl.scss'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

// import BuildControl from './BuidControl/BuildControl'
import {Modal, Button} from 'react-bootstrap';


// const controls = [
//     {label: 'Cheese', type: 'cheese', price: 3},
//     {label: 'Salad', type: 'salad', price: 2},
//     {label: 'Meat', type: 'meat', price: 5},
// ]

const BurgerControl = (props) => {
    let numberIngredients = Object.keys(props.ingredients).map(igkey => {
        let imgKey, price = 0;
        if(igkey === 'cheese') {
            imgKey = 'cheese'
            price = 3
        }
        if(igkey === 'meat') {
            imgKey = 'meat'
            price = 5
        }
        if(igkey === 'salad') {
            imgKey = 'salad'
            price = 2
        }
        const imgUrl = require(`./../../../../assests/image/${imgKey}.png`)
        return (<div className="burger-control__ctrl" key={igkey}>
                <img alt="" src={imgUrl}/>
                <span className="burger-control__ctrl-label">{igkey}<span className="burger-control__ctrl-price">(+${price})</span></span>
                <div className="burger-control__ctrl-button">
                    <button onClick={()=>props.ingredientRemove(igkey)} className="burger-control__ctrl-button-less" disabled={props.disabled[igkey]}>-</button>
                    <span className="burger-control__ctrl-number d-flex align-items-center">{props.ingredients[igkey]}</span>
                    <button onClick={()=>props.ingredientAdd(igkey)} className="burger-control__ctrl-button-plus">+</button>
                </div>               
            </div>)
    })
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const [value, setValue] = useState()
    return (
        <div className="burger-control">
            <div className="burger-control__title">Adds-on</div>
        <div className="burger-control__checkout-list">
            {numberIngredients}
        </div>
        <p className="burger-control__total">Total: <span>{props.price}$</span></p>
        <button onClick={handleShow} className={`btn btn-danger btn-order mt-3 ${!props.purchasable? 'disabled':''}`} disabled={!props.purchasable}>Order Now</button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ml-auto">Thank you!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Please add your phone number, we will call you to confirm !!
            <PhoneInput 
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal> 
        </div>
    );
};


export default BurgerControl;
