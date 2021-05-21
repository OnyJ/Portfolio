export default function ProjectCard({ projectData }) {
  const { name, id, title, date, intro } = projectData;

  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{date}</p>
        <p>{intro}</p>
        <br />
      </div>
    </div>
  );
}
