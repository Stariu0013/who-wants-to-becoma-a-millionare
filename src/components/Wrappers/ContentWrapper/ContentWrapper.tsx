import * as React from 'react';

import styles from './ContentWrapper.module.scss';

interface ContentWrapper {
    children: React.ReactNode
}

function ContentWrapper({ children }: ContentWrapper) {
  return (
    <div className={styles.ContentWrapper}>
      {children}
    </div>
  );
}

export default ContentWrapper;
