import { Link } from 'react-router-dom';
// import { Iteam } from '../@types/team';

interface Ipokemon {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  setModalContent: React.Dispatch<
    React.SetStateAction<{
      content: string;
      id: number;
    }>
  >;
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
  };
}
export default function CardPokemon({
  pokemon,
  modalState,
  setModalState,
  setModalContent,
}: Ipokemon) {
  function toggleModal() {
    setModalState(!modalState);
  }
  function changeModalContent(newContent: string, newId: number) {
    setModalContent({
      content: newContent,
      id: newId,
    });
  }
  return (
    <article className="card l3 m4 s12 cardpokemon">
      <button
        className="groundshadow"
        type="button"
        onClick={() => {
          toggleModal();
          changeModalContent('pokemon', pokemon.id);
        }}
      >
        <img
          src={`http://romainnavarro.net/oclock/mycdn/pokemon-images/${pokemon.id}.webp`}
          alt={pokemon.name}
          width={100}
          height={100}
          className="pokemon breathover"
        />
      </button>
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
