import { useEffect, useRef, useState } from "react";
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPagine, SimplePokemon, Result } from '../interfaces/PokemonInterface';


export const usePokemonPaginate = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([]);

    const nextPagePokemons =  useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

    const loadPokemons = async () =>{
        setIsLoading(true);
        const pokemons = await pokemonApi.get <PokemonPagine>(nextPagePokemons.current);
        nextPagePokemons.current = pokemons.data.next;        
        mapPokemonList(pokemons.data.results)

    }

    const mapPokemonList = (pokemonList:Result[])=>{
        
        const newPokemonList: SimplePokemon[]= pokemonList.map (({name,url})=>{
            
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length-2];
            const picture =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            
            return {id,picture,name,}

        });

        setSimplePokemon([...simplePokemon,...newPokemonList]);
        setIsLoading(false);
    }




    useEffect(() => {
        loadPokemons();
    }, [])

    return {
        isLoading,
        simplePokemon,
        loadPokemons,
    }
}
