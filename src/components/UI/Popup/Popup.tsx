import React from 'react';

import styles from './Popup.module.scss';

import IconWrapper from '../../Wrappers/IconWrapper/IconWrapper.tsx';
import CloseIcon from '../../Icons/CloseIcon.tsx';

interface PopupProps {
    children: React.ReactNode;
    onCloseClick: () => void;
}

function Popup({ children, onCloseClick }: PopupProps) {
  return (
    <div className={styles.Popup}>
      <IconWrapper onClick={onCloseClick}>
        <CloseIcon />
      </IconWrapper>
      {children}
    </div>
  );
}

export default Popup;
