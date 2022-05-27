import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export interface ButtonProps {
  href?: string;
  label?: string;
  visible?: boolean;
  link?: boolean;
  onClick?: (event: SyntheticEvent) => void;
}

const Button = ({
  visible = true,
  href = '',
  link,
  label,
  onClick,
}: ButtonProps) => {
  if (!visible) return null;

  return link ? (
    <Link className={styles.button} to={href}>
      {label}
    </Link>
  ) : (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
