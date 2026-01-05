import type { Metadata } from "next";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ nerdling_id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { nerdling_id } = await params;
  return {
    title: `Nerdling ${nerdling_id}`,
    description: `Details for Nerdling ${nerdling_id}`,
  };
}

export default async function NerdlingPage({ params }: Props) {
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
            <h2 className={styles.sectionTitle}>Description</h2>
            <p className={styles.description}>
              This is a placeholder description for Nerdling {nerdling_id}. Add
              your project details, features, and information here.
            </p>
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
  return [{ nerdling_id: "1" }, { nerdling_id: "2" }, { nerdling_id: "3" }];
}
