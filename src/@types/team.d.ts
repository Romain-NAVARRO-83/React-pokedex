import { Ipokemons } from './pokemon';

export interface Iteam {
  team: {
    id: number;
    name: string;
    description: string;
    pokemons: Ipokemons;
  };
}
