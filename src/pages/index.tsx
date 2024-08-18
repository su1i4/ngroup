import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { View, Text } from 'react-native';

import { Companies } from './Companies';
import { DetailCompanies } from './DetailCompanies';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Companies"
          component={Companies}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailCompanies"
          component={DetailCompanies}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
