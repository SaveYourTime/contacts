import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import { fetchUsers, addUser, deleteUser } from '@/store/user/action';
import styles from '@/styles/Home.module.css';
import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import TextInput from '@/components/shared/TextInput';
import ErrorMessage from '@/components/shared/ErrorMessage';
import Table from '@/components/table/Table';
import Footer from '@/components/shared/Footer';
import User from '@/interfaces/user.interface';
import SortType from '@/enums/sort-type.enum';
import { isEmail, isEmptyString } from '@/utils/validate';
import Select from '@/components/shared/Select';

export default function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.user);
  const [users, setUsers] = useState(data);
  const [user, setUser] = useState<Omit<User, 'id'>>({ name: '', email: '' });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const toggleModal = () => setOpen(!open);

  const handleAddUser = () => {
    const { name, email } = user;
    setError([]);
    const errorMessage = [];
    if (isEmptyString(name)) errorMessage.push('`Name` must not be empty');
    if (isEmptyString(email)) errorMessage.push('`Email` must not be empty');
    if (!isEmail(email)) errorMessage.push('`Email` must be an valid email');
    if (errorMessage.length) {
      setError(errorMessage);
    } else {
      dispatch(addUser(user));
      setUser({ name: '', email: '' });
      setOpen(false);
    }
  };
  const handleDeleteUser = (id: number) => dispatch(deleteUser(id));
  const handleFilterUser = (text: string) => {
    if (!text) {
      setUsers(data);
    } else {
      const filterUsers = data.filter(({ name }) => name.includes(text));
      setUsers(filterUsers);
    }
  };
  const handleSortUser = (type: SortType) => {
    const sortUsers = [...users];
    if (type === SortType.ID_ASC) {
      sortUsers.sort((a, b) => a.id - b.id);
    } else if (type === SortType.ID_DESC) {
      sortUsers.sort((a, b) => b.id - a.id);
    } else if (type === SortType.NAME) {
      sortUsers.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1));
    }
    setUsers(sortUsers);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Contacts</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>User Contacts</h1>

        <section className={styles.actions}>
          <TextInput
            title="Filter by"
            titleStyle={{ fontWeight: 600 }}
            onChangeText={handleFilterUser}
            testID="filter-input"
            fill
          />
          <Select
            title="Sort by"
            titleStyle={{ fontWeight: 600 }}
            onChange={(e) => handleSortUser(e.currentTarget.value as SortType)}
            testID="sort-select"
            fill
          >
            <option value={SortType.ID_ASC}>ID &#40;ASC&#41;</option>
            <option value={SortType.ID_DESC}>ID &#40;DESC&#41;</option>
            <option value={SortType.NAME}>Name &#40;A-Z&#41;</option>
          </Select>
          <Button title="Add User" onClick={toggleModal} secondary testID="add-button" />
        </section>

        <Table data={users} handleDeleteUser={handleDeleteUser} />
      </main>

      <Modal
        title="Add new user"
        open={open}
        setOpen={setOpen}
        okText="Add"
        onOk={handleAddUser}
        testID="add-user-modal"
        okTestID="add-user-modal-ok-button"
      >
        <TextInput
          title="Name"
          value={user.name}
          onChangeText={(name) => setUser({ ...user, name })}
          testID="name-input"
          fill
        />
        <TextInput
          title="Email"
          value={user.email}
          onChangeText={(email) => setUser({ ...user, email })}
          testID="email-input"
          fill
        />
        <ErrorMessage error={error} />
      </Modal>
      <Footer />
    </div>
  );
}
