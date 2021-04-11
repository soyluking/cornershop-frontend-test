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
  label = '',
  size = InputSizeVariant.Regular,
  ...rest
}) => {
  const classes = classnames('cs-input', InputSizeClasses[size], className);

  return (
    <div className='cs-control'>
      {label && <label className='cs-label'>{label}</label>}
      <input className={classes} {...rest} />
    </div>
  );
};

export default Input;
