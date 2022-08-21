import { useCallback, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import useAuth from '../../hooks/useAuth'
import { getPokemonsFavoriteApi } from '../../api/favorite'

export default function UserData() {
  const { auth, logout } = useAuth()
  const [total, setTotal] = useState(0)

  useFocusEffect(
    useCallback(() => {
      ;(async () => {
        try {
          const response = await getPokemonsFavoriteApi()
          setTotal(response.length)
        } catch (error) {
          setTotal(0)
        }
      })()
    }, [])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${auth.firstname} ${auth.lastname}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstname} ${auth.lastname}`} />
        <ItemMenu title="Username" text={`${auth.username}`} />
        <ItemMenu title="Email" text={`${auth.email}`} />
        <ItemMenu title="Total Favoritos" text={`${total} Pokemons`} />
      </View>
      <View style={styles.btnLogout}>
        <Button title="Desconectarse" onPress={logout} />
      </View>
    </View>
  )
}

function ItemMenu(props) {
  const { title, text } = props
  return (
    <View style={styles.ItemMenu}>
      <Text style={styles.ItemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  ItemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf',
  },
  ItemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    paddingTop: 20,
  },
})
