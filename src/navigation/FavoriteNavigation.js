import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoritesScreen from '../screens/Favorites'
import PokemonScreen from '../screens/Pokemon'

const Stack = createNativeStackNavigator()

export function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favoritos',
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}
