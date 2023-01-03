
export const load = async ({ fetch }) => {
  const res = await fetch('/projects')
  const projects = await res.json();

  return projects;

}