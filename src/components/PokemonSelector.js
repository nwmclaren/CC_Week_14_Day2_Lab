import React from 'react';

const PokemonSelector = (props) => {
  const options = props.pokemon.map( (pokemon, index) => {
    return <option value={index} key={index}>
    {pokemon.name}
    </option>;
  } )

  function handleChange(event){
    console.log(event.target.value);
    props.onPokemonSelected(event.target.value)
  }

  return (
    <select id="pokemon-selctor" defaultValue="default"
    onChange={handleChange}
    >

    <option disabled value="default">Choose a Pokemon wee man...</option>
    {options}
    </select>

  )
}

export default PokemonSelector;
