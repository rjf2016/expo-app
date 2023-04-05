import { ReactNode } from 'react';
import { Pressable, PressableProps } from 'react-native';

type ButtonProps = PressableProps & {
  children: ReactNode;
};

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Pressable className="select-none" accessibilityRole="button" {...rest}>
      {children}
    </Pressable>
  );
};

export default Button;
