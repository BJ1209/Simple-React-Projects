import { useState } from 'react';
import Card from './Card';
import Data from './Data';
import Modal from './Modal';

function App() {
  const [people, setPeople] = useState(Data);
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState({});

  const deleteCard = (e, id) => {
    e.stopPropagation();
    const newData = people.filter((card) => {
      return card.id !== id;
    });
    setPeople(newData);
  };

  const dataHandler = (id) => {
    const character = people.filter((person) => {
      return person.id === id;
    });
    setData(character);
  };

  return (
    <div className="app">
      {!clicked && (
        <div className="app__container">
          <h3>Top Black Clover Characters</h3>
          <div className="app__cards">
            {people.map(({ id, profilePic, name, magic, occupation }) => (
              <Card
                key={id}
                id={id}
                name={name}
                profilePic={profilePic}
                magic={magic}
                deleteCard={deleteCard}
                clicked={setClicked}
                dataHandler={dataHandler}
                occupation={occupation}
              />
            ))}
          </div>
          <button onClick={() => setPeople([])}>Clear All</button>
        </div>
      )}
      {clicked && <Modal data={data} clicked={setClicked} />}
    </div>
  );
}

export default App;
