import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';


function ShowDetails(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  //setIsOpen(props.value);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    props.parentCallback(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* <button onClick={showModal}>Display Modal</button> */}
      <Modal show={props.value} onHide={hideModal}>
        <Modal.Body>
        <div className="recipe-card with-modal">
          <div className="recipe-image">
                  <img src={props.recipe.image} />
              </div>
          <div className="recipe-details">
                  <div className="details">
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
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button" onClick={hideModal}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default ShowDetails;