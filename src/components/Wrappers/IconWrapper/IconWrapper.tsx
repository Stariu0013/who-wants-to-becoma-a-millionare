import * as React from 'react';

import styles from './IconWrapper.module.scss';

interface IconWrapperProps {
    onClick: () => void;
    children: React.ReactNode;
}

function IconWrapper({ children, onClick }: IconWrapperProps) {
  return (
    <div role="presentation" onClick={onClick} className={styles.IconWrapper}>
      {children}
    </div>
  );
}

export default IconWrapper;
