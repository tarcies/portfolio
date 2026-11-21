import styles from "./ProjectCard.module.css";
import { Badge, type input as BadgeInput } from "./Badge";

type input = {
  id: number;
  title: string;
  desc: string;
  tech: Array<string>;
  btext: string;
  btype: BadgeInput["type"];
  progress: number;
};

export function ProjectCard({
  id,
  title,
  desc,
  tech,
  btext,
  btype,
  progress,
}: input) {
  return (
    <div className={`${styles["project-card-wrapper"]} easing-base`}>
      <div className={`card ${styles["project-card"]}`}>
        <div className={styles["proj-title"]}>
          <p className={`h2`}>{title}</p>
          <p className={`label`}>{tech.join(" · ")}</p>
        </div>
        <Badge type={btype} className={styles["proj-status"]}>
          {btext}
        </Badge>
        <span className={`body ${styles["proj-desc"]}`}>{desc}</span>
        <div className={styles["proj-progress"]}>
          <span className="h2">{progress}%</span>
          <div className={styles["proj-progress-bar"]}>
            <div
              className={styles["progress"]}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <img
          src={`/projects/${id}/thumbnail.jpg`}
          className={styles["proj-img"]}
        ></img>
      </div>
    </div>
  );
}
