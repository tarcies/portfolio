import { Divider } from "./Divider";
import styles from "./TextBlock.module.css";

type input = {
  level: string;
  title: string;
  body: string;
};

export function TextBlock({ level = "h1", title, body }: input) {
  return (
    <div className={styles.p}>
      <div className={`${level} ${styles.title}`}>
        {title}
        <Divider></Divider>
      </div>
      <p className="body">{body}</p>
    </div>
  );
}
