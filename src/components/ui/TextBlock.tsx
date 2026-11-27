import { Divider } from "./Divider";
import styles from "./TextBlock.module.css";

type input = {
  level?: string;
  title?: string;
  body?: string;
};

export function TextBlock({ level = "h1", title, body }: input) {
  return (
    <div className={styles.p}>
      {title && (
        <div className={`${level} ${styles.title}`}>
          {title}
          <Divider></Divider>
        </div>
      )}
      {body && <p className="body">{body}</p>}
    </div>
  );
}
