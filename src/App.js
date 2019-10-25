import React from "react";
import "./App.css";
import PokemonCardList from "./components/PokemonCardList";

function App() {
  return (
    <div className="App">
      <h1 className="header">POKEMON</h1>
      <h3 className="subHeader">Gotta catch 'em all!</h3>
      <PokemonCardList />
    </div>
  );
}

export default App;
