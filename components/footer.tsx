import Link from "next/link";
import { Twitter, Linkedin, MessageCircleMore } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 py-6 mt-auto">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ClipAction. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://twitter.com/costof_capital" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-yellow-200 transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <p className="text-sm text-muted-foreground">
            Made by{" "}
            <a 
              href="https://costofcapital.studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Cost of Capital Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
