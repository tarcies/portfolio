import styles from "./Projects.module.css";
import projectsJson from "../../data/projects.json";
import { ProjectCard } from "../ui";
import { ProjectModal } from "../ui";
import { type input } from "../ui/Badge";
import { Gap } from "./Gap";
import { useState, useEffect } from "react";

export interface Project {
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
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e: { key: string }) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedItem) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <>
      <Gap height="2dvh"></Gap>
      <div className={`grid`}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.name}
              desc={project.desc}
              tech={project.tech}
              btext={project.btext}
              btype={project.btype}
              progress={project.progress}
              setSelectedItem={setSelectedItem}
            ></ProjectCard>
          );
        })}
      </div>
      {selectedItem && (
        <ProjectModal
          project={projects.find((p) => p.id === selectedItem)}
          setSelectedItem={setSelectedItem}
        ></ProjectModal>
      )}
      <Gap height="2dvh"></Gap>
    </>
  );
}
