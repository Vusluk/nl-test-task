import React from 'react';
import ReactModal from 'react-modal';
import cn from 'classnames';
import s from './index.styl';
// Modal.setAppElement('#root');

const Modal = ({
  children,
  show,
  onClose,
  portalClassName,
  overlayClassName,
  contentClassName,
  bodyOpenClassName,
  htmlOpenClassName
}) => (
  <ReactModal {...{
    isOpen: show,
    onRequestClose: onClose,
    portalClassName,
    overlayClassName: cn(s.overlay, overlayClassName),
    className: cn(s.content, contentClassName),
    bodyOpenClassName,
    htmlOpenClassName: cn(s.htmlOpen, htmlOpenClassName),
    appElement: document.getElementById('root'),
  }}>
    {children}
  </ReactModal>
);

export { Modal }
