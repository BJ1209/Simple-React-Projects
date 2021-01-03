import './Modal.css';

const Modal = ({ data }) => {
  const { name, imageUrl, magic, squad, occupation, dialogue } = data[0];
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__nameContainer">
          <h3 className="modal__name">{name}</h3>
        </div>
        <img src={imageUrl} alt={name} />
        <div className="modal__infoContainer">
          <div className="modal__info">
            <h3 className="modal__dialogue">{dialogue}</h3>
            <p className="modal__occupation">{occupation}</p>
            <p className="modal__magic">{magic}</p>
            <p className="modal__squad">{squad}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
