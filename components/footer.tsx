import Link from "next/link";
import { Twitter, Linkedin, MessageCircleMore } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-20 py-5">
      <div className="flex items-center justify-center space-x-6">
        <Link
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Twitter size={20} />
        </Link>
        <Link
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin size={20} />
        </Link>
        <Link
          href="https://reddit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <MessageCircleMore size={20} />
        </Link>
      </div>
    </footer>
  );
}
