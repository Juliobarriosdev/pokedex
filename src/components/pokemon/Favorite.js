import { useState, useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  isPokemonFavoriteApi,
  addPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from '../../api/favorite'

export default function Favorite(props) {
  const { id } = props
  const [isFavorite, setIsFavorite] = useState(undefined)
  const [reloadCheck, setReloadCheck] = useState(false)
  const Icon = isFavorite ? FontAwesome : FontAwesome5

  useEffect(() => {
    ;(async () => {
      try {
        const response = await isPokemonFavoriteApi(id)
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false)
      }
    })()
  }, [id, reloadCheck])

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev)
  }

  const addFavorites = async () => {
    try {
      await addPokemonFavoriteApi(id)
      // setIsFavorite(true)
      onReloadCheckFavorite()
    } catch (error) {
      console.log(error)
    }
  }

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id)
      setIsFavorite(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        onPress={isFavorite ? removeFavorite : addFavorites}
        style={{ marginRight: 20 }}
      />
    </>
  )
}
