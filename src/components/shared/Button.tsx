import { HTMLProps } from 'react';
import styles from '@/styles/Button.module.css';

type Props = {
  title: string;
  primary?: boolean;
  secondary?: boolean;
};

export default function Button({
  title,
  primary,
  secondary,
  onClick,
}: HTMLProps<HTMLButtonElement> & Props) {
  return (
    <button
      type="button"
      className={`${styles.button} ${primary ? styles.primary : ''} ${
        secondary ? styles.secondary : ''
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
