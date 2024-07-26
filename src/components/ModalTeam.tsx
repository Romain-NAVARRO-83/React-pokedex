import { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import teams from '../assets/data/teams.json';
import pokemons from '../assets/data/pokemons.json';

const allPokemons = pokemons;

interface ImodalTeam {
  modalContent: {
    content: string;
    id: number;
  };
  toggleModal: () => void;
}

export default function ModalTeam({ modalContent, toggleModal }: ImodalTeam) {
  const availablePokemonsRef = useRef<HTMLUListElement>(null);
  const teamPokemonsRef = useRef<HTMLUListElement>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const availablePokemonsEl = availablePokemonsRef.current;
    const teamPokemonsEl = teamPokemonsRef.current;

    if (availablePokemonsEl && teamPokemonsEl) {
      const sortableAvailable = new Sortable(availablePokemonsEl, {
        group: 'shared',
        animation: 150,
      });

      const sortableTeam = new Sortable(teamPokemonsEl, {
        group: 'shared',
        animation: 150,
      });

      return () => {
        sortableAvailable.destroy();
        sortableTeam.destroy();
      };
    }
  }, []); // Add dependencies if needed

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
          <ul
            id="availablePokemons"
            className="scrolly"
            ref={availablePokemonsRef}
          >
            {allPokemons.map((pokemon) =>
              !team?.pokemons.includes(pokemon.id) ? (
                <li
                  key={pokemon.id}
                  className="card test flexmaster gap glow-blue"
                >
                  <figure className="s2 m2 l2">
                    <img
                      src={`/static/images/${pokemon.id}.webp`}
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
            <ul id="teamPokemons" className="scrolly" ref={teamPokemonsRef}>
              {allPokemons.map((pokemon) =>
                team?.pokemons.includes(pokemon.id) ? (
                  <li
                    key={pokemon.id}
                    className="card flexmaster gap glow-green"
                  >
                    <figure className="s2 m2 l2">
                      <img
                        src={`/static/images/${pokemon.id}.webp`}
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
