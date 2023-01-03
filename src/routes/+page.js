
export const load = async ({ fetch }) => {
  const res = await fetch('/projects')
  const projects = res.json();
  return projects;
}