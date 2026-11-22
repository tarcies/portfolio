import styles from "./ProjectModal.module.css";
import type { Project } from "../sections/Projects";
import { ProgressBar } from "./ProgressBar";
import { Badge } from "./Badge";
import { TextBlock } from "./TextBlock";

export function ProjectModal({
  project,
  setSelectedItem,
}: {
  project: Project | undefined;
  setSelectedItem: Function;
}) {
  if (!project) return null;
  return (
    <div className={styles.backdrop} onClick={() => setSelectedItem(null)}>
      <div className={`card ${styles.card}`}>
        <div className={styles.badge}>
          <Badge type={project.btype}>{project.btext}</Badge>
        </div>
        <div className={styles.title}>
          <p className="display">{project.name}</p>
          <div className={`${styles.tech} label`}>
            {project.tech.join(" · ")}
          </div>
        </div>
        <div className={styles.gallery}>
          <img src={`/projects/${project.id}/thumbnail.jpg`}></img>
          <img src={`/projects/${project.id}/thumbnail.jpg`}></img>
          <img src={`/projects/${project.id}/thumbnail.jpg`}></img>
        </div>
        <div className={styles.status}>
          <div className={styles.progress}>
            <ProgressBar progress={project.progress}>
              <div
                className={`h1 ${styles.label}`}
              >{`${project.progress}%`}</div>
            </ProgressBar>
          </div>
        </div>
        <div className={styles.text}>
          <TextBlock
            level="h2"
            title="Description"
            body={project.desc}
          ></TextBlock>
          <TextBlock level="h2" title="Use" body={project.desc}></TextBlock>
          <TextBlock level="h2" title="About" body={project.desc}></TextBlock>
        </div>
      </div>
    </div>
  );
}
