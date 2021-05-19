export default function ProjectDisplay({ projectData }) {
  const { name, id, title, date, description } = projectData;

  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{date}</p>
        <p>{description}</p>
        <br />
      </div>
    </div>
  );
}
