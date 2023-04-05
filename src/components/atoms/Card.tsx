import { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

type ButtonProps = ViewProps & {
  children: ReactNode;
};

const Card = ({ children, ...rest }: ButtonProps) => {
  return (
    <View
      className="flex flex-col gap-y-2 rounded-lg bg-white shadow-lg p-2 sm:p-4 xl:p-6"
      {...rest}
    >
      {children}
    </View>
  );
};

export default Card;
