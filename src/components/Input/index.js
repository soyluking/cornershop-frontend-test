import { forwardRef } from 'react';
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

const Input = forwardRef(
  (
    {
      className = '',
      label = '',
      id = '',
      size = InputSizeVariant.Regular,
      ...rest
    },
    ref,
  ) => {
    const classes = classnames('cs-input', InputSizeClasses[size], className);

    return (
      <div className='cs-control'>
        {label && (
          <label className='cs-label' htmlFor={id}>
            {label}
          </label>
        )}
        <input className={classes} id={id} ref={ref} {...rest} />
      </div>
    );
  },
);

export default Input;
