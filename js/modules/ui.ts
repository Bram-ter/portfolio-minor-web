import { logUser } from "./api";

export async function insertProjects() {
  // Assume that you have an existing element with the ID 'container' where you want to insert the sections.
const container = document.querySelector('body') as HTMLElement
const userProjects = await logUser()

console.log(userProjects)

// Create an array of sections using the 'repos' array as before.
const sections = userProjects.map((repo: any) => {
  const section = document.createElement('section');
  section.innerHTML = `
    <article>
      <h2>${repo.name}</h2>

      <p>${repo.description}</p>

      <a>
        <span></span>
        <p>My work</p>
        <span></span>
        <span></span>
      </a>

    </article>

    <div>
      <img src="https://picsum.photos/200" alt="" />
    </div>
  `;
  return section;
});

// Loop through the sections and add each one to the container element.
sections.forEach((section: any) => {
  container.appendChild(section);
});
}