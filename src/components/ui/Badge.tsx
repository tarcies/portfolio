import styles from "./Badge.module.css";

export type input = {
  type: "accent" | "muted" | "info" | "success" | "warn" | "danger";
  className?: string;
  children: string;
};

export function Badge({ type = "accent", className = "", children }: input) {
  return (
    <div className={`${className} ${styles.badge} ${styles[`badge-${type}`]}`}>
      {children}
    </div>
  );
}
