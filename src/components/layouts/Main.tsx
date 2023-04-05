import { ReactNode } from 'react';
import { View } from 'react-native';

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <View className="flex flex-1 min-h-screen max-w-3xl w-full mx-auto p-1 sm:p-2">
      {children}
    </View>
  );
};

export default Main;
