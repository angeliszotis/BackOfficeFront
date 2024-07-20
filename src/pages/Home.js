// components/Home.js
export function Home() {
  const homeElement = document.createElement('div');
  homeElement.innerHTML = `
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page content.</p>
    `;
  return homeElement;
}
