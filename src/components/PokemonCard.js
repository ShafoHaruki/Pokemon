import React from "react";
import "./PokemonCard.css";

export default class PokemonCard extends React.Component {
  render() {
    return (
      <div className="PokemonCard">
        <img
          className="CardImage"
          src={require(`../pokemon/${this.props.pokemon.id}.png`)}
          alt="1.png"
        />

        <div className="PokemonInfo">
          <p>{this.props.pokemon.name.english}</p>
          <p className="engName">
            {this.props.pokemon.type.map(type => {
              return type;
            })}
          </p>
          <p>
            {Object.keys(this.props.pokemon.base).map(v => {
              return (
                <p>
                  {v} : {this.props.pokemon.base[v]}
                </p>
              );
            })}
          </p>
        </div>
      </div>
    );
  }
}
