import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/dashboard/settings")({ component: SettingsPage });

function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" subtitle="Profile, preferences and notifications." />

      <div className="space-y-6 max-w-2xl">
        <div className="glass-strong rounded-2xl p-6">
          <h3 className="font-display font-semibold mb-4">Profile</h3>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-glow">A</div>
            <button className="text-sm glass rounded-lg px-3 py-2">Change photo</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5"><Label>Full name</Label><Input defaultValue="Aarav Sharma" /></div>
            <div className="space-y-1.5"><Label>Email</Label><Input defaultValue="aarav@college.edu" /></div>
            <div className="space-y-1.5"><Label>College</Label><Input placeholder="e.g. IIT Bombay" /></div>
            <div className="space-y-1.5"><Label>Year</Label><Input placeholder="e.g. 2nd year B.Tech" /></div>
          </div>
        </div>

        <div className="glass-strong rounded-2xl p-6 space-y-4">
          <h3 className="font-display font-semibold">Preferences</h3>
          {[
            { l: "Default language", d: "Used for AI answers and explanations", v: "English" },
            { l: "Theme", d: "Dark or light interface", v: "Midnight" },
          ].map((r) => (
            <div key={r.l} className="flex items-center justify-between">
              <div><div className="text-sm font-medium">{r.l}</div><div className="text-xs text-muted-foreground">{r.d}</div></div>
              <span className="text-sm glass rounded-lg px-3 py-1.5">{r.v}</span>
            </div>
          ))}
        </div>

        <div className="glass-strong rounded-2xl p-6 space-y-4">
          <h3 className="font-display font-semibold">Notifications</h3>
          {[
            { l: "Study reminders", d: "Daily nudge to keep your streak alive" },
            { l: "Exam countdowns", d: "Alerts as exam day approaches" },
            { l: "AI recommendations", d: "Personalized weekly study tips" },
          ].map((r) => (
            <div key={r.l} className="flex items-center justify-between">
              <div><div className="text-sm font-medium">{r.l}</div><div className="text-xs text-muted-foreground">{r.d}</div></div>
              <Switch defaultChecked />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
