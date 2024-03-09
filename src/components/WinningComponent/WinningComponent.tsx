import styles from './WinningComponent.module.scss';
import List from '../List/List.tsx';
import WinningSumItem from './WinningSumItem/WinningSumItem.tsx';

interface WinningComponentProps {
    winningSumArr: string[];
    currentQuestionIndex: number;
    winningSum: string;
    className?: string;
}

function WinningComponent({
  winningSum, winningSumArr, currentQuestionIndex, className,
}: WinningComponentProps) {
  return (
    <div className={[styles.WinningsBlock, className].join(' ')}>
      <List
        items={winningSumArr}
        renderItem={(item, index) => (
          <WinningSumItem
            isPrevItem={index < currentQuestionIndex}
            isActive={item === winningSum}
            item={item}
            key={item}
          />
        )}
      />
    </div>
  );
}

export default WinningComponent;
