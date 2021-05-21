import { useTextContext } from "components/TextContext";
import ProjectCard from "components/ProjectCard";

export default function ProjectsList({ allProjectsData }) {
  const textProps = useTextContext();
  const text = textProps.text;
  return (
    <div>
      <h2>{text.projects_title}</h2>
      <div>
        {allProjectsData.map((projectData, key) => (
          <ProjectCard key={key} projectData={projectData} />
        ))}
      </div>
    </div>
  );
}
