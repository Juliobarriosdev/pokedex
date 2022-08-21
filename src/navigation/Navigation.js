import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { AccountNavigation } from './AccountNavigation'
import { FavoriteNavigation } from './FavoriteNavigation'
import { PokedexNavigation } from './PokedexNavigation'

const Tab = createBottomTabNavigator()

export function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="PokedexNav"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="FavoritesNav"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PokedexNav"
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeBall(),
        }}
      />
      <Tab.Screen
        name="AccountNav"
        component={AccountNavigation}
        options={{
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function renderPokeBall() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  )
}
