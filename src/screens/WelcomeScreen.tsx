import React from 'react';
import { View } from 'react-native';

import LoginForm from '@components/molecules/LoginForm';

function WelcomeScreen() {
  return (
    <View className="text-center">
      {/* <WelcomeHeader /> */}
      <LoginForm />
    </View>
  );
}
export default WelcomeScreen;
