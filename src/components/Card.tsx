import React, { useCallback, useState, useEffect } from 'react';
import { IPokemon } from 'interfaces/entities'
import { SCard, SCardHeader, SCardBody, SCardFooter, placeHolderLoadingImage } from 'styles/card';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { lazyImage } from "utils/lazyImage";
import LazyLoad from "react-lazyload";

// import { Container } from './styles';

const Card: React.FC<IPokemon> = (props) => {
  const { color, dexNumber, image, name, url, liked } = props;
  const [like, setLike] = useState(liked)

  useEffect(() => {
    // lazyImage()
  }, [])

  const handleLikePokemon = useCallback((add: boolean = true) => {
    let storage = JSON.parse( localStorage.getItem('@pokelist:likedPokemonList') ?? '' );

    if(add) {

      storage = storage.filter((x: string) => x !== name);
      setLike(true);
      localStorage.setItem('@pokelist:likedPokemonList', JSON.stringify( [...storage, name ] ));

    } else {

      storage = storage.filter((x: string) => x !== name);
      setLike(false);
      localStorage.setItem('@pokelist:likedPokemonList', JSON.stringify( storage ));
      
    }
  }, [name])

  return (
    <SCard>
      <SCardHeader color={color}>
        <span>{name}</span>
      </SCardHeader>
      <SCardBody color={color}>
        <LazyLoad placeholder={<span className="placeholder"></span>} once>
          <img 
            className="lazy-image" 
            src={image}
            alt={name}
            // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        {/* <span className="placeholder"></span> */}
        </LazyLoad>
      </SCardBody>

      <SCardFooter>
        <div>
          { like ? <AiFillHeart onClick={() => handleLikePokemon(false)} className="likeIcon" /> : <AiOutlineHeart onClick={() => handleLikePokemon(true)} className="likeIcon" /> }
        </div>
        <div>
          #{dexNumber}
        </div>
      </SCardFooter>
    </SCard>
  );
}

export default Card;