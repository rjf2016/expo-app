import { useState } from 'react';
import { Text } from 'react-native';

import TextInput from '@components/atoms/TextInput';
import Button from '@components/atoms/Button';
import Card from '@components/atoms/Card';

import { greetingMessage } from '@utils/greetingMessage';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card className="text-center mt-40">
      <Text className="text-3xl text-rose-500 font-semi my-3">
        {greetingMessage}
      </Text>
      <TextInput
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        variant="password"
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button className="p-2.5 bg-rose-500 items-center rounded-lg shadow mb-2 hover:bg-rose-600 active:bg-rose-400">
        <Text className="font-semi text-white/95">Login</Text>
      </Button>
      <Text className="font-body my-4">
        {'Dont have an account? '}
        <Text className="font-semi hover:underline text-rose-500">
          {'Sign Up'}
        </Text>
      </Text>
    </Card>
  );
};
export default LoginForm;
