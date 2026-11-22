import styles from "./ProgressBar.module.css";

export function ProgressBar({
  progress,
  children,
}: {
  progress: number;
  children?: any;
}) {
  return (
    <div className={styles["progress-bar"]}>
      <div
        className={styles["progress"]}
        style={{ width: `${progress}%` }}
      ></div>
      {children}
    </div>
  );
}
