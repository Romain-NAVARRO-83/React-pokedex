import CardPokemon from './CardPokemon';
import pokemons from '../assets/data/pokemons.json';
// import { IPokemons } from '../@types/pokemons';

interface Ipokemons {
  // pokemons: IPokemons[];
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  modalState: boolean;
  // changeModalContent: (content: string, id: number) => void;
  // modalContent: {
  //   content: string;
  //   id: number;
  // };
  setModalContent: React.Dispatch<
    React.SetStateAction<{
      content: string;
      id: number;
    }>
  >;
}

export default function Pokemons({
  // pokemons,
  setModalState,
  modalState,
  setModalContent,
}: Ipokemons) {
  return (
    <main className="flexmaster gap">
      <h2>Tous les pokemons</h2>
      {pokemons.map((pokemon) => {
        return (
          <CardPokemon
            key={pokemon.id}
            pokemon={pokemon}
            modalState={modalState}
            setModalState={setModalState}
            setModalContent={setModalContent}
          />
        );
      })}
    </main>
  );
}
