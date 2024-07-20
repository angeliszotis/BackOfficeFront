// components/About.js
export function About() {
  const aboutElement = document.createElement('div');
  aboutElement.classList.add('page-content'); // Add class for styling

  aboutElement.innerHTML = `
    <h2>About Us</h2>
    <p>Welcome to our company! We are dedicated to providing the best services to our clients. Our team is composed of professionals with diverse backgrounds and expertise. We are committed to innovation, quality, and customer satisfaction.</p>
    <p>Our mission is to exceed customer expectations and contribute positively to the industry. We believe in continuous improvement and strive to stay ahead of the curve.</p>
    <p>Thank you for visiting our About Us page. Feel free to reach out to us if you have any questions or need further information.</p>
  `;

  return aboutElement;
}
