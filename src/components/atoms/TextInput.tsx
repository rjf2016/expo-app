import { useState } from 'react';
import {
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import classNames from 'classnames';

export type TextInputProps = RNTextInputProps & {
  error?: boolean;
  errorText?: string;
  inputSize?: 'md' | 'lg';
  onClear?: () => void;
  variant?: 'area' | 'default' | 'search' | 'password';
};

const TextInput = ({
  error,
  errorText,
  inputSize = 'md',
  variant,
  ...rest
}: TextInputProps) => {
  const [passwordRevealed, setPasswordRevealed] = useState(false);

  return (
    <View className="flex flex-1">
      <RNTextInput
        className={classNames(
          'w-full text-black tracking-wide rounded border placeholder:text-gray-400 p-2.5 lg:px-4',
          {
            'bg-error-lightest border-error': error,
            'bg-white border-gray-300': !error,
            'bg-gray-lightest border-gray-light': !error && !rest.editable,
            'text-base': inputSize === 'md',
            'text-lg': inputSize === 'lg',
          }
        )}
        multiline={variant === 'area' ? true : rest.multiline}
        numberOfLines={variant === 'area' ? 5 : rest.numberOfLines}
        secureTextEntry={variant === 'password' ? !passwordRevealed : false}
        textAlignVertical={variant === 'area' ? 'top' : 'auto'}
        {...rest}
      />
      <Text
        className={classNames('my-1 text-xs font-semi text-error', {
          invisible: !error,
          visible: error && errorText,
        })}
      >
        {errorText}
      </Text>
    </View>
  );
};
export default TextInput;
