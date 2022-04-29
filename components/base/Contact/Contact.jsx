import styles from "./Contact.module.scss";

const Contact = () => {
  const sendMessage = async (event) => {
    event.preventDefault();
    console.log("msg envoyé", event);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.form}>
        <form onSubmit={sendMessage}>
          <div className={styles.formInputs}>
            <label htmlFor="nom">
              Nom :
              <input
                type="text"
                name="nom"
                id="nom"
                autoComplete="nom"
                required
              />
            </label>

            <label htmlFor="prenom">
              Prénom :
              <input
                type="text"
                name="prenom"
                id="prenom"
                autoComplete="nom"
                required
              />
            </label>
          </div>

          <div className={styles.formInputs}>
            <label htmlFor="email">
              Email :
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
              />
            </label>

            <label htmlFor="telephone">
              Téléphone :
              <input
                type="text"
                name="telephone"
                id="telephone"
                autoComplete="telephone"
                required
              />
            </label>
          </div>

          <div className={styles.formTextArea}>
            <label htmlFor="message">
              Message :
              <textarea
                type="text"
                name="message"
                id="message"
                rows="5"
                cols="70"
                autoComplete="message"
                required
              />
            </label>
          </div>

          <button className={styles.formSubmitButton} type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
