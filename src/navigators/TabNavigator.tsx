import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { useTheme } from "react-native-paper"

import CharacterStack from "./CharacterStack"
import Episodes from "../screens/Episodes"
import Location from "../screens/Locations"

const TabNavigator = () =>{
    const Tab = createBottomTabNavigator()
    const theme = useTheme()

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: keyof typeof MaterialCommunityIcons.glyphMap
  
              if (route.name === 'Characters') {
                iconName = 'human'
              } else if (route.name === 'Episodes') {
                iconName = 'television'
              } else if (route.name === 'Location') {
                iconName = 'earth'
              }
              else iconName = 'head-question'
  
              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.disabled,
            headerShown: false
          })}
        >
            <Tab.Screen name="CharacterStack" component={CharacterStack} options={{title: 'Personajes'}}/>
            <Tab.Screen name="Episodes" component={Episodes} options={{title: 'Episodios'}}/>
            <Tab.Screen name="Location" component={Location} options={{title: 'Locaciones'}}/>

        </Tab.Navigator>
    )
}

export default TabNavigator