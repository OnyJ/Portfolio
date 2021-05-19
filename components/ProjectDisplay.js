export default function ProjectDisplay({ projectData }) {
  const { name, id, title, date } = projectData;

  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{date}</p>
        <br />
      </div>
    </div>
  );
}
