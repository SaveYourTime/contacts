import styles from '@/styles/ErrorMessage.module.css';

type Props = {
  error: string | string[];
};

export default function ErrorMessage({ error }: Props) {
  if (Array.isArray(error)) {
    return (
      <>
        {error.map((message, index) => (
          <p key={index.toString()} className={styles.error} data-testid="error-message">
            {message}
          </p>
        ))}
      </>
    );
  }
  if (!error) return null;
  return (
    <p className={styles.error} data-testid="error-message">
      {error}
    </p>
  );
}
