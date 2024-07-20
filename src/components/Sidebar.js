// Sidebar.js

// Function to create and return the navigation link item
function createNavButton(iconClass, text, href) {
  const button = document.createElement('div');
  button.classList.add('nav-button');

  const icon = document.createElement('i');
  icon.className = iconClass;

  const span = document.createElement('span');
  span.textContent = text;

  button.appendChild(icon);
  button.appendChild(span);

  button.addEventListener('click', () => {
    navigateTo(href);
  });

  return button;
}

// Function to create and return the navigation header
function createNavHeader() {
  const header = document.createElement('div');
  header.id = 'nav-header';

  const title = document.createElement('a');
  title.id = 'nav-title';
  title.href = '';
  title.target = '_blank';
  title.textContent = 'B';
  title.innerHTML += '<i class="fab fa-codepen"></i>ackOffice';

  const toggleLabel = document.createElement('label');
  toggleLabel.setAttribute('for', 'nav-toggle');

  const toggleBurger = document.createElement('span');
  toggleBurger.id = 'nav-toggle-burger';
  toggleLabel.appendChild(toggleBurger);

  header.appendChild(title);
  header.appendChild(toggleLabel);
  header.appendChild(document.createElement('hr'));

  return header;
}

// Function to create and return the navigation content
function createNavContent() {
  const content = document.createElement('div');
  content.id = 'nav-content';

  const buttons = [
    { icon: 'fas fa-palette', text: 'Home', href: '/' },
    { icon: 'fas fa-images', text: 'Contact', href: '/contact' },
    { icon: 'fas fa-thumbtack', text: 'About', href: '/about' },
    { icon: 'fas fa-heart', text: 'Following', href: '/following' },
    { icon: 'fas fa-chart-line', text: 'Trending', href: '/trending' },
    { icon: 'fas fa-fire', text: 'Challenges', href: '/challenges' },
    { icon: 'fas fa-magic', text: 'Spark', href: '/spark' },
    { icon: 'fas fa-gem', text: 'Codepen Pro', href: '/pro' }
  ];

  buttons.forEach(button => {
    const navButton = createNavButton(button.icon, button.text, button.href);
    content.appendChild(navButton);
  });

  content.appendChild(document.createElement('hr'));
  return content;
}

// Function to create and return the footer
function createNavFooter() {
  const footer = document.createElement('div');
  footer.id = 'nav-footer';

  const heading = document.createElement('div');
  heading.id = 'nav-footer-heading';

  const avatar = document.createElement('div');
  avatar.id = 'nav-footer-avatar';
  const img = document.createElement('img');
  img.src = '';
  avatar.appendChild(img);

  const titleBox = document.createElement('div');
  titleBox.id = 'nav-footer-titlebox';
  const title = document.createElement('a');
  title.id = 'nav-footer-title';
  title.href = '';
  title.target = '_blank';
  title.textContent = 'uahnbu';
  const subtitle = document.createElement('span');
  subtitle.id = 'nav-footer-subtitle';
  subtitle.textContent = 'Zotis';
  titleBox.appendChild(title);
  titleBox.appendChild(subtitle);

  const footerToggleLabel = document.createElement('label');
  footerToggleLabel.setAttribute('for', 'nav-footer-toggle');
  footerToggleLabel.innerHTML = '<i class="fas fa-caret-up"></i>';

  heading.appendChild(avatar);
  heading.appendChild(titleBox);
  heading.appendChild(footerToggleLabel);
  footer.appendChild(heading);

  const content = document.createElement('div');
  content.id = 'nav-footer-content';
  content.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  footer.appendChild(content);

  return footer;
}

// Main Sidebar function
export function Sidebar() {
  const sidebar = document.createElement('div');
  sidebar.id = 'nav-bar';

  const toggle = document.createElement('input');
  toggle.id = 'nav-toggle';
  toggle.type = 'checkbox';

  const footerToggle = document.createElement('input');
  footerToggle.id = 'nav-footer-toggle';
  footerToggle.type = 'checkbox';

  sidebar.appendChild(toggle);
  sidebar.appendChild(createNavHeader());
  sidebar.appendChild(createNavContent());
  sidebar.appendChild(createNavFooter());
  sidebar.appendChild(footerToggle);

  return sidebar;
}

// Function to handle navigation and update URL
function navigateTo(pathname) {
  if (!pathname.startsWith('/')) {
    pathname = '/' + pathname;
  }
  window.history.pushState({}, '', pathname);
  renderContent(pathname);
}

// Import renderContent function (ensure the correct path to index.js)
import { renderContent } from '../index';
