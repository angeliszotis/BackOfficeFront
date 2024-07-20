import routes from './routes';
import { Sidebar } from './components/Sidebar';
import './assets/css/style.css';

export function renderContent(pathname) {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const component = routes[pathname];
  if (component) {
    app.appendChild(component());
  } else {
    const notFound = document.createElement('div');
    notFound.innerHTML = '<h2>Page not found</h2><a href="/">Go to Home</a>';
    app.appendChild(notFound);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    // Render sidebar
    root.appendChild(Sidebar());
    renderContent(window.location.pathname);
  } else {
    console.error("Root element not found. Make sure your HTML includes an element with id 'root'.");
  }
});

window.addEventListener('popstate', () => {
  renderContent(window.location.pathname);
});

document.body.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    history.pushState(null, '', href);
    renderContent(href);
  }
});
