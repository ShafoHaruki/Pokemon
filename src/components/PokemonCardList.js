import React from "react";
import PokemonCard from "./PokemonCard";

export default class PokemonCardList extends React.Component {
  s;
  constructor(props) {
    super(props);
    this.state = { pokemonData: [] };
  }
  //Below are Pokemon data fetched from server
  componentDidMount() {
    fetch(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then(res => {
        return res.json();
      })
      .then(v => {
        this.setState({ pokemonData: v });
      });
  }

  render() {
    return (
      <div className="Body" style={{ display: "flex", "flex-wrap": "wrap" }}>
        {this.state.pokemonData.map(v => {
          return <PokemonCard pokemon={v} />;
        })}
      </div>
    );
  }
}
