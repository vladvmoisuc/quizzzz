import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from 'containers/Home';
import Question from 'containers/Question';
import Results from 'containers/Results';

import { useInitialise } from 'utils/hooks';

import ROUTES, { EXTERNAL_API } from 'utils/routes';
import { LOADING } from 'utils/copy';

import type { Answers } from 'types';

const App = () => {
  const [error, loading, { results: questions }] = useInitialise(
    EXTERNAL_API.QUESTIONS
  );
  const [answers, setAnswers] = useState<Answers>({});
  const question = `${ROUTES.QUESTION}/${encodeURIComponent(
    questions?.[0]?.question
  )}`;

  if (loading) return <p className="paragraph">{LOADING.STANDARD}</p>;

  if (error) return <p className="paragraph">{error}</p>;

  return (
    <Routes>
      <Route
        path={ROUTES.MAIN}
        element={<Home numberOfQuestions={questions?.length} />}
      />
      <Route path={ROUTES.QUESTION}>
        <Route path="" element={<Navigate to={question} replace />} />
        <Route
          path=":id"
          element={
            <Question
              questions={questions}
              answers={answers}
              setAnswers={setAnswers}
            />
          }
        />
      </Route>
      <Route
        path={ROUTES.RESULTS}
        element={
          <Results
            answers={answers}
            total={questions?.length}
            setAnswers={setAnswers}
          />
        }
      />
      <Route path="*" element={<Navigate to={ROUTES.MAIN} replace />} />
    </Routes>
  );
};

export default App;
