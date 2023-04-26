import { useState } from "react";
import { useHistory } from "react-router-dom";

function CharacterForm({ onAddCharacter }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    crew: "",
    devilFruit: "",
    origin: "",
    image: "",
  });
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/charactersData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newCharacter) => {
        onAddCharacter(newCharacter);
      });
    setFormData({
      name: "",
      crew: "",
      devilFruit: "",
      origin: "",
      image: "",
    });
    history.push("/characters");
  }
  return (
    <div className="characterForm">
      <h1>Add More Characters!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Crew:
          <input
            type="text"
            name="crew"
            value={formData.crew}
            onChange={handleChange}
          />
        </label>
        <label>
          Devil Fruit:
          <input
            type="text"
            name="devilFruit"
            value={formData.devilFruit}
            onChange={handleChange}
          />
        </label>
        <label>
          Origin:
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Character</button>
      </form>
    </div>
  );
}

export default CharacterForm;
