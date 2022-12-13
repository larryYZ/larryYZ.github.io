import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Project(props){

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="col-md-6 col-lg-4 mb-5">
      <div class="project mx-auto" onClick={handleShow}>
          <img class="img-fluid" src={props.photo} alt="..." />
      </div>
     <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         {props.modalHeading}
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>
      <img class="img-fluid" src={props.photo} alt="..." />
      <p>
        {props.modalBody}
      </p>
     </Modal.Body>
     <Modal.Footer>
      {/* <a href={props.siteLink}>
        {(props.siteLink !== "") && <Button>Visit Site</Button>}
      </a> */}
      <a href={props.githubLink}>
        {(props.githubLink !== "") && <Button>View on GitHub</Button>}
      </a>
      <Button onClick={handleClose}>Close</Button>
     </Modal.Footer>
   </Modal>
   </div>
  );
}
   

export default Project;