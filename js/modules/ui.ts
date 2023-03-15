import { logUser } from "./api";

export async function insertProjects() {
  // Assume that you have an existing element with the ID 'container' where you want to insert the sections.
const container = document.querySelector('body') as HTMLElement
const test = await logUser()

console.log(container)

// Create an array of sections using the 'repos' array as before.
const sections = test.map((repo: any) => {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>${repo.name}</h2>
  `;
  return section;
});

// Loop through the sections and add each one to the container element.
sections.forEach((section: any) => {
  container.appendChild(section);
});
}