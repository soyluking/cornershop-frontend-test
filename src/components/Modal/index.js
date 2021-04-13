import { useState, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

/**
 * Used for controlling an Modal
 */
const useModal = () => {
  const [isVisible, setIsVisible] = useState(() => false);

  const hideModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  const showModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  return {
    isVisible,
    hideModal,
    showModal,
  };
};

const TRANSITION_TIMEOUT = 295; // ms

const Modal = ({
  children,
  className = '',
  isVisible,
  onClose,
  onOpen,
  ...rest
}) => {
  const modalContentRef = useRef();

  const handleEntered = () => {
    // modalContentRef.current.focus();

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
      onExited={handleExited}>
      {status => (
        <div
          className={classnames('cs-modal', className)}
          role='dialog'
          aria-labelledby='modal-title'
          aria-modal='true'
          tabIndex='-1'
          {...rest}>
          <div
            className={`cs-modal__backdrop cs-fade-transition cs-fade-${status}`}
          />
          <div
            ref={modalContentRef}
            className={`cs-modal__content cs-modal-slide-transition cs-modal-slide-${status}`}
            tabIndex='-1'
            role='document'>
            {children}
          </div>
        </div>
      )}
    </Transition>,
    document.getElementById('modal-outlet'),
  );
};

const ModalHeader = ({ children, className, ...rest }) => {
  const classes = classnames('cs-modal__header', className);

  return (
    <header className={classes} {...rest}>
      {children}
    </header>
  );
};

const ModalBody = ({ children, className, ...rest }) => {
  const classes = classnames('cs-modal__body', className);

  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
};

const ModalTitle = ({ children, className, ...rest }) => {
  const classes = classnames('cs-modal__title', className);

  return (
    <h2 className={classes} id='modal-title' {...rest}>
      {children}
    </h2>
  );
};

Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;

export default Modal;
export { useModal };
