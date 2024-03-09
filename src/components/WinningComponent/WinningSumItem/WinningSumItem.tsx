import HexagonItem from '../../HexagonItem/HexagonItem.tsx';

import styles from './WinningSumItem.module.scss';

interface WinningSumItemProps {
    item: string;
    isActive: boolean;
    isPrevItem: boolean;
}

function WinningSumItem({ item, isActive, isPrevItem }: WinningSumItemProps) {
  let titleClassName = '';

  if (isActive) {
    titleClassName = styles.TitleCurrent;
  } else if (isPrevItem) {
    titleClassName = styles.TitlePrev;
  }

  return (
    <HexagonItem iconClassName={styles.Icon} titleClassName={[styles.Title, titleClassName].join(' ')} pathClassName={titleClassName} title={item} />
  );
}

export default WinningSumItem;
