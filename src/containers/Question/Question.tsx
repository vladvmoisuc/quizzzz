import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Template from 'containers/Template';

import ContentBox from 'components/ContentBox';

import ROUTES from 'utils/routes';
import { BUTTON_LABEL } from './copy';

import type { Questions, Answers } from 'types';

import styles from './styles.module.scss';

interface QuestionProps {
  questions: Questions;
  answers: Answers;
  setAnswers: (answers: Answers) => void;
}

const Question = ({ questions = [], answers, setAnswers }: QuestionProps) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const {
    question,
    category,
    correct_answer: correctAnswer,
  } = questions[index] ?? {};

  const navigateToNextQuestion = () => {
    const nextQuestionIndex = index + 1;
    const { question: nextQuestion } = questions[nextQuestionIndex] ?? {};

    navigate(`${ROUTES.QUESTION}/${encodeURIComponent(nextQuestion)}`);

    setIndex(nextQuestionIndex);
  };

  const handleConfirmation = () => {
    setAnswers({
      ...answers,
      [question]: {
        answer: 'true',
        correctAnswer: correctAnswer.toLowerCase(),
      },
    });

    navigateToNextQuestion();
  };

  const handleDeny = () => {
    setAnswers({
      ...answers,
      [question]: {
        answer: 'false',
        correctAnswer: correctAnswer.toLowerCase(),
      },
    });

    navigateToNextQuestion();
  };

  if (index === questions?.length) {
    return <Navigate to={ROUTES.RESULTS} />;
  }

  if (!question) {
    return <Navigate to={ROUTES.MAIN} replace />;
  }

  return (
    <Template heading={category} label={BUTTON_LABEL} href={ROUTES.MAIN} link>
      <ContentBox
        text={question}
        current={index + 1}
        total={10}
        denyLabel="False"
        confirmLabel="True"
        onConfirm={handleConfirmation}
        onDeny={handleDeny}
      />
    </Template>
  );
};

export default Question;
