import classnames from 'classnames';

import './Button.css';
import { Link } from 'wouter';

const ButtonSizeVariant = {
  Regular: 'regular',
  Big: 'big',
};
const ButtonKindVariant = {
  Regular: 'regular',
  Flat: 'flat',
  Raised: 'raised',
  Icon: 'icon',
  Example: 'example',
};
const ButtonColorVariant = {
  Regular: 'regular',
  Danger: 'danger',
  Warning: 'warning',
  White: 'white',
  Grey: 'grey',
};

const ButtonSizeClasses = {
  [ButtonSizeVariant.Regular]: '',
  [ButtonSizeVariant.Big]: 'cs-button--big',
};
const ButtonKindClasses = {
  [ButtonKindVariant.Regular]: '',
  [ButtonKindVariant.Flat]: 'cs-button--flat',
  [ButtonKindVariant.Raised]: 'cs-button--raised',
  [ButtonKindVariant.Icon]: 'cs-button--icon',
  [ButtonKindVariant.Example]: 'cs-button--example',
};
const ButtonColorClasses = {
  [ButtonColorVariant.Regular]: '',
  [ButtonColorVariant.Danger]: 'cs-button--danger',
  [ButtonColorVariant.Warning]: 'cs-button--warning',
  [ButtonColorVariant.White]: 'cs-button--white',
  [ButtonColorVariant.Grey]: 'cs-button--grey',
};

const Button = ({
  children,
  className = '',
  color = ButtonColorVariant.Regular,
  kind = ButtonKindVariant.Regular,
  size = ButtonSizeVariant.Regular,
  href,
  ...rest
}) => {
  const classes = classnames(
    'cs-button',
    ButtonColorClasses[color],
    ButtonKindClasses[kind],
    ButtonSizeClasses[size],
    className,
  );

  if (href)
    return (
      <Link href={href}>
        <a className={classes} {...rest}>
          <span>{children}</span>
        </a>
      </Link>
    );

  return (
    <button className={classes} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
