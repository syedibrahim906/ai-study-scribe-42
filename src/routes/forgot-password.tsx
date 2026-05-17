import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/landing/auth-shell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/forgot-password")({ component: ForgotPage });

function ForgotPage() {
  return (
    <AuthShell title="Reset your password" subtitle="We'll email you a reset link"
      footer={<Link to="/login" className="text-primary font-medium hover:underline">Back to log in</Link>}>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@college.edu" required />
        </div>
        <button type="submit" className="w-full gradient-primary text-primary-foreground font-medium rounded-xl py-2.5 text-sm shadow-glow hover:opacity-90 transition">
          Send reset link
        </button>
      </form>
    </AuthShell>
  );
}
