import { StyleSheet, View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Header(props) {
  const { name, order, image, type } = props

  const color = getColorByPokemonType(type)
  const bgStyles = { backgroundColor: color, ...styles.bgStyles }
  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.images} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  bgStyles: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
    textTransform: 'capitalize',
  },
  order: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  images: {
    width: 250,
    height: 300,
    bottom: 30,
    resizeMode: 'contain',
  },
})
