import React from 'react';
import {View, Text} from 'react-native';
import ProductScreen from '../screens/ProductScreen';
import store from '../redux/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import CartScreen from '../screens/CartScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const StackScreen = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Product"
            component={ProductScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Cart"
            component={CartScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default StackScreen;
