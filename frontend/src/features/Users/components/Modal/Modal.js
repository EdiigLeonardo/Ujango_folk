import React from "react";
import "./Modal.scss";
import imgPerfil from "../../../../assets/Ediig.jpeg";
import cover from "../../../../assets/Ediig.jpeg";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="nav-modal">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
            className="btn btn-light"
          >
            x
          </button>
          <span className="edit-profile-span">Edit Profile</span>
          <button
            className="btn btn-success rounded-pill"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Save Changes
          </button>
        </div>
        <div className="container-imgs">
          <div className="title capa-de-perfil">
            <img src={cover} alt="capa do perfil" id="capa-perfil" />
          </div>
          <div className="profile-photo-content">
            <img src={imgPerfil} alt="capa do perfil" />
          </div>
        </div>
        <div className="text-content">
          <div className="textarea-content">
            <label htmlFor="my-text-area">Bio</label>
            <textarea placeholder="Add Your Bio" id="my-text-area"></textarea>
          </div>
          <label className="form-group" htmlFor="display-name" id="label">
            Display Name
          </label>
          <div className="input-container">
            <input
              type="text"
              className="input-form form-group"
              placeholder="Display Your Name"
              id="display-name"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
