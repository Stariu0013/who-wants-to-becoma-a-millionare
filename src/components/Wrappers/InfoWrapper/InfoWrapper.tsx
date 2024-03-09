import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import HandImage from '../../../assets/imgs/hand.svg';
import Button from '../../UI/Button/Button.tsx';
import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';

import styles from './InfoWrapper.module.scss';
import BgWrapper from '../BgWrapper/BgWrapper.tsx';
import QuizGameLinks from '../../../types/quizGameLinks.ts';

interface InfoPageProps {
    buttonTitle: string;
    children: React.ReactNode;
}

function InfoWrapper({ buttonTitle, children }: InfoPageProps) {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate(QuizGameLinks.QUIZ);
  };

  return (
    <BgWrapper>
      <ContentWrapper>
        <div className={styles.InfoWrapper}>
          <img className={styles.Image} src={HandImage} alt="HandImage" />
          <div className={styles.TitleBlock}>
            {children}
            <Button onClick={onButtonClick}>{buttonTitle}</Button>
          </div>
        </div>
      </ContentWrapper>
    </BgWrapper>
  );
}

export default InfoWrapper;
