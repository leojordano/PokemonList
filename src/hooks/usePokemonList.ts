import { IPokemon } from 'interfaces/entities';
import { IUsePokemonList } from 'interfaces/hooks'
import useSWR from 'swr';
import Api from 'services/api'

function usePokemonList (): IUsePokemonList  {
  const api = new Api();
  const fetcher = (url: string) => api.getListOfAllPokemon(url);
  const { data, error } = useSWR("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151", fetcher)

  return {
    list: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default usePokemonList;