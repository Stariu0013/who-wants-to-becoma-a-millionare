import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Question } from '../../types/question.ts';
import fetchData from '../../data/fetchData.ts';
import QuizGameLinks from '../../types/quizGameLinks.ts';

function useQuizPage(setTotalWinning: (winning: string) => void) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  let timerId: number | undefined;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [winningSumArr, setWinningSumArray] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const onOpenHamburgerClick = () => setIsHamburgerOpened(true);
  const onCloseHamburgerClick = () => setIsHamburgerOpened(false);

  useEffect(() => {
    setIsLoading(true);

    fetchData().then((data) => {
      const winningSumArr = data.map((el: Question) => el.winning_sum);

      setWinningSumArray(winningSumArr);
      setQuestions(data);
    })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const {
    question = '',
    options = [],
    answer = '',
    winning_sum: winningSum = '',
  } = questions[currentQuestionIndex] || [];

  const onAnswerClick = (supposedAnswer: string) => {
    setSelectedQuestion(supposedAnswer);

    timerId = setTimeout(() => {
      if (supposedAnswer !== answer) {
        navigate(QuizGameLinks.QUIZ_FINAL);

        return;
      }

      setTotalWinning(winningSum);
      setCurrentQuestionIndex((prevState) => prevState + 1);
    }, 2500);
  };

  return {
    isLoading,
    answer,
    error,
    winningSumArr,
    selectedQuestion,
    question,
    options,
    currentQuestionIndex,
    winningSum,
    isHamburgerOpened,
    onOpenHamburgerClick,
    onCloseHamburgerClick,
    onAnswerClick,
  };
}

export default useQuizPage;
