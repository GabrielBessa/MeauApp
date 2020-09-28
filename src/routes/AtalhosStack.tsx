import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PetRegister from '../screens/petRegister';
import { greenHeader } from './stack-util';

const Stack = createStackNavigator();

export default function AtalhosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PetRegister.name}
        component={PetRegister}
        options={greenHeader('Cadastro do Animal')}
      />
    </Stack.Navigator>
  );
}
