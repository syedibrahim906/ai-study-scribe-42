import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { CalendarClock, Target, Bell, Trophy } from "lucide-react";

export const Route = createFileRoute("/dashboard/planner")({ component: PlannerPage });

const week = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const sessions: Record<string, { t: string; c: string }[]> = {
  Mon: [{ t: "OS - Unit 3", c: "bg-violet-500/30 border-violet-400/40" }],
  Tue: [{ t: "DBMS Revision", c: "bg-emerald-500/30 border-emerald-400/40" }],
  Wed: [{ t: "DSA Practice", c: "bg-cyan-500/30 border-cyan-400/40" }, { t: "Quiz", c: "bg-pink-500/30 border-pink-400/40" }],
  Thu: [{ t: "Networks", c: "bg-amber-500/30 border-amber-400/40" }],
  Fri: [{ t: "Maths", c: "bg-violet-500/30 border-violet-400/40" }],
  Sat: [{ t: "Mock test", c: "bg-pink-500/30 border-pink-400/40" }],
  Sun: [],
};

function PlannerPage() {
  return (
    <>
      <PageHeader title="Study Planner" subtitle="Goals, timetable, and exam countdowns in one place." />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { i: Target, t: "Weekly goal", v: "16 / 20 h" },
          { i: CalendarClock, t: "Next exam", v: "4 days" },
          { i: Bell, t: "Reminders", v: "3 active" },
          { i: Trophy, t: "Badges", v: "7 earned" },
        ].map(({ i: Icon, t, v }) => (
          <div key={t} className="glass rounded-2xl p-5">
            <Icon className="h-5 w-5 text-primary mb-2" />
            <div className="text-2xl font-display font-bold">{v}</div>
            <div className="text-xs text-muted-foreground">{t}</div>
          </div>
        ))}
      </div>

      <div className="glass-strong rounded-2xl p-6">
        <h3 className="font-display font-semibold mb-4">This week</h3>
        <div className="grid grid-cols-7 gap-2">
          {week.map(d => (
            <div key={d} className="space-y-2">
              <div className="text-center text-xs font-medium text-muted-foreground">{d}</div>
              <div className="space-y-2 min-h-32">
                {sessions[d].map((s, i) => (
                  <div key={i} className={`text-xs p-2 rounded-lg border ${s.c}`}>{s.t}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
