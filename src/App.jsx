import "./App.css";
import contacts from "./contacts.json";
import ActorCard from "./components/ActorCard";
import { useState } from "react";

function App() {
  const [actors, setActors] = useState(contacts.slice(0, 5));

  function addRandom() {
    const newActors = [...actors];
    newActors.push(contacts[Math.floor(Math.random() * contacts.length + 1)]);
    return setActors(newActors);
  }

  function sortPoularity() {
    const newActors = [...actors];
    newActors.sort((actorA, actorB) => {
      return actorB.popularity - actorA.popularity;
    });
    return setActors(newActors);
  }

  function sortName() {
    const newActors = [...actors];
    newActors.sort((actorA, actorB) => {
      if (actorA.name > actorB.name) {
        return 1;
      }
      if (actorA.name < actorB.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    return setActors(newActors);
  }

  function deleteActor(actorId) {
    const newActors = actors.filter((actor) => {
      return actorId !== actor.id;
    });
    setActors(newActors);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => addRandom()}>Add Random Contact</button>
      <button onClick={() => sortPoularity()}>Sort by popularity</button>
      <button onClick={() => sortName()}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => {
            return (
              <ActorCard
                key={actor.id}
                actor={actor}
                deleteActor={deleteActor}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
