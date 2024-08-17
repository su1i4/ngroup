import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Companies from './Companies';
import DetailCompanies from './DetailCompanies';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
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
