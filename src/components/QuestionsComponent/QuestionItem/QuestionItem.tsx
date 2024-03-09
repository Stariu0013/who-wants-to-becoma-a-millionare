import { useEffect, useState } from 'react';

import styles from './QuestionItem.module.scss';
import answerPrefixes from '../../../consts/answerPrefixes.ts';
import HexagonItem from '../../HexagonItem/HexagonItem.tsx';

interface QuestionItemProps {
    item: string;
    isSelected: boolean;
    isCorrect: boolean;
    index: number;
    onAnswerClick: (answer: string) => void;
}

function QuestionItem({
  item, isCorrect, isSelected, index, onAnswerClick,
}: QuestionItemProps) {
  const [pathClassName, setPathClassName] = useState(styles.Item);

  const answerPrefix = answerPrefixes[index];
  const formattedTitle = `<span>${answerPrefix}</span>. ${item}`;

  let timerId: number | undefined;

  useEffect(() => {
    setPathClassName(styles.Item);

    if (isSelected) {
      setPathClassName(styles.SelectedItem);
    }
  }, [isSelected, isCorrect]);

  useEffect(() => () => {
    clearTimeout(timerId);
  }, [timerId]);

  const onItemClick = () => {
    timerId = setTimeout(() => {
      if (isCorrect) {
        setPathClassName(styles.CorrectItem);
      } else {
        setPathClassName(styles.WrongItem);
      }
    }, 1000);

    onAnswerClick(item);
  };

  return (
    <HexagonItem
      iconClassName={styles.IconClassName}
      titleClassName={styles.Title}
      title={formattedTitle}
      pathClassName={pathClassName}
      isHoverNeeded
      onClick={onItemClick}
    />
  );
}

export default QuestionItem;
