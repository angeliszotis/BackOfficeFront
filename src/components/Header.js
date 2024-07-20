// components/Header.js
export function Header(title) {
  const header = document.createElement('header');
  header.classList.add('header');

  const heading = document.createElement('h1');
  heading.textContent = title;
  header.appendChild(heading);

  return header;
}
