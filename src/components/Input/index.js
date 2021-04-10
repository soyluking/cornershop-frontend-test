import classnames from 'classnames';

import './Input.css';

const InputSizeVariant = {
  Regular: 'regular',
  Big: 'big',
};

const InputSizeClasses = {
  [InputSizeVariant.Regular]: '',
  [InputSizeVariant.Big]: 'cs-input--big',
};

const Input = ({
  className = '',
  size = InputSizeVariant.Regular,
  ...rest
}) => {
  const classes = classnames('cs-input', InputSizeClasses[size], className);

  return <input className={classes} {...rest} />;
};

export default Input;
