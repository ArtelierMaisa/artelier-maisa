import { memo } from 'react';

import { Colors, GenericButtonProps, SpinnerColor } from '../../@types';
import { genericButtonHeights } from '../../constants';
import { Spinner, Text } from '../';

function GenericButton(props: GenericButtonProps) {
  const {
    title,
    variant = 'primary',
    type = 'medium',
    isDisabled = false,
    isHugWidth = false,
    isLoading = false,
    onClick,
  } = props;

  const genericButtonSpinnerColors: Record<
    Required<GenericButtonProps>['variant'],
    SpinnerColor
  > = {
    primary: isDisabled ? 'white60' : 'white',
    secondary: isDisabled ? 'primary60' : 'primary',
  };

  const genericButtonTextColors: Record<
    Required<GenericButtonProps>['variant'],
    Colors
  > = {
    primary: isDisabled ? 'white60' : 'white',
    secondary: isDisabled ? 'primary60' : 'primary',
  };

  const genericButtonBackgroundColors: Record<
    Required<GenericButtonProps>['variant'],
    string
  > = {
    primary: isDisabled ? 'bg-primary60' : 'bg-primary',
    secondary: isDisabled ? 'bg-white60' : 'bg-white',
  };

  const width = isHugWidth ? 'w-full' : 'w-auto';
  const cursor = isDisabled ? 'cursor-not-allowed' : 'cursor-pointer';
  const paddingY = `py-${type === 'small' ? 0 : 4}`;
  const focusRingColor = `focus:ring-${variant === 'primary' ? 'primary60' : 'white'}`;
  const focusBorderColor = `focus:border-${variant === 'primary' ? 'primary60' : 'white'}`;

  return (
    <button
      className={`flex ${width} justify-center items-center ${genericButtonHeights[type]} px-6 ${paddingY} ${genericButtonBackgroundColors[variant]} rounded-lg ${cursor} hover:opacity-90 transition-colors duration-300 disabled:hover:opacity-100 focus:outline-none focus:ring ${focusRingColor} ${focusBorderColor}`}
      type='button'
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner size='medium' color={genericButtonSpinnerColors[variant]} />
      ) : (
        <Text
          type='semibold'
          color={genericButtonTextColors[variant]}
          size='xl'
          toCenter
        >
          {title}
        </Text>
      )}
    </button>
  );
}

export default memo(GenericButton);
