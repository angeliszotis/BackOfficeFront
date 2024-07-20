// components/Contact.js
export function Contact() {
  const contactElement = document.createElement('div');
  contactElement.innerHTML = `
        <h2>Contact Us</h2>
        <p>This is the contact page content.</p>
    `;
  return contactElement;
}
