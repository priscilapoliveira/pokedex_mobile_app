import { DataPokemonProps } from '@context/types';

export interface FavProps {
  data: DataPokemonProps[];
  collumn?: number;
  horizontal?: boolean;
  loadMorePokemons?: () => void;
  ListFooterComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
}
