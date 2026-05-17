import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { Upload, MessageSquare, FileText, Brain, Layers, PenLine, TrendingUp, Flame, BookOpen, Clock } from "lucide-react";

export const Route = createFileRoute("/dashboard/")({ component: DashboardHome });

const stats = [
  { label: "Study streak", value: "7 days", icon: Flame, accent: "from-orange-500 to-pink-500" },
  { label: "Notes uploaded", value: "24", icon: BookOpen, accent: "from-violet-500 to-indigo-500" },
  { label: "Quizzes taken", value: "12", icon: Brain, accent: "from-cyan-500 to-blue-500" },
  { label: "Hours studied", value: "38h", icon: Clock, accent: "from-emerald-500 to-teal-500" },
];

const quickActions = [
  { title: "Upload notes", desc: "PDF, DOCX or scanned image", icon: Upload, to: "/dashboard/upload" },
  { title: "Ask the AI tutor", desc: "Chat with your study material", icon: MessageSquare, to: "/dashboard/chat" },
  { title: "Solve assignment", desc: "Step-by-step answers", icon: FileText, to: "/dashboard/assignments" },
  { title: "Generate quiz", desc: "MCQs from any topic", icon: Brain, to: "/dashboard/quiz" },
  { title: "Flashcards", desc: "Revise faster", icon: Layers, to: "/dashboard/flashcards" },
  { title: "Handwriting", desc: "Convert to notebook PDF", icon: PenLine, to: "/dashboard/handwriting" },
];

function DashboardHome() {
  return (
    <>
      <PageHeader title="Welcome back, Aarav 👋" subtitle="Here's what's happening in your study workspace today." />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 hover:shadow-glow transition">
            <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center mb-3`}>
              <s.icon className="h-5 w-5 text-white" />
            </div>
            <div className="text-2xl font-display font-bold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-xl font-semibold mb-4">Quick actions</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {quickActions.map((a) => (
          <Link key={a.title} to={a.to} className="glass rounded-2xl p-5 hover:shadow-glow hover:-translate-y-0.5 transition group">
            <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center mb-3 shadow-glow">
              <a.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="font-display font-semibold group-hover:gradient-text transition">{a.title}</div>
            <div className="text-xs text-muted-foreground mt-1">{a.desc}</div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <h3 className="font-display font-semibold mb-4 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> AI recommendations</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Revise 'Thermodynamics Unit 3' — likely 18 marks in your upcoming exam",
              "Generate flashcards from 'OS Notes - Chapter 5'",
              "Take a quick MCQ on 'Data Structures' — your weakest topic this week",
            ].map((r, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/40 transition">
                <span className="h-6 w-6 rounded-md gradient-primary text-xs font-bold text-primary-foreground flex items-center justify-center shrink-0">{i + 1}</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display font-semibold mb-4">Upcoming exams</h3>
          <ul className="space-y-3">
            {[
              { s: "Data Structures", d: "in 4 days" },
              { s: "Operating Systems", d: "in 11 days" },
              { s: "DBMS", d: "in 18 days" },
            ].map((e) => (
              <li key={e.s} className="flex items-center justify-between p-3 rounded-xl bg-secondary/30">
                <div>
                  <div className="font-medium text-sm">{e.s}</div>
                  <div className="text-xs text-muted-foreground">{e.d}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-md gradient-primary text-primary-foreground">Plan</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
