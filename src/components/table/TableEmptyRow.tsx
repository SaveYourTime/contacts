import styles from '@/styles/Table.module.css';

export default function TableEmptyRow() {
  return (
    <tr className={styles.empty}>
      <td colSpan={4}>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/18/18547.svg"
          alt="no data"
          width={60}
          height={60}
        />
        <p>No data</p>
      </td>
    </tr>
  );
}
