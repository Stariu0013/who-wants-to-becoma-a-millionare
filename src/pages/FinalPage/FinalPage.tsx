import InfoWrapper from '../../components/Wrappers/InfoWrapper/InfoWrapper.tsx';

interface FinalPageProps {
    winning: string;
}

function FinalPage({ winning }: FinalPageProps) {
  return (
    <InfoWrapper buttonTitle="Try again?">
      <h1>
        Total score:
      </h1>
      <h1>
        {winning}
        {' '}
        earned
      </h1>
    </InfoWrapper>
  );
}

export default FinalPage;
