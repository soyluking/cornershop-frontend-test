import classnames from 'classnames';

import './Loading.css';

const LoadingKindVariant = {
  Regular: 'regular',
  Absolute: 'absolute',
};

const LoadingKindClasses = {
  [LoadingKindVariant.Regular]: '',
  [LoadingKindVariant.Absolute]: 'cs-loading-spinner--absolute',
};

const Loading = ({ kind = LoadingKindVariant.Absolute }) => {
  const classes = classnames('cs-loading-spinner', LoadingKindClasses[kind]);

  return (
    <div className={classes}>
      <div className='cs-loading-spinner__bouncer'></div>
      <div className='cs-loading-spinner__bouncer'></div>
      <div className='cs-loading-spinner__bouncer'></div>
    </div>
  );
};

export default Loading;
