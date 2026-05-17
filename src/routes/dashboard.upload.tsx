import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { UploadCloud, FileText, Image as ImageIcon, FileQuestion, Trash2 } from "lucide-react";

export const Route = createFileRoute("/dashboard/upload")({ component: UploadPage });

const recent = [
  { name: "OS_Unit3_Notes.pdf", size: "2.4 MB", type: "PDF", date: "Today" },
  { name: "DBMS_PYQ_2023.pdf", size: "1.1 MB", type: "PYQ", date: "Yesterday" },
  { name: "Maths_HW_Scan.jpg", size: "880 KB", type: "Image", date: "2d ago" },
];

function UploadPage() {
  return (
    <>
      <PageHeader title="Upload notes" subtitle="PDFs, DOCX, images and scanned papers — OCR runs automatically." />

      <label className="block glass-strong rounded-3xl border-2 border-dashed border-primary/40 p-12 text-center cursor-pointer hover:border-primary transition group">
        <input type="file" multiple className="hidden" />
        <div className="mx-auto h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition">
          <UploadCloud className="h-8 w-8 text-primary-foreground" />
        </div>
        <div className="font-display text-xl font-semibold">Drop your files here</div>
        <div className="text-sm text-muted-foreground mt-1">or click to browse — PDF, DOCX, JPG, PNG up to 20 MB</div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          {[{i:FileText,t:"PDF & DOCX"},{i:ImageIcon,t:"Scanned images"},{i:FileQuestion,t:"Question papers"}].map(({i:Icon,t}) => (
            <span key={t} className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1"><Icon className="h-3 w-3" />{t}</span>
          ))}
        </div>
      </label>

      <h2 className="font-display text-xl font-semibold mt-10 mb-4">Recent uploads</h2>
      <div className="glass rounded-2xl divide-y divide-border/50">
        {recent.map((f) => (
          <div key={f.name} className="flex items-center gap-4 p-4">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">{f.name}</div>
              <div className="text-xs text-muted-foreground">{f.type} • {f.size} • {f.date}</div>
            </div>
            <button className="text-xs px-3 py-1.5 rounded-lg glass hover:bg-secondary/40 transition">Open</button>
            <button className="h-8 w-8 rounded-lg hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition flex items-center justify-center">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
