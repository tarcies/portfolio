import styles from "./Badge.module.css";

type input = {
  type: "accent" | "muted" | "info" | "success" | "warn" | "danger";
  children: string;
};

export function Badge({ type = "accent", children }: input) {
  return (
    <div className={`${styles.badge} ${styles[`badge-${type}`]}`}>
      {children}
    </div>
  );
}
