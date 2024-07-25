import { Link } from 'react-router-dom';
import { Iteam } from '../@types/team';

interface Ipokemon {
  toggleModal: () => void;
  changeModalContent: (content: string, id: number) => void;
  pokemon: {
    id: number;
    name: string;
    hp: number;
    atk: number;
    def: number;
    atk_spe: number;
    def_spe: number;
    speed: number;
    types: {
      id: number;
      name: string;
      color: string;
      pokemon_type: {
        pokemon_id: number;
        type_id: number;
      };
    }[];
    teams: Iteam[];
  };
}
export default function CardPokemon({
  pokemon,
  toggleModal,
  changeModalContent,
}: Ipokemon) {
  return (
    <article className="card l3 m4 s12 cardpokemon">
      <figure className="groundshadow">
        <img
          src={`/src/assets/img/${pokemon.id}.webp`}
          alt={pokemon.name}
          width={100}
          height={100}
          className="pokemon breathover"
          onClick={() => {
            toggleModal();
            changeModalContent('pokemon', pokemon.id);
          }}
        />
      </figure>
      <h3>{pokemon.name} test</h3>
      {/* <p>{JSON.stringify(pokemon)}</p> */}
      <div className="pokemon-types">
        {pokemon.types.map((type) => {
          return (
            <Link
              type="button"
              className={`type${type.name} typebtn`}
              title={type.name}
              aria-label={type.name}
              key={type.id}
              to="/types/:id"
            />
          );
        })}
      </div>
    </article>
  );
}
