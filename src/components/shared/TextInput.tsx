import { ChangeEvent } from 'react';
import styles from '@/styles/TextInput.module.css';

type Props = {
  title: string;
  value: string;
  fill?: boolean;
  onChangeText: (text: string) => void;
};

export default function TextInput({ title, value, fill, onChangeText }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChangeText(e.target.value);
  return (
    <div className={styles.field}>
      <span className={styles.title}>{title}</span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={`${styles.input} ${fill ? styles.fill : ''}`}
      />
    </div>
  );
}
