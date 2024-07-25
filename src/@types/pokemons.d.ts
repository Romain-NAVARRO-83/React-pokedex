export type Root = Root2[];

export interface IPokemons {
  id: number;
  name: string;
  hp: number;
  atk: number;
  def: number;
  atk_spe: number;
  def_spe: number;
  speed: number;
  types: Type[];
  teams: Team[];
}

export interface Type {
  id: number;
  name: string;
  color: string;
  pokemon_type: PokemonType;
}

export interface PokemonType {
  pokemon_id: number;
  type_id: number;
}

export interface Team {
  id: number;
  name: string;
  description: string;
  team_pokemon: TeamPokemon;
}

export interface TeamPokemon {
  pokemon_id: number;
  team_id: number;
}
