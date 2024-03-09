import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizGameLinks from './types/quizGameLinks.ts';
import StartPage from './pages/StartPage/StartPage.tsx';

const QuizPageLazy = React.lazy(() => import('./pages/QuizPage/QuizPage.tsx'));
const FinalPageLazy = React.lazy(() => import('./pages/FinalPage/FinalPage.tsx'));
function App() {
  const [totalWinning, setTotalWinning] = useState('0$');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowsResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowsResize);

    return () => {
      window.removeEventListener('resize', handleWindowsResize);
    };
  }, []);

  const isMobileLayout = windowWidth <= 460;

  return (
    <Routes>
      <Route path={QuizGameLinks.HOME} element={<StartPage />} />
      <Route
        path={QuizGameLinks.QUIZ}
        element={<QuizPageLazy isMobileLayout={isMobileLayout} setTotalWinning={setTotalWinning} />}
      />
      <Route path={QuizGameLinks.QUIZ_FINAL} element={<FinalPageLazy winning={totalWinning} />} />
      <Route path={QuizGameLinks.UNKNOWN} element={<StartPage />} />
    </Routes>
  );
}

export default App;
