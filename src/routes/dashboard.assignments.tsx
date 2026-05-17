import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { FileText, Download, Sparkles, Plus } from "lucide-react";

export const Route = createFileRoute("/dashboard/assignments")({ component: AssignmentsPage });

const items = [
  { t: "Maths Assignment 4", q: "Solve 12 problems on integration", st: "Solved", d: "Today" },
  { t: "DBMS Lab Report", q: "Normalize the given schema to 3NF", st: "Draft", d: "Yesterday" },
  { t: "English Essay", q: "Impact of AI on education (800 words)", st: "Solved", d: "3d ago" },
];

function AssignmentsPage() {
  return (
    <>
      <PageHeader title="Assignment Solver" subtitle="Upload questions, get step-by-step answers, export to PDF."
        action={<button className="inline-flex items-center gap-1.5 text-sm gradient-primary text-primary-foreground px-3 py-2 rounded-lg shadow-glow"><Plus className="h-4 w-4" /> New assignment</button>} />

      <div className="glass-strong rounded-2xl p-6 mb-8">
        <label className="block text-sm font-medium mb-2">Paste assignment question</label>
        <textarea rows={4} placeholder="e.g. Explain the difference between TCP and UDP with examples…" className="w-full glass rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-primary resize-none" />
        <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
          <div className="flex gap-2 text-xs">
            {["Short note","Long answer","Step-by-step","Diagram"].map(t => (
              <span key={t} className="glass rounded-full px-3 py-1 cursor-pointer hover:bg-secondary/40">{t}</span>
            ))}
          </div>
          <button className="inline-flex items-center gap-1.5 gradient-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-glow">
            <Sparkles className="h-4 w-4" /> Solve with AI
          </button>
        </div>
      </div>

      <h2 className="font-display text-xl font-semibold mb-4">Recent assignments</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((a) => (
          <div key={a.t} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="font-medium text-sm">{a.t}</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${a.st === "Solved" ? "bg-success/20 text-success" : "bg-warning/20 text-warning"}`}>{a.st}</span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{a.q}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-muted-foreground">{a.d}</span>
              <button className="inline-flex items-center gap-1 text-xs glass rounded-lg px-2.5 py-1.5 hover:bg-secondary/40"><Download className="h-3 w-3" /> PDF</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
