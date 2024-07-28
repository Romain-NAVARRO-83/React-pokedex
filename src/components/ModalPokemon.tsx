// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { IPokemon, Sprites, Talent, Type } from '../@types/pokemon';
// import pokemons from '../assets/data/pokemons.json';

interface ImodalPokemon {
  pokemon: IPokemon;
}
export default function ModalPokemon({ pokemon }: ImodalPokemon) {
  // console.log(pokemon);
  return (
    <>
      {/* <div
        id="underlay"
        onClick={() => {
          toggleModal();
        }}
      />
      <div id="modal" className={modalState && "active"}> */}
      <div
        className={`modal-header flexmaster test type${pokemon.types[0].name}`}
      >
        <div className="s12 m6 l6">
          <h3>{pokemon?.name.fr}</h3>
          {/* <p>{JSON.stringify(pokemon.types[0].name)}</p> */}
        </div>
        <div className="s12 m6 l6">
          <figure className="groundshadow">
            <img
              src={pokemon.sprites.regular}
              alt=""
              width="150"
              height="150"
              className="pokemon breath"
            />
          </figure>
        </div>
      </div>
      <div className="modal-body flexmaster">
        <div className="s12 m6 l3 pad">
          <h4>Specs</h4>
          <div className={`flexcol specs specs${pokemon.types[0].name}`}>
            {pokemon &&
              Object.entries(pokemon.stats).map(([key, value]) => (
                <label key={key} htmlFor={key}>
                  {key}
                  <progress
                    id="file"
                    value={parseInt(value as string, 10)}
                    max="100"
                  >
                    {JSON.stringify(value)}
                  </progress>
                </label>
              ))}
          </div>
        </div>
        <div className="s12 m6 l3 pad">
          <h4>Types</h4>
          <div className="txtright">
            {pokemon.types.map((type: Type) => (
              <div key={type.name}>
                {type.name}
                <button
                  type="button"
                  className={`type${type.name} typebtn`}
                  title={type.name}
                  aria-label={type.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="s12 m6 l3 pad">
          <h4>Talents</h4>
          <div className="txtright">
            {pokemon.talents?.map((talent: Talent) => (
              <div key={talent.name}>
                {talent.name}
                <span>{talent.tc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="s12 m6 l3 pad flexmaster">
          <h4>Sprites</h4>
          {Object.entries(pokemon.sprites).map(([key, value]) => {
            if (key === 'regular' || key === 'shiny') {
              return (
                <div key={key} className="s12 m1 l4">
                  <img src={value} alt={key} width={75} />
                  <h5>{key}</h5>
                </div>
              );
            }
            return null;
          })}
          {pokemon.sprites.gmax?.regular && (
            <>
              <h5>Gmax</h5>
              <div className="s12 m3 l4">
                <img
                  src={pokemon.sprites.gmax.regular}
                  alt={pokemon.name.fr}
                  width={75}
                />
                <h6>Regular</h6>
              </div>
            </>
          )}

          {pokemon.sprites.gmax?.shiny && (
            <div className="s12 m3 l4">
              <img
                src={pokemon.sprites.gmax.shiny}
                alt={pokemon.name.fr}
                width={75}
              />
              <h6>Regular</h6>
            </div>
          )}
        </div>
        {/* <div className="s12 m6 l3 pad">
          <h4>Teams</h4>
          {JSON.stringify(myPokemon)}
        </div> */}
      </div>
      {/* </div> */}
    </>
  );
}
