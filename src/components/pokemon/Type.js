import { StyleSheet, View, Text } from 'react-native'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function type(props) {
  const { types } = props
  return (
    <View style={styles.content}>
      {types.map((item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}
        >
          <Text style={styles.type}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  type: {
    textTransform: 'capitalize',
  },
})
