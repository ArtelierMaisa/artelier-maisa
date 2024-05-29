import { Colors, GenericButtonProps } from '../../@types';
import { genericButtonHeights } from '../../constants';
import { Text } from '../Text';

export function GenericButton(props: GenericButtonProps) {
  const {
    title,
    variant = 'primary',
    type = 'medium',
    isDisabled = false,
    isHugWidth = false,
    onClick,
  } = props;

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

  return (
    <button
      className={`flex ${width} items-center ${genericButtonHeights[type]} px-6 ${paddingY} ${genericButtonBackgroundColors[variant]} rounded-lg ${cursor} hover:opacity-90 transition-colors duration-300 disabled:hover:opacity-100`}
      type='button'
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={onClick}
    >
      <Text
        type='semibold'
        color={genericButtonTextColors[variant]}
        size='xl'
        toCenter
      >
        {title}
      </Text>
    </button>
  );
}
