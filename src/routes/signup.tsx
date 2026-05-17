import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, GoogleButton } from "@/components/landing/auth-shell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/signup")({ component: SignupPage });

function SignupPage() {
  return (
    <AuthShell title="Create your account" subtitle="Start studying smarter in seconds"
      footer={<>Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link></>}>
      <div className="space-y-4">
        <GoogleButton />
        <div className="flex items-center gap-3 text-xs text-muted-foreground"><div className="flex-1 h-px bg-border" />or<div className="flex-1 h-px bg-border" /></div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Aarav Sharma" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@college.edu" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="At least 8 characters" required />
          </div>
          <button type="submit" className="w-full gradient-primary text-primary-foreground font-medium rounded-xl py-2.5 text-sm shadow-glow hover:opacity-90 transition">
            Create account
          </button>
        </form>
      </div>
    </AuthShell>
  );
}
