const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// List of vanilla JS projects
const vanillaProjects = [
  'I-calculator-app',
  'I-easybank-landing-page',
  'I-ip-address-tracker',
  'I-todo-app',
  'I-url-shortening-landing-page',
  'J-Coding-bootcamp-testimonials-slider',
  'J-dashboard-with-theme-switcher',
  'J-fylo-landing-page',
  'J-Sunny-Side-Landing-Page',
  'J-time-tracking-dashboard',
  'N-Coming-Soon-Landing-Page',
  'N-faq-accordion',
  'N-Landing-Page-Single-Section',
  'N-Order-Summary-Component',
  'N-stats-card-component'
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
