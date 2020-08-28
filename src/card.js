import React, { Component } from 'react';
import './card.css';
import ShowDetails from './ShowDetails';
//import Modal from './Modal';


function Card(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isData, setData] = React.useState({});

    const showModal = (event) => {
        setData(JSON.parse(event.target.value));
        setIsOpen(true);
    }

    const hideModal = (childData) => {
        setIsOpen(false);
    }

    return (
        <div className="recipe-card">
            {
                isOpen && <ShowDetails recipe={isData} value={isOpen} parentCallback={hideModal}/>
            }
            
            {/* <Modal value={false} /> */}
            
            <div className="recipe-image">
                <img src={props.recipe.image} />
            </div>
            <div className="recipe-button-container">
                <button id={props.recipe.id} value={JSON.stringify(props.recipe)} onClick={showModal}>View More</button>
            </div>
            <div className="recipe-details">
                <div className="details">
                    {/* <div>{props.recipeid}</div> */}

                    <div className="name">{props.recipe.name}</div>
                    
                    <div className="category">{props.recipe.category}</div>
                    
                    <div className="price" >$ {props.recipe.price}</div>
                    <div className="desc">{props.recipe.description}</div>
                    {
                        props.recipe.label &&
                        <div className="label">{ props.recipe.label}</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;