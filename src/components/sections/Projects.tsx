import styles from "./Projects.module.css";
import projectsJson from "../../data/projects.json";
import { ProjectCard } from "../ui";
import { type input } from "../ui/Badge";
import { Gap } from "./Gap";

interface Project {
  id: number;
  name: string;
  desc: string;
  tech: Array<string>;
  btext: string;
  btype: input["type"];
  progress: number;
}

const projects = projectsJson as Project[];

export function Projects() {
  return (
    <>
      <Gap height="2dvh"></Gap>
      <div className={`components`}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.name}
              desc={project.desc}
              tech={project.tech}
              btext={project.btext}
              btype={project.btype}
              progress={project.progress}
            ></ProjectCard>
          );
        })}
      </div>
      <Gap height="2dvh"></Gap>
    </>
  );
}
