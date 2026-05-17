import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { Layers, ChevronLeft, ChevronRight, RotateCcw, Sparkles } from "lucide-react";

export const Route = createFileRoute("/dashboard/flashcards")({ component: FlashcardsPage });

const decks = [
  { t: "Operating Systems", n: 42, c: "from-violet-500 to-indigo-500" },
  { t: "Data Structures", n: 64, c: "from-cyan-500 to-blue-500" },
  { t: "DBMS Concepts", n: 28, c: "from-emerald-500 to-teal-500" },
  { t: "Computer Networks", n: 51, c: "from-pink-500 to-rose-500" },
];

function FlashcardsPage() {
  return (
    <>
      <PageHeader title="Flashcards" subtitle="Bite-sized revision generated from your notes."
        action={<button className="inline-flex items-center gap-1.5 text-sm gradient-primary text-primary-foreground px-3 py-2 rounded-lg shadow-glow"><Sparkles className="h-4 w-4" /> Generate deck</button>} />

      <div className="glass-strong rounded-3xl p-8 mb-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div className="relative h-56 md:h-64 rounded-2xl gradient-primary flex items-center justify-center text-center p-8 shadow-elegant">
          <div>
            <div className="text-xs text-primary-foreground/70 mb-2">QUESTION 1 / 42</div>
            <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">What is a deadlock in operating systems?</div>
          </div>
        </div>
        <div className="flex md:flex-col gap-2 items-center md:items-stretch justify-center">
          <button className="h-12 w-12 rounded-xl glass flex items-center justify-center"><ChevronLeft className="h-5 w-5" /></button>
          <button className="h-12 px-4 rounded-xl gradient-primary text-primary-foreground font-medium shadow-glow inline-flex items-center gap-1.5"><RotateCcw className="h-4 w-4" /> Flip</button>
          <button className="h-12 w-12 rounded-xl glass flex items-center justify-center"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>

      <h2 className="font-display text-xl font-semibold mb-4">Your decks</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {decks.map((d) => (
          <div key={d.t} className="glass rounded-2xl p-5 hover:shadow-glow hover:-translate-y-0.5 transition cursor-pointer">
            <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${d.c} flex items-center justify-center mb-3`}>
              <Layers className="h-5 w-5 text-white" />
            </div>
            <div className="font-display font-semibold">{d.t}</div>
            <div className="text-xs text-muted-foreground mt-1">{d.n} cards</div>
          </div>
        ))}
      </div>
    </>
  );
}
