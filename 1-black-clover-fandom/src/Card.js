import './Card.css';
const Card = ({ id, profilePic, name, magic, deleteCard, clicked, dataHandler, occupation }) => {
  const clickHandler = () => {
    clicked(true);
    dataHandler(id);
  };

  return (
    <div className="card" onClick={clickHandler}>
      <img src={profilePic} alt={name} />
      <div className="card__info">
        <h3>{name}</h3>
        <p>{occupation}</p>
        <p>{magic}</p>
      </div>
      <span onClick={() => deleteCard(id)}>&times;</span>
    </div>
  );
};

export default Card;
