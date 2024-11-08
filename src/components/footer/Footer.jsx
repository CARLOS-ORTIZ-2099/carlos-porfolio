import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerText}>
        <p>Copyright &copy; 2024 by carlos | all rights reserved</p>
      </div>
    </footer>
  );
};
