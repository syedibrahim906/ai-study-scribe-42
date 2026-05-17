import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, GoogleButton } from "@/components/landing/auth-shell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  return (
    <AuthShell title="Welcome back" subtitle="Log in to continue your study journey"
      footer={<>Don't have an account? <Link to="/signup" className="text-primary font-medium hover:underline">Sign up</Link></>}>
      <div className="space-y-4">
        <GoogleButton />
        <div className="flex items-center gap-3 text-xs text-muted-foreground"><div className="flex-1 h-px bg-border" />or<div className="flex-1 h-px bg-border" /></div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@college.edu" required />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-xs text-primary hover:underline">Forgot?</Link>
            </div>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="w-full gradient-primary text-primary-foreground font-medium rounded-xl py-2.5 text-sm shadow-glow hover:opacity-90 transition">
            Log in
          </button>
        </form>
      </div>
    </AuthShell>
  );
}
