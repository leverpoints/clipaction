import { render } from '@react-email/render';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { WelcomeEmail } from '../emails/welcome';

// Ensure the templates directory exists
mkdirSync(join(process.cwd(), 'functions/templates'), { recursive: true });

// Pre-render the email template with a placeholder
const html = render(WelcomeEmail({ userFirstname: '{{firstname}}' }));

// Write the template to a file
writeFileSync(
  join(process.cwd(), 'functions/templates/welcome.html'),
  html
);

console.log('====> Email templates built successfully'); 