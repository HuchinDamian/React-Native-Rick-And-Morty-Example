import { createStackNavigator } from "@react-navigation/stack"
import Characters from "../screens/Characters"

const CharacterStack = () => {
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen name="Characters" component={Characters} options={{title: 'Personajes'}}/>
        </Stack.Navigator>
    )

}

export default CharacterStack