import styles from "./ProjectCard.module.css";
import { Badge, type input as BadgeInput } from "./Badge";
import { ProgressBar } from "./ProgressBar";

type input = {
  id: number;
  name: string;
  desc: string;
  tech: Array<string>;
  btext: string;
  btype: BadgeInput["type"];
  progress: number;
  setSelectedItem: Function;
};

export function ProjectCard({
  id,
  name,
  desc,
  tech,
  btext,
  btype,
  progress,
  setSelectedItem,
}: input) {
  return (
    <div
      className={`${styles["project-card-wrapper"]} easing-base`}
      onClick={() => setSelectedItem(id)}
      onKeyDown={(e) => e.key === "Enter" && setSelectedItem(id)}
    >
      <div className={`card ${styles["project-card"]}`}>
        <div className={styles["proj-title"]}>
          <p className={`h2`}>{name}</p>
          <p className={`label`}>{tech.join(" · ")}</p>
        </div>
        <Badge type={btype} className={styles["proj-status"]}>
          {btext}
        </Badge>
        <span className={`body ${styles["proj-desc"]}`}>{desc}</span>
        <div className={styles["proj-progress"]}>
          <span className="h2">{`${progress}%`}</span>
          <ProgressBar progress={progress}></ProgressBar>
        </div>
        <img
          src={`/projects/${id}/thumbnail.jpg`}
          className={styles["proj-img"]}
        ></img>
      </div>
    </div>
  );
}
