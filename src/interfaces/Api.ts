import { IPokemon, IDexRegister, ISpecie } from './entities'

export interface IApi {
  getListOfAllPokemon: (fetche: string) => Promise<IPokemon[]>

  getDexRegisterOfOnePokemon: (link: string) => Promise<IDexRegister>

  getSpecieOfOnePokemon: (link: string) => Promise<ISpecie>

  getLikedPokemonByName: (name: string) => boolean
}