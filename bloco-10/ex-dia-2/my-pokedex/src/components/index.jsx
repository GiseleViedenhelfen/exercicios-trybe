import React from "react";
import { Component } from "react";

class Card extends Component {
  render() {
    const { pokemons } = this.props;
    return pokemons.map((value) => (
      <section className="container-pokemons" key={value.id}>        
          <p>{value.name}</p>
          <p>{value.type}</p>
          <p>
            {`${value.averageWeight.value} 
          ${value.averageWeight.measurementUnit}`}
          </p>
          <img src={value.image} alt={value.name} />
      </section>
    ));
  }
}
export default Card;
