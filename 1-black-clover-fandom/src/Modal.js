import { useEffect, useRef } from 'react';
import './Modal.css';

const Modal = ({ data, clicked }) => {
  const modalRef = useRef();

  useEffect(() => {
    const modalHandler = (e) => {
      if (e.target === modalRef.current) {
        clicked(false);
      }
    };
    window.addEventListener('click', modalHandler);
    return () => window.removeEventListener('click', modalHandler);
  }, [clicked]);

  useEffect(() => {
    const modalHandler = (e) => {
      if (e.key === 'Escape') {
        clicked(false);
      }
    };
    window.addEventListener('keydown', modalHandler);
    return () => window.removeEventListener('keydown', modalHandler);
  }, [clicked]);
  const { name, imageUrl, magic, squad, occupation, dialogue } = data[0];
  return (
    <div className="modal" ref={modalRef}>
      <div className="modal__container">
        <span onClick={() => clicked(false)}>&times;</span>
        <div className="modal__nameContainer">
          <h3 className="modal__name">{name}</h3>
        </div>
        <img src={imageUrl} alt={name} />
        <div className="modal__infoContainer">
          <div className="modal__info">
            <h3 className="modal__dialogue">{dialogue}</h3>
            <p className="modal__occupation">
              Occupation: {occupation}, {squad}
            </p>
            <p className="modal__magic">Attribute: {magic}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
