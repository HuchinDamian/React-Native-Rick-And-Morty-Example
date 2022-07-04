import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { characterProps } from "../utils/types";

import Characters from "../screens/Characters";
import CharacterDesc from "../screens/CharacterDesc";

type CharacterStackProps = {
  Characters: undefined;
  CharacterDesc: {
    character: characterProps
  };
};

export type CharacterStackScreens = StackNavigationProp<
CharacterStackProps,
 'Characters'
>

const CharacterStack = () => {
  const Stack = createStackNavigator<CharacterStackProps>();

  return (
    <Stack.Navigator initialRouteName="Characters" screenOptions={{headerLeftLabelVisible: false}}>
      <Stack.Screen
        name="Characters"
        component={Characters}
        options={{ title: "Personajes" }}
      />
      <Stack.Screen
        name="CharacterDesc"
        component={CharacterDesc}
        options={({ route }) => ({ title: route.params.character.name })}
      />
    </Stack.Navigator>
  );
};

export default CharacterStack;
