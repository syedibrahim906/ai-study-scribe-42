import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import heroImg from "@/assets/hero-study.jpg";
import {
  Upload, MessageSquare, FileText, Brain, PenLine, Trophy,
  Languages, Sparkles, ArrowRight, Check,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "StudyMate AI — Your AI Study & Assignment Assistant" },
      { name: "description", content: "Upload notes & question papers, generate summaries, solve assignments, and convert answers into your own handwriting. Built for Indian students." },
    ],
  }),
});

const features = [
  { icon: Upload, title: "Upload anything", desc: "PDFs, DOCX, scanned notes, question papers — drag and drop with OCR support." },
  { icon: MessageSquare, title: "AI Study Chat", desc: "Ask questions from your notes in English, Hindi or Marathi. Get simple, exam-ready answers." },
  { icon: FileText, title: "Assignment Solver", desc: "Step-by-step answers, long-form or short notes, exported to PDF." },
  { icon: PenLine, title: "Handwriting Generator", desc: "Convert AI answers into your own handwritten notebook pages. Blue or black ink." },
  { icon: Brain, title: "Quizzes & Flashcards", desc: "Auto-generated MCQs, true/false, and revision flashcards from your material." },
  { icon: Trophy, title: "Paper Analyzer", desc: "Upload PYQs to find repeated questions, predict topics, and build a smart study plan." },
];

function Landing() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-6">
              <Sparkles className="h-3 w-3 text-primary" />
              <span>AI-powered • Built for Indian students</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Your AI Study & <span className="gradient-text">Assignment</span> Assistant
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Upload your notes and question papers. Get instant summaries, exam predictions,
              step-by-step answers, and even handwritten assignments — in your own handwriting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/signup" className="inline-flex items-center gap-2 gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-xl shadow-glow hover:opacity-90 transition">
                Start Studying <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/dashboard" className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-xl font-medium hover:bg-secondary/40 transition">
                <Upload className="h-4 w-4" /> Upload Notes
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              {["No credit card", "English / हिन्दी / मराठी", "Free to start"].map(t => (
                <div key={t} className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" />{t}</div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="absolute -inset-8 gradient-primary opacity-30 blur-3xl rounded-full animate-glow-pulse" />
            <div className="relative glass-strong rounded-3xl p-2 shadow-elegant">
              <img
                src={heroImg}
                alt="StudyMate AI floating notes and AI orbs"
                width={1536} height={1024}
                className="rounded-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elegant animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center"><Brain className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Quiz generated</div>
                  <div className="text-sm font-semibold">20 MCQs from Unit 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Everything you need to study smarter</h2>
            <p className="mt-4 text-muted-foreground">One workspace for notes, AI chat, assignments, quizzes and exam prep.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Upload your material", d: "Lecture notes, PDFs, scanned pages, PYQs — drag, drop, done." },
              { n: "02", t: "Let AI do the heavy lift", d: "Summaries, quizzes, answers, paper analysis in seconds." },
              { n: "03", t: "Export & ace your exam", d: "Get handwritten PDFs, flashcards, and a smart study plan." },
            ].map((s) => (
              <div key={s.n} className="glass rounded-2xl p-6 relative">
                <div className="text-5xl font-display font-bold gradient-text">{s.n}</div>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES STRIP */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="glass rounded-2xl p-8 text-center">
            <Languages className="h-6 w-6 mx-auto text-primary mb-3" />
            <h3 className="font-display text-2xl font-semibold">Study in your language</h3>
            <p className="mt-2 text-sm text-muted-foreground">English • हिन्दी • मराठी • More coming soon</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-center mb-10">Frequently asked</h2>
          <Accordion type="single" collapsible className="glass rounded-2xl px-6">
            {[
              { q: "Is StudyMate AI free to use?", a: "Yes, you can start completely free. We'll offer Pro plans later for unlimited handwriting exports and advanced exam-prediction features." },
              { q: "What file formats can I upload?", a: "PDF, DOCX, JPG, PNG, and scanned images. OCR runs automatically on scanned material." },
              { q: "Does it really copy my handwriting?", a: "Upload a few handwriting samples and our model styles AI-generated answers to look like notebook pages in your hand." },
              { q: "Which languages are supported?", a: "Right now English, Hindi and Marathi for AI answers, summaries and explanations." },
              { q: "Is my data private?", a: "Your uploads are encrypted and only used to power your own study workspace. We never sell your data." },
            ].map((f, i) => (
              <AccordionItem value={`f-${i}`} key={i} className="border-border/50">
                <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="glass-strong rounded-3xl p-12 text-center shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-10" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Ready to study smarter?</h2>
              <p className="mt-4 text-muted-foreground">Join thousands of students using AI to ace their exams.</p>
              <Link to="/signup" className="mt-8 inline-flex items-center gap-2 gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-glow hover:opacity-90 transition">
                Start free <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
