import styles from './HexagonItem.module.scss';

import HexagonIcon from '../Icons/HexagonIcon.tsx';

interface HexagonItemProps {
    title: string;
    isHoverNeeded?: boolean;
    iconClassName?: string;
    titleClassName?: string;
    pathClassName?: string;
    onClick?: (title: string) => void;
}

function HexagonItem({
  title, onClick, isHoverNeeded = false, iconClassName, pathClassName, titleClassName,
}: HexagonItemProps) {
  const wrapperClassname = isHoverNeeded ? [styles.Wrapper, styles.Hover].join(' ') : styles.Wrapper;

  return (
    <div role="presentation" className={wrapperClassname} onClick={() => onClick && onClick(title)}>
      <div className={styles.ImageWrapper}>
        <HexagonIcon className={iconClassName} pathClassName={pathClassName} />
        <div className={[styles.Title, titleClassName].join(' ')} dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
  );
}

export default HexagonItem;
