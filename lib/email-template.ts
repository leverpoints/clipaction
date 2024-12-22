import { render } from '@react-email/render';
import WelcomeEmail from '../emails/welcome';

export function renderWelcomeEmail(firstname: string) {
  return render(WelcomeEmail({ userFirstname: firstname }));
} 