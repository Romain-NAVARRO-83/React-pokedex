import CardPokemon from './CardPokemon';

// import pokemons from '../assets/data/pokemons.json';
// import { IPokemons } from '../@types/pokemon';
import { IPokemon } from '../@types/pokemon';

interface IPokemonsProps {
  pokemons: IPokemon[];
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  modalState: boolean;
  pokemon: IPokemon;
  setPokemon: React.Dispatch<React.SetStateAction<IPokemon>>;

  setModalContent: React.Dispatch<
    React.SetStateAction<{
      content: string;
    }>
  >;
}

export default function Pokemons({
  pokemons,
  setModalState,
  modalState,
  setModalContent,
  pokemon,
  setPokemon,
}: IPokemonsProps) {
  return (
    // fonction de changement de pokemon

    <main className="flexmaster gap">
      <h2>Tous les pokemons</h2>
      {pokemons.slice(1).map((onePokemon) => {
        return (
          <CardPokemon
            key={onePokemon.pokedex_id}
            cardPokemon={onePokemon}
            modalState={modalState}
            setModalState={setModalState}
            setModalContent={setModalContent}
            setPokemon={setPokemon}
            pokemon={pokemon}
          />
        );
      })}
    </main>
  );
}
