import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { Provider as ProviderPaper, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './src/navigators/TabNavigator';

import { darkTheme, ligthTheme } from './src/utils/paperThema';

export default function App() {
  const isDark = useColorScheme() === 'dark'
  const theme = isDark ? darkTheme : ligthTheme
  return (
      <ProviderPaper theme={theme}>
        <StatusBar style="auto" translucent={false}/>
        <NavigationContainer theme={theme}>
          <TabNavigator/>
        </NavigationContainer>
      </ProviderPaper>
  );
}
