import { ComponentPropsWithRef, FC } from 'react'

type ButtonSizes = 'small' | 'medium' | 'large'
type ButtonVariant = 'contained'

interface IButton extends ComponentPropsWithRef<'button'> {
  size?: ButtonSizes
  variant?: ButtonVariant
  label: string
  disabled?: boolean
  onClick?: () => void
}

const buttonClasses = {
  base: 'focus:ring-2 focus:outline-none text-sm focus:ring-blue-400 text-white rounded font-secondary uppercase',
  contained: 'bg-primary hover:bg-secondary transition-all',
  disabled: 'pointer-events-none opacity-60',
  large: 'p-4 w-full',
  medium: 'px-6 p-4',
  small: 'p-1'
}

export const Button: FC<IButton> = ({
  size = 'small',
  variant = 'contained',
  label,
  disabled,
  onClick
}) => (
  <button
    type='button'
    className={`${buttonClasses.base} ${buttonClasses[size]} ${buttonClasses[variant]} ${
      disabled ? buttonClasses.disabled : ''
    }`}
    onClick={onClick}
  >
    <span>{label}</span>
  </button>
)
