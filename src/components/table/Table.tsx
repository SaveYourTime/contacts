import User from '@/interfaces/user.interface';
import styles from '@/styles/Table.module.css';
import TableRow from './TableRow';
import TableEmptyRow from './TableEmptyRow';

type Props = {
  data: User[];
  handleDeleteUser: (id: number) => void;
};

const renderRows = ({ data, handleDeleteUser }: Props) => {
  if (!data.length) return <TableEmptyRow />;
  return data.map((user) => (
    <TableRow key={user.id.toString()} user={user} onClick={() => handleDeleteUser(user.id)} />
  ));
};

export default function Table({ data, handleDeleteUser }: Props) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>{renderRows({ data, handleDeleteUser })}</tbody>
    </table>
  );
}
