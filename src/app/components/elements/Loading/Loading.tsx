import styles from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__content}>
        <div className={styles.loading__circle} />
      </div>
    </div>
  );
};
