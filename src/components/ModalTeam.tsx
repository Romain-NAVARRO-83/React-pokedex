import { useEffect } from 'react';

import teams from '../assets/data/teams.json';
import pokemons from '../assets/data/pokemons.json';
import Sortable from 'sortablejs';

const allPokemons = pokemons;

interface ImodalTeam {
  modalContent: {
    content: string;
    id: number;
  };
  toggleModal: () => void;
}
export default function ModalTeam({ modalContent, toggleModal }: ImodalTeam) {
  useEffect(() => {
    new Sortable(availablePokemons, {
      group: 'shared', // set both lists to same group
      animation: 150,
    });

    new Sortable(teamPokemons, {
      group: 'shared',
      animation: 150,
    });
  });
  // useEffect(() => {
  //   document.title = 'test';
  // }, []);
  const team = teams.find((oneTeam) => oneTeam.id === modalContent.id);
  return (
    <>
      <div className="modal-header flexmaster test">
        <div className="s12 m6 l6">
          <h3>Team {team?.name}</h3>
        </div>
        <div className="s12 m6 l6">
          <p>{team?.description}</p>
        </div>
      </div>
      <div className="modal-body flexmaster">
        <div className="s12 m12 l12">
          <form action="updateTeamName">
            <label htmlFor="new-name">Changer le nom de la team</label>
            <br />
            <input
              type="text"
              name="new-name"
              id="new-name"
              placeholder="Nouveau nom"
            />
            <button type="submit">Ok</button>
          </form>
        </div>
        <div className="s6 m6 l6">
          <h4>Pokemons disponibles</h4>
          <ul id="availablePokemons" className="scrolly">
            {allPokemons.map((pokemon) =>
              !team?.pokemons.includes(pokemon.id) ? (
                <li key={pokemon.id} className="card flexmaster gap glow-blue">
                  <figure className="s2 m2 l2">
                    <img
                      src={`/src/assets/img/${pokemon.id}.webp`}
                      alt={pokemon.name}
                      width={60}
                      height={60}
                    />
                  </figure>
                  <div className="s2 m2 l2">
                    {pokemon.types.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        className={`type${type.name} typebtn`}
                        title={type.name}
                        aria-label={type.name}
                      />
                    ))}
                  </div>
                  <span className="s8 m8 l8">{pokemon.name}</span>
                </li>
              ) : null
            )}
          </ul>
        </div>
        <div className="s6 m6 l6">
          <h4>Pokemons dans la team</h4>
          <form
            action="updateTeamPokemons"
            onSubmit={(e) => {
              e.preventDefault();
              toggleModal();
            }}
          >
            <ul id="teamPokemons" className="scrolly">
              {allPokemons.map((pokemon) =>
                team?.pokemons.includes(pokemon.id) ? (
                  <li
                    key={pokemon.id}
                    className="card flexmaster gap glow-green"
                  >
                    <figure className="s2 m2 l2">
                      <img
                        src={`/src/assets/img/${pokemon.id}.webp`}
                        alt={pokemon.name}
                        width={60}
                        height={60}
                      />
                    </figure>
                    <div className="s2 m2 l2">
                      {pokemon.types.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          className={`type${type.name} typebtn`}
                          title={type.name}
                          aria-label={type.name}
                        />
                      ))}
                    </div>
                    <span className="s8 m8 l8">{pokemon.name}</span>
                  </li>
                ) : null
              )}
            </ul>
            <button type="submit">Valider</button>
          </form>
        </div>
      </div>
    </>
  );
}
