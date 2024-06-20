const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// List of vanilla JS projects
const vanillaProjects = [
  'i-calculator-app',
  'i-easybank-landing-page',
  'i-ip-address-tracker',
  'i-todo-app',
  'i-url-shortening-landing-page',
  'j-coding-bootcamp-testimonials-slider',
  'j-dashboard-with-theme-switcher',
  'j-fylo-landing-page',
  'j-sunny-side-landing-page',
  'j-time-tracking-dashboard',
  'n-coming-soon-landing-page',
  'n-faq-accordion',
  'n-landing-page-single-section',
  'n-order-summary-component',
  'n-stats-card-component'
];

// List of React projects
const reactProjects = ['i-room-homepage'];

// Create a dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy vanilla JS projects
vanillaProjects.forEach(project => {
  const targetDir = path.join('dist', project);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.cpSync(project, targetDir, { recursive: true });
});

// Build and copy React projects
reactProjects.forEach(project => {
  execSync(`cd ${project} && npm install && npm run build`);
  const buildDir = path.join(project, 'dist');
  const targetDir = path.join('dist', project);
  fs.renameSync(buildDir, targetDir);
});
