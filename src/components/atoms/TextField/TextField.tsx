import React, { useState } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import classNames from 'classnames';

export type TextFieldProps = TextInputProps & {
  adornment?: JSX.Element | null;
  adornmentPosition?: 'left' | 'right';
  error?: boolean;
  errorText?: string;
  inputSize?: 'md' | 'lg';
  onClear?: () => void;
  variant?: 'area' | 'default' | 'search' | 'password';
};

const TextField = ({
  adornment = null,
  adornmentPosition = 'right',
  editable = true,
  error,
  errorText,
  inputSize = 'md',
  multiline,
  numberOfLines,
  variant,
  ...rest
}: TextFieldProps): JSX.Element => {
  const [passwordRevealed, setPasswordRevealed] = useState(false);

  // const getIcon = (): JSX.Element => {
  //   let icon = <></>;
  //   if (variant === 'search') {
  //     icon = <SearchIcon fill={'gray'} width={24} height={24} />;
  //   }
  //   if (variant === 'password') {
  //     icon = passwordRevealed ? (
  //       <EyeSlashIcon
  //         accessibilityHint="Hide Password"
  //         onPress={() => {
  //           setPasswordRevealed(!passwordRevealed);
  //         }}
  //         color={'gray'}
  //         size={24}
  //       />
  //     ) : (
  //       <EyeIcon
  //         accessibilityHint="Reveal Password"
  //         onPress={() => {
  //           setPasswordRevealed(!passwordRevealed);
  //         }}
  //         color={'gray'}
  //         size={24}
  //       />
  //     );
  //   }
  //   return icon;
  // };

  return (
    <View className="flex justify-between items-center relative">
      {adornmentPosition === 'left' && (
        <View className="absolute inset-y-2.5 left-2.5 flex items-center z-10">
          {adornment ? adornment : ''}
        </View>
      )}
      <TextInput
        className={classNames(
          'w-full text-black tracking-wide rounded-sm border placeholder:text-gray p-2',
          {
            'bg-error-lightest border-error pr-9': error,
            'bg-white border-gray-200': !error,
            'bg-gray-lightest border-gray-light': !error && !editable,
            'text-base': inputSize === 'md',
            'text-lg': inputSize === 'lg',
            'pl-12': adornmentPosition === 'left',
            'pr-8': adornmentPosition === 'right' && !error,
            'pr-14': adornmentPosition === 'right' && error,
          }
        )}
        editable={editable}
        multiline={variant === 'area' ? true : multiline}
        numberOfLines={variant === 'area' ? 5 : numberOfLines}
        secureTextEntry={variant === 'password' ? !passwordRevealed : false}
        textAlignVertical={variant === 'area' ? 'top' : 'auto'}
        {...rest}
      />
      {adornmentPosition === 'right' && (
        <View
          className={classNames('absolute inset-y-2.5 flex items-center', {
            'right-4': !error,
            'right-6 pr-2': error,
          })}
        >
          {adornment ? adornment : ''}
        </View>
      )}

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
export default TextField;
