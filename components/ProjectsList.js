import { useTextContext } from "components/TextContext";
import ProjectDisplay from "components/ProjectDisplay";

export default function ProjectsList({ allProjectsData }) {
  const textProps = useTextContext();
  const text = textProps.text;
  return (
    <div>
      <h2>{text.projects_title}</h2>
      <div>
        {allProjectsData.map((projectData) => (
          <ProjectDisplay projectData={projectData} />
        ))}
      </div>
    </div>
  );
}
