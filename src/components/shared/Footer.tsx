import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        SaveYourTime ©2020 Created by&nbsp;
        <a href="https://github.com/SaveYourTime" target="_blank" rel="noopener noreferrer">
          Aaron Lu
        </a>
      </span>
      <div className={styles.attribute}>
        <div>
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">
            Kiranshastry
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {' '}
            www.flaticon.com
          </a>
        </div>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {' '}
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
}
