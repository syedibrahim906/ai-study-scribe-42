import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { Brain, Check, Sparkles, Timer } from "lucide-react";

export const Route = createFileRoute("/dashboard/quiz")({ component: QuizPage });

function QuizPage() {
  return (
    <>
      <PageHeader title="Quiz Generator" subtitle="MCQs, true/false and revision tests — auto-built from your notes."
        action={<button className="inline-flex items-center gap-1.5 text-sm gradient-primary text-primary-foreground px-3 py-2 rounded-lg shadow-glow"><Sparkles className="h-4 w-4" /> New quiz</button>} />

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="glass-strong rounded-2xl p-8">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
            <span>Question 3 of 10 • Operating Systems</span>
            <span className="inline-flex items-center gap-1"><Timer className="h-3 w-3" /> 04:21</span>
          </div>
          <h2 className="font-display text-2xl font-semibold mb-6">Which scheduling algorithm gives the minimum average waiting time?</h2>
          <div className="space-y-3">
            {["First Come First Serve (FCFS)","Shortest Job First (SJF)","Round Robin","Priority Scheduling"].map((o, i) => (
              <button key={o} className={`w-full text-left glass rounded-xl px-4 py-3 hover:bg-secondary/40 transition flex items-center gap-3 ${i === 1 ? "ring-2 ring-success" : ""}`}>
                <span className="h-7 w-7 rounded-md bg-secondary flex items-center justify-center text-xs font-semibold">{String.fromCharCode(65 + i)}</span>
                <span className="text-sm flex-1">{o}</span>
                {i === 1 && <Check className="h-4 w-4 text-success" />}
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-between">
            <button className="text-sm glass rounded-lg px-4 py-2">Previous</button>
            <button className="text-sm gradient-primary text-primary-foreground rounded-lg px-4 py-2 shadow-glow">Next</button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-5">
            <div className="text-xs text-muted-foreground mb-1">Score</div>
            <div className="font-display text-3xl font-bold gradient-text">8 / 10</div>
            <div className="text-xs text-muted-foreground mt-1">Best this week</div>
          </div>
          <div className="glass rounded-2xl p-5">
            <h3 className="font-display font-semibold mb-3 flex items-center gap-2"><Brain className="h-4 w-4 text-primary" /> Recent quizzes</h3>
            <ul className="space-y-2 text-sm">
              {[{t:"DBMS – Normalization",s:"9/10"},{t:"DSA – Trees",s:"7/10"},{t:"OS – Scheduling",s:"8/10"}].map(q => (
                <li key={q.t} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/40"><span>{q.t}</span><span className="text-xs text-muted-foreground">{q.s}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
