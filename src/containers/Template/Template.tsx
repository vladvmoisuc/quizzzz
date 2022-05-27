import { SyntheticEvent } from 'react';

import Button, { ButtonProps } from 'components/Button';

import styles from './styles.module.scss';

type TemplateProps = {
  heading: string;
  children?: any;
} & ButtonProps;

const Template = ({ children = null, heading, ...props }: TemplateProps) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className="heading-1">{heading}</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Button {...props} />
      </footer>
    </>
  );
};

export default Template;
