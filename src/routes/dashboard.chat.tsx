import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { Send, Sparkles, Paperclip, Languages, Plus } from "lucide-react";

export const Route = createFileRoute("/dashboard/chat")({ component: ChatPage });

const threads = [
  { t: "OS Unit 3 summary", d: "2m ago" },
  { t: "Explain B+ trees simply", d: "1h ago" },
  { t: "Solve DBMS Q5 2023", d: "Yesterday" },
];

function ChatPage() {
  return (
    <>
      <PageHeader title="AI Study Assistant" subtitle="Ask anything about your uploaded notes — in English, हिन्दी, or मराठी."
        action={<button className="inline-flex items-center gap-1.5 text-sm gradient-primary text-primary-foreground px-3 py-2 rounded-lg shadow-glow"><Plus className="h-4 w-4" /> New chat</button>} />

      <div className="grid lg:grid-cols-[260px_1fr] gap-4 h-[calc(100vh-12rem)]">
        <aside className="glass rounded-2xl p-3 hidden lg:block">
          <div className="text-xs font-semibold text-muted-foreground px-2 mb-2">Recent chats</div>
          <ul className="space-y-1">
            {threads.map((t) => (
              <li key={t.t}>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary/40 transition">
                  <div className="text-sm font-medium truncate">{t.t}</div>
                  <div className="text-xs text-muted-foreground">{t.d}</div>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="glass-strong rounded-2xl flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center shrink-0 shadow-glow"><Sparkles className="h-4 w-4 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">StudyMate AI</div>
                <p className="leading-relaxed">Hi Aarav! I've indexed your <b>OS_Unit3_Notes.pdf</b>. Ask me to summarize, explain or generate questions from it.</p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="max-w-xl bg-secondary/60 rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm">Summarize chapter 3 in 10 bullet points</div>
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center shrink-0 text-sm font-semibold text-accent-foreground">A</div>
            </div>
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center shrink-0 shadow-glow"><Sparkles className="h-4 w-4 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">StudyMate AI</div>
                <ul className="list-disc list-inside space-y-1 leading-relaxed text-sm">
                  <li>Process and thread concepts</li>
                  <li>Context switching overhead</li>
                  <li>Scheduling algorithms (FCFS, SJF, RR)</li>
                  <li>Deadlock conditions & prevention</li>
                  <li>Memory management basics…</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 p-3">
            <div className="glass rounded-xl flex items-end gap-2 p-2">
              <button className="h-9 w-9 rounded-lg hover:bg-secondary/40 flex items-center justify-center"><Paperclip className="h-4 w-4" /></button>
              <button className="h-9 px-2 rounded-lg hover:bg-secondary/40 flex items-center gap-1 text-xs text-muted-foreground"><Languages className="h-4 w-4" /> EN</button>
              <textarea rows={1} placeholder="Ask about your notes…" className="flex-1 bg-transparent resize-none outline-none text-sm py-2 placeholder:text-muted-foreground" />
              <button className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center shadow-glow"><Send className="h-4 w-4 text-primary-foreground" /></button>
            </div>
            <div className="text-[10px] text-muted-foreground text-center mt-2">AI may make mistakes. Verify exam-critical answers.</div>
          </div>
        </div>
      </div>
    </>
  );
}
