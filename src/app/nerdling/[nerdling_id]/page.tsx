import styles from "./page.module.css";

type NerdlingPageProps = {
  params: Promise<{ nerdling_id: string }>;
};

export default async function NerdlingPage({ params }: NerdlingPageProps) {
  const { nerdling_id } = await params;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Nerdling {nerdling_id}</h1>
          <p className={styles.subtitle}>
            Explore the details and description of this nerdling project.
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What learn next</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Why is it important to avoid useEffect, some devs are very much
                against it.
              </li>
              <li className={styles.listItem}>Item 2</li>
              <li className={styles.listItem}>Item 3</li>
            </ul>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Details</h2>
            <p className={styles.description}>
              Additional details and information about this nerdling project
              will be displayed here.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  // TODO: fetch nerdlings from the database for SSG
  return [{ nerdling_id: "1" }, { nerdling_id: "2" }, { nerdling_id: "3" }];
}
