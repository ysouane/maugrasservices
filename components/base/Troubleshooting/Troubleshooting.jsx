import styles from "./Troubleshooting.module.scss";

const Troubleshooting = () => {
  return (
    <div className={styles.troubleshooting}>
      <div className={styles.troubleshootingCard}>
        <div className={styles.troubleshootingCard__header}>Dépannage</div>
        <div className={styles.troubleshootingCard__body}>
          <ul>
            <li>Mon ordinateur ne démarre pas</li>
            <li>Mon ordinateur est trop lent</li>
            <li>Mon ordinateur est infecté par un virus</li>
            <li>Problème d&apos;accès internet</li>
          </ul>
        </div>
      </div>

      <div className={styles.supportCard}>
        <div className={styles.supportCard__header}>Assistance</div>
        <div className={styles.supportCard__body}>
          <ul>
            <li>
              Besoin d&apos;aide pour une installation logiciel ou matériel
            </li>
            <li>Configuration/mise à jour Windows</li>
            <li>Installation d&apos;imprimante</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Troubleshooting;
