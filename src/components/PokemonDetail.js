import React from 'react';

const PokemonDetail = ({pokemon}) => {
  if(!pokemon) return null

  const types = pokemon.types.map((type) =>
  type.type.name + ' ')


  return(
    <div>
      <h3>{pokemon.forms[0].name}</h3>
      <h4>Types: {types}
      </h4>
    </div>
  )
}

export default PokemonDetail;
