import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 glass rounded-2xl px-4 py-2.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center shadow-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold tracking-tight">StudyMate <span className="gradient-text">AI</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login" className="text-sm px-3 py-1.5 rounded-lg hover:bg-secondary/60 transition">Log in</Link>
            <Link to="/signup" className="text-sm px-3 py-1.5 rounded-lg gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition">Sign up</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
