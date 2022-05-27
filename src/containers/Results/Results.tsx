import { Navigate, Routes, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import he from 'he';

import Template from 'containers/Template';

import ROUTES from 'utils/routes';
import { HEADING, BUTTON_LABEL } from './copy';

import type { Answers, Answer } from 'types';

import styles from './styles.module.scss';

interface ResultsProps {
  answers: Answers;
  total: number;
  setAnswers: (answers: Answers) => void;
}

const cx = classNames.bind(styles);

const Results = ({ answers, total, setAnswers }: ResultsProps) => {
  const navigate = useNavigate();
  const isAnswerCorrect = (answer: string) =>
    answers[answer].answer === answers[answer].correctAnswer;
  const answersList = Object.keys(answers);
  const score = answersList.reduce((result, question) => {
    const point = isAnswerCorrect(question) ? 1 : 0;

    return result + point;
  }, 0);

  const handleClick = () => {
    navigate(ROUTES.MAIN);

    setAnswers({});
  };

  if (answersList.length !== 10) {
    return <Navigate to={ROUTES.MAIN} replace />;
  }

  return (
    <Template
      heading={HEADING(score, total)}
      label={BUTTON_LABEL}
      onClick={handleClick}
    >
      <ul className={styles.list}>
        {answersList.map((answer, index) => (
          <li
            key={answer}
            className={cx('li', {
              [styles.correct]: isAnswerCorrect(answer),
              [styles.wrong]: !isAnswerCorrect(answer),
            })}
          >
            {index + 1}. {he.decode(answer)}
          </li>
        ))}
      </ul>
    </Template>
  );
};

export default Results;
