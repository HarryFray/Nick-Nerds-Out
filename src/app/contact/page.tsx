import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description: "Get in touch with us",
};

export default function Contact() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            Have a question or want to work together? Send us a message and
            we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form className={styles.form} action="#" method="POST">
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder="Your name"
              required
              aria-required="true"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="your.email@example.com"
              required
              aria-required="true"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={styles.input}
              placeholder="What's this about?"
              required
              aria-required="true"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Your message here..."
              rows={6}
              required
              aria-required="true"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
