import { Ipokemons } from './pokemons';

export interface Iteam {
  team: {
    id: number;
    name: string;
    description: string;
    pokemons: Ipokemons;
  };
}
