import Axios from 'services/axios'
import { IApi } from 'interfaces/Api'
import { IPokemon, INameLink, IDexRegister, ISpecie } from 'interfaces/entities'

class Api implements IApi {

  async getDexRegisterOfOnePokemon(link: string): Promise<IDexRegister> {

    let results:IDexRegister = {
      image: '',
      url: '',
      dexNumber: 0
    };

    try {
  
      let req = await Axios.get(link);
      
      let { data } = req
  
      results.image = data.sprites.front_default;
      results.url = data.species.url;
      results.dexNumber = data.id;
  
      
    } catch(err) {
      console.log(err)
    }

    return results;
  }

  async getSpecieOfOnePokemon(link: string): Promise<ISpecie> {
    let results: ISpecie = {
      color: ''
    };

    try {
      let req = await Axios.get(link)
        const { data } = req;
  
        results.color = data.color.name

    } catch(err) {
      console.log(err)
    }

    return results;
  }

  async getListOfAllPokemon(fetche: string): Promise<IPokemon[]> {
    let results:IPokemon[] = [];

    try {
      let res = await Axios.get(fetche)
      const { data } = res

      results = await Promise.all(
        data.results.map(async (poke: INameLink) => {
          
          let dexRegister = await this.getDexRegisterOfOnePokemon(poke.url ?? '');
          let specie = await this.getSpecieOfOnePokemon(dexRegister.url ?? '');
          let leked = this.getLikedPokemonByName(poke.name);
          
          let obj: IPokemon = {
            name: poke.name,
            image: dexRegister.image,
            color: specie.color,
            dexNumber: dexRegister.dexNumber,
            liked: leked
          }
  
          return obj;
        }) 
      )

    } catch(err) {
      console.log(err)
    }

      results.sort((a: IPokemon, b: IPokemon) => {
        return a.dexNumber - b.dexNumber;
      })

      return results;

  }

  getLikedPokemonByName(name: string): boolean {
    let likedPokemonList: string[] = 
    localStorage.getItem('@pokelist:likedPokemonList') ? JSON?.parse( localStorage.getItem('@pokelist:likedPokemonList') ?? '') : [];

    let res = likedPokemonList.find((x: string) => x === name);

    return !!res;
  }

}

export default Api