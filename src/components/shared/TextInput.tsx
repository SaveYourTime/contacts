import { ChangeEvent, CSSProperties } from 'react';
import styles from '@/styles/TextInput.module.css';

type Props = {
  title: string;
  titleStyle?: CSSProperties;
  value?: string;
  fill?: boolean;
  testID?: string;
  onChangeText: (text: string) => void;
};

export default function TextInput({ title, titleStyle, value, fill, testID, onChangeText }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChangeText(e.target.value);
  return (
    <div className={styles.field}>
      <span className={styles.title} style={titleStyle}>
        {title}
      </span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={`${styles.input} ${fill ? styles.fill : ''}`}
        data-testid={testID}
      />
    </div>
  );
}
