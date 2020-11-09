import { CSSProperties, HTMLProps, ReactNode } from 'react';
import styles from '@/styles/TextInput.module.css';

type Props = {
  children: ReactNode;
  title: string;
  titleStyle?: CSSProperties;
  fill?: boolean;
  testID?: string;
};

export default function Select({
  children,
  title,
  titleStyle,
  onChange,
  testID,
  fill,
}: Props & HTMLProps<HTMLSelectElement>) {
  return (
    <div className={styles.field}>
      <span className={styles.title} style={titleStyle}>
        {title}
      </span>
      <select
        onChange={onChange}
        className={`${styles.input} ${fill ? styles.fill : ''}`}
        data-testid={testID}
      >
        {children}
      </select>
    </div>
  );
}
