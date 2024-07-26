// import axios from 'axios';
// import { useEffect, useState } from 'react';
import pokemons from '../assets/data/pokemons.json';

interface ImodalPokemon {
  modalContent: {
    content: string;
    id: number;
  };
}
export default function ModalPokemon({ modalContent }: ImodalPokemon) {
  // const [teams, setTeams] = useState([]);
  // useEffect(() => {
  //   const FetchTeams = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/pokemons');

  //       // on recupère les pokemons
  //       const teamsArray = response.data;

  //       // on vire le premier pke c'est le bug avec tout à null
  //       // teamsArray.shift();

  //       // on enregistre les pokemons dans le state
  //       setTeams(teamsArray);
  //     } catch (e) {
  //       console.log('erreur');
  //     }
  //   };
  //   FetchTeams();
  // }, []);
  const myPokemon = pokemons.find((pokemon) => pokemon.id === modalContent.id);
  console.log(myPokemon);
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
        className={`modal-header flexmaster test type${myPokemon?.types[0].name}`}
      >
        <div className="s12 m6 l6">
          <h3>{myPokemon?.name}</h3>
          {/* <p>{JSON.stringify(myPokemon?.types[0].name)}</p> */}
        </div>
        <div className="s12 m6 l6">
          <figure className="groundshadow">
            <img
              src={`/static/images/${modalContent.id}.webp`}
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
          <div className={`flexcol specs specs${myPokemon?.types[0].name}`}>
            {myPokemon &&
              Object.entries(myPokemon).map(
                ([key, value]) =>
                  ['hp', 'atk', 'def', 'speed', 'atk_spe', 'def_spe'].includes(
                    key
                  ) && (
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
                  )
              )}
          </div>
        </div>
        <div className="s12 m6 l3 pad">
          <h4>Types</h4>
          <div className="txtright">
            {myPokemon?.types.map((type) => (
              <div key={type.id}>
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
        {/* <div className="s12 m6 l3 pad">
          <h4>Teams</h4>
          {JSON.stringify(myPokemon)}
        </div> */}
      </div>
      {/* </div> */}
    </>
  );
}
