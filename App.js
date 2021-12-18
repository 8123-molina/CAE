import React from 'react';
import { NavigationContainer } from '@react-native/native';

import MainStack from './src/stack/MainStack'

export default  () => {
  return(

    <NavigationContainer>
      
      <MainStack></MainStack>

    </NavigationContainer>


  );
}