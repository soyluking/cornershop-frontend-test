import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

import './Alert.css';

/**
 * Used for controlling an Alert
 */
const useAlert = () => {
  const [isVisible, setIsVisible] = React.useState(() => false);

  const hideAlert = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  const showAlert = React.useCallback(() => {
    setIsVisible(true);
  }, []);

  return {
    isVisible,
    hideAlert,
    showAlert,
  };
};

const TRANSITION_TIMEOUT = 195; // ms

const Alert = ({ children, className = '', isVisible, onClose, onOpen, ...rest }) => {
  const alertContentRef = React.useRef();

  const handleEntered = () => {
    alertContentRef.current.focus();

    typeof onOpen === 'function' && onOpen();
  };

  const handleExited = () => {
    typeof onClose === 'function' && onClose();
  };

  return ReactDOM.createPortal(
    <Transition
      in={isVisible}
      timeout={TRANSITION_TIMEOUT}
      mountOnEnter
      unmountOnExit
      onEntered={handleEntered}
      onExited={handleExited}
    >
      {(status) => (
        <div
          className={classnames('cs-alert', className)}
          role="dialog"
          aria-labelledby="alert-title"
          aria-modal="true"
          tabIndex="-1"
          {...rest}
        >
          <div className={`cs-alert__backdrop cs-fade-transition cs-fade-${status}`} />
          <div
            ref={alertContentRef}
            className={`cs-alert__content cs-alert-slide-transition cs-alert-slide-${status}`}
            tabIndex="-1"
            role="document"
          >
            {children}
          </div>
        </div>
      )}
    </Transition>,
    document.getElementById('alert-outlet')
  );
};

// Allowed Child Components

const AlertActions = ({ children, className, ...rest }) => {
  const classes = classnames('cs-alert__actions', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

const AlertMessage = ({ children, className, ...rest }) => {
  const classes = classnames('cs-alert__message', className);

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};

const AlertTitle = ({ children, className, ...rest }) => {
  const classes = classnames('cs-alert__title', className);

  return (
    <h2 className={classes} id="alert-title" {...rest}>
      {children}
    </h2>
  );
};

Alert.Actions = AlertActions;
Alert.Message = AlertMessage;
Alert.Title = AlertTitle;

export default Alert;
export { useAlert };
