import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { PenLine, Upload, Download, Sparkles } from "lucide-react";

export const Route = createFileRoute("/dashboard/handwriting")({ component: HandwritingPage });

function HandwritingPage() {
  return (
    <>
      <PageHeader title="Handwriting Generator" subtitle="Train AI on your handwriting and turn answers into notebook PDFs." />

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-strong rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center shadow-glow"><PenLine className="h-4 w-4 text-primary-foreground" /></div>
            <div>
              <h2 className="font-display font-semibold">1. Train your handwriting</h2>
              <p className="text-xs text-muted-foreground">Upload 3–5 photos of your handwritten pages</p>
            </div>
          </div>
          <label className="block border-2 border-dashed border-primary/40 rounded-2xl p-10 text-center cursor-pointer hover:border-primary transition">
            <input type="file" className="hidden" accept="image/*" multiple />
            <Upload className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-sm font-medium">Upload handwriting samples</div>
            <div className="text-xs text-muted-foreground mt-1">JPG or PNG, clear photos</div>
          </label>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-success" /> Style learned • Aarav v2
          </div>
        </div>

        <div className="glass-strong rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center shadow-glow"><Sparkles className="h-4 w-4 text-primary-foreground" /></div>
            <div>
              <h2 className="font-display font-semibold">2. Generate handwritten pages</h2>
              <p className="text-xs text-muted-foreground">Paste your text and pick a paper style</p>
            </div>
          </div>
          <textarea rows={5} placeholder="Paste the answer text…" className="w-full glass rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-primary resize-none" />
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {["Blue ink","Black ink","Ruled paper","A4 notebook","Single line"].map(t => (
              <span key={t} className="glass rounded-full px-3 py-1 cursor-pointer hover:bg-secondary/40">{t}</span>
            ))}
          </div>
          <button className="mt-4 w-full inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground font-medium rounded-xl py-2.5 shadow-glow">
            <Download className="h-4 w-4" /> Generate handwritten PDF
          </button>
        </div>
      </div>

      <div className="mt-8 glass rounded-2xl p-6">
        <h3 className="font-display font-semibold mb-4">Preview</h3>
        <div className="rounded-2xl bg-[#fdfaf3] text-[#1a3a8a] p-8 shadow-elegant min-h-64" style={{ backgroundImage: "repeating-linear-gradient(transparent 0 31px, oklch(0.85 0.05 220 / 0.6) 31px 32px)", lineHeight: "32px" }}>
          <div style={{ fontFamily: '"Caveat", "Segoe Script", cursive', fontSize: 22 }}>
            Q1. Define an operating system and list its functions.<br />
            An operating system is a system software that acts as an interface between the user and the computer hardware…
          </div>
        </div>
      </div>
    </>
  );
}
