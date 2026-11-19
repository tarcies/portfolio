import styles from "./WIP.module.css";

export function WIP() {
  return (
    <div className={styles.wip}>
      <div className={styles.text}>
        <p className="display">{"WORK IN PROGRESS"}</p>
        <p className="h2">
          {"In the meantime, checkout my "}
          <a href="https://ds.tarcies.dev">Design System</a>
        </p>
      </div>
    </div>
  );
}
