export interface IPokemon extends INameLink, IDexRegister, ISpecie {
  liked?: boolean
}

export interface INameLink {
  name: string,
  url?: string
}

export interface IDexRegister {
  image: string,
  url?: string,
  dexNumber: number
}

export interface ISpecie {
  color: string
}

export interface IType extends INameLink {

}