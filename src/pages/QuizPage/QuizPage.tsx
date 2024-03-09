import styles from './QuizPage.module.scss';
import ContentWrapper from '../../components/Wrappers/ContentWrapper/ContentWrapper.tsx';
import Loader from '../../components/UI/Loader/Loader.tsx';
import useQuizPage from './useQuizPage.ts';
import WinningComponent from '../../components/WinningComponent/WinningComponent.tsx';
import QuestionsComponents from '../../components/QuestionsComponent/QuestionsComponents.tsx';
import Popup from '../../components/UI/Popup/Popup.tsx';
import IconWrapper from '../../components/Wrappers/IconWrapper/IconWrapper.tsx';
import MenuIcon from '../../components/Icons/MenuIcon.tsx';

interface QuizPageProps {
    isMobileLayout: boolean;
    setTotalWinning: (winning: string) => void;
}

function QuizPage({ isMobileLayout, setTotalWinning }: QuizPageProps) {
  const {
    answer,
    error,
    winningSumArr,
    options,
    selectedQuestion,
    isLoading,
    question,
    winningSum,
    currentQuestionIndex,
    isHamburgerOpened,
    onOpenHamburgerClick,
    onCloseHamburgerClick,
    onAnswerClick,
  } = useQuizPage(setTotalWinning);

  if (error) {
    return <h1 className={styles.Error}>{error}</h1>;
  }

  const isPopupVisible = isMobileLayout && isHamburgerOpened;

  return (
    <ContentWrapper>
      {
                isLoading ? <Loader /> : (
                  <div className={styles.Wrapper}>
                    {
                            isMobileLayout && (
                            <IconWrapper onClick={onOpenHamburgerClick}>
                              <MenuIcon />
                            </IconWrapper>
                            )
                        }

                    <QuestionsComponents
                      question={question}
                      selectedQuestion={selectedQuestion}
                      options={options}
                      onAnswerClick={onAnswerClick}
                      answer={answer}
                    />
                    <WinningComponent
                      winningSum={winningSum}
                      winningSumArr={winningSumArr}
                      currentQuestionIndex={currentQuestionIndex}
                    />

                    {
                            isPopupVisible && (
                            <Popup onCloseClick={onCloseHamburgerClick}>
                              <WinningComponent
                                className={styles.PopupWinningBlock}
                                winningSum={winningSum}
                                winningSumArr={winningSumArr}
                                currentQuestionIndex={currentQuestionIndex}
                              />
                            </Popup>
                            )
                        }
                  </div>
                )
            }
    </ContentWrapper>
  );
}

export default QuizPage;
