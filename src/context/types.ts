import { PokemonDetailProps, TypeName } from '@screens/PokemonDetails/types';
import { ReactNode } from 'react';
import { UseQueryResult } from 'react-query';

//PokemonList
export interface PokemonProviderProps {
  children: ReactNode;
}

export interface IPokemonsContextData {
  pokemons: UseQueryResult<any[], unknown>;
  getMorePokemons: () => void;
  pokemonList: DataPokemonProps[];
}

//Details
export interface PokemonProviderDetailsProps {
  children: ReactNode;
}

export interface IPokemonsDetailsContextData {
  getPokemonDetails(pokemonId: string): Promise<void>;
  pokemonDetails: PokemonDetailProps;
  load: boolean;
  setLoad: (value: boolean) => void;
}

//Favorites
export interface FavoritesProviderProps {
  children: ReactNode;
}

export interface IFavoritesContextData {
  setStorage(value: DataPokemonProps): Promise<void>;
  getStorage(): Promise<void>;
  pokemonList: DataPokemonProps[];
}

export type DataPokemonProps = {
  name: string;
  id: number;
  types: PokemonType[];
};

export type PokemonType = {
  type: {
    name: string;
  };
};

export type PokemonPayloadProps = {
  name: string;
  id: number;
  types: PokemonType[];
  url: string;
};
