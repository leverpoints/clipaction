import { render } from '@react-email/render';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import WelcomeEmail from '../emails';

// Pre-render template with a placeholder that we can replace later
const html = render(WelcomeEmail({ userFirstname: '{{firstname}}' }));

// Ensure the output directory exists
mkdirSync(join(process.cwd(), 'functions/templates'), { recursive: true });

// Write the pre-rendered template to a file
writeFileSync(
  join(process.cwd(), 'functions/templates/welcome.html'),
  html
); 