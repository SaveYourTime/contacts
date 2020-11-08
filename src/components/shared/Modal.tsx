import { ReactNode, MouseEvent } from 'react';
import styles from '@/styles/Modal.module.css';
import Button from './Button';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: ReactNode;
  title?: string;
  cancelText?: string;
  okText?: string;
  onCancel?: (e: MouseEvent<HTMLButtonElement>) => void;
  onOk?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const renderHeader = (title?: string) => {
  if (!title) return null;
  return (
    <div className={styles.header}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default function Modal({
  open,
  setOpen,
  children,
  title,
  cancelText = 'Cancel',
  okText = 'Ok',
  onCancel,
  onOk,
}: Props) {
  const close = () => setOpen(false);
  const handleCancelClick = (e: MouseEvent<HTMLButtonElement>) => {
    close();
    onCancel?.(e);
  };

  if (!open) return null;
  return (
    <div>
      <div className={styles.mask} />
      <div className={styles.wrap} onClick={close}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.content}>
            <button type="button" className={styles.closeButton} onClick={close} />
            {renderHeader(title)}
            <div className={styles.body}>{children}</div>
            <div className={styles.footer}>
              <Button title={cancelText} onClick={handleCancelClick} />
              <Button title={okText} onClick={onOk} primary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
