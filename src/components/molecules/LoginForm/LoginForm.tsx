import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import TextField from '@components/atoms/TextField';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="mx-auto">
      <Text className="text-3xl font-semi mb-3">Welcome!</Text>
      <TextField
        inputSize="lg"
        placeholder="username"
        onChangeText={(newText) => setUsername(newText)}
      />
      <TextField
        variant="password"
        inputSize="lg"
        placeholder="password"
        onChangeText={(newText) => setPassword(newText)}
      />

      <TouchableOpacity
        activeOpacity={0.5}
        className="p-2.5 bg-rose-500 items-center rounded-lg shadow bg-rose"
      >
        <Text className="font-semi text-white/95">Login</Text>
      </TouchableOpacity>
      <Text className="font-body">
        {'Dont have an account? '}
        <Text className="font-semi underline text-rose-500">{'Sign Up'}</Text>
      </Text>
    </View>
  );
};
export default LoginForm;
