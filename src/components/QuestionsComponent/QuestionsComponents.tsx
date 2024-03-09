import styles from './QuestionsComponent.module.scss';
import List from '../List/List.tsx';
import QuestionItem from './QuestionItem/QuestionItem.tsx';

interface QuestionsComponentsProps {
    question: string;
    options: string[];
    answer: string;
    selectedQuestion: string;
    onAnswerClick: (answer: string) => void;
}

function QuestionsComponents({
  selectedQuestion,
  question,
  options,
  onAnswerClick,
  answer,
}: QuestionsComponentsProps) {
  return (
    <div className={styles.QuestionBlock}>
      <h1 className={styles.QuestionTitle}>{question}</h1>

      <div className={styles.QuestionAnswers}>
        <List
          items={options}
          renderItem={(item, index) => (
            <QuestionItem
              item={item}
              isCorrect={answer === item}
              isSelected={selectedQuestion === item}
              onAnswerClick={onAnswerClick}
              index={index}
              key={index}
            />
          )}
        />
      </div>
    </div>
  );
}

export default QuestionsComponents;
