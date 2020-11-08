import styles from '@/styles/ErrorMessage.module.css';

type Props = {
  error: string | string[];
};

export default function ErrorMessage({ error }: Props) {
  if (Array.isArray(error)) {
    return (
      <>
        {error.map((message, index) => (
          <p key={index.toString()} className={styles.error}>
            {message}
          </p>
        ))}
      </>
    );
  }
  if (!error) return null;
  return <p className={styles.error}>{error}</p>;
}
