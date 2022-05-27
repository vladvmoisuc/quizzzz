import Template from 'containers/Template';

import styles from './styles.module.scss';

import ROUTES from 'utils/routes';

import { HEADING, DESCRIPTION, QUESTION, CTA_LABEL } from './copy';

interface HomeProps {
  numberOfQuestions?: number;
}

const Home = ({ numberOfQuestions = 10 }: HomeProps) => (
  <Template heading={HEADING} label={CTA_LABEL} href={ROUTES.QUESTION} link>
    <p className="paragraph">{DESCRIPTION(numberOfQuestions)}</p>
    <p className="paragraph">{QUESTION}</p>
  </Template>
);

export default Home;
