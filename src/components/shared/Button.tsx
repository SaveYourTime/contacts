import { HTMLProps } from 'react';
import styles from '@/styles/Button.module.css';

type Props = {
  title: string;
  primary?: boolean;
  secondary?: boolean;
  testID?: string;
};

export default function Button({
  title,
  primary,
  secondary,
  testID,
  onClick,
}: HTMLProps<HTMLButtonElement> & Props) {
  return (
    <button
      type="button"
      className={`${styles.button} ${primary ? styles.primary : ''} ${
        secondary ? styles.secondary : ''
      }`}
      onClick={onClick}
      data-testid={testID}
    >
      {title}
    </button>
  );
}
