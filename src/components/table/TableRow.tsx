import User from '@/interfaces/user.interface';
import styles from '@/styles/Table.module.css';

type Props = {
  user: User;
  onClick: () => void;
};

export default function TableRow({ user, onClick }: Props) {
  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>
        <div>{user.name}</div>
        <div className={styles.candidate}>{user.email}</div>
      </td>
      <td>{user.email}</td>
      <td>
        <button type="button" onClick={onClick}>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg"
            alt="delete button"
            className={styles.trash}
          />
        </button>
      </td>
    </tr>
  );
}
