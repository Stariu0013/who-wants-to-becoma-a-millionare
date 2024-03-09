import * as React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void;
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button type="button" {...rest} className={styles.Button}>
      {children}
    </button>
  );
}

export default Button;
