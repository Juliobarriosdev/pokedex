import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getPokemonsApi, getPokemonDetailsUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonsList'

export default function Pokedex() {
  const [pokemons, setPokemon] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    ;(async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl)
      setNextUrl(response.next)

      const pokemonsArray = []

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsUrlApi(pokemon.url)
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        })
      }

      setPokemon([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  )
}
