import React from 'react';

import styles from './BgWrapper.module.scss';

interface BGWrapper {
    children: React.ReactNode
}

function BgWrapper({ children }: BGWrapper) {
  return (
    <div className={styles.BgWrapper}>
      {children}
    </div>
  );
}

export default BgWrapper;
