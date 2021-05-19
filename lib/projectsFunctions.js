import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getProjectsNames(fileNames) {
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}

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
  const allProjectsDatas = names.map((name, key) =>
    getProjectData(name, key)
  );
  return allProjectsDatas.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
