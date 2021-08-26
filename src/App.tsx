import React from 'react';
import usePokemonList from 'hooks/usePokemonList'
import GlobalStyles, { Container } from 'styles/globals'

import { IPokemon } from './interfaces/entities';
import Card from 'components/Card';
import LazyLoad from "react-lazyload";

function App() {
  const { list, isError, isLoading } = usePokemonList();

  console.log(list)

  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        {list?.map((x: IPokemon, key: any) => {
          return (
            <LazyLoad key={key} once>
              <Card 
                liked={x.liked} 
                name={x.name} 
                image={x.image} 
                color={x.color} 
                dexNumber={x.dexNumber}
              />
            </LazyLoad>
          )
        })}
      </Container>
    </div>
  );
}

export default App;
