import fs from "fs";
import path from "path";
import matter from "gray-matter";

// const projectsDirectory = path.join(process.cwd(), "projects");

export function getProjectsNames(fileNames) {
  // const fileNames = fs.readdirSync("projects");
  // const fileNames = fs.readdirSync(projectsDirectory);
  console.log("filenames");
  console.log(fileNames);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}

// export async function getProjectsPaths() {
// const paths = getProjectsNames();
// return {
// paths,
// fallback: false,
// };
// }

export function getProjectData(name, key) {
  const fullPath = path.join("projects", `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return {
    id: key,
    name,
    ...matterResult.data,
  };
}

export function getAllProjectsData(fileNames) {
  const names = getProjectsNames(fileNames);
  return names.map((name, key) => getProjectData(name, key));
}

// export async function getStaticProps({ params }) {
// const projectData = getProjectData(params.name);
// return {
// props: {
// projectData,
// },
// };
// }
