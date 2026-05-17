import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Bell, Search } from "lucide-react";

export const Route = createFileRoute("/dashboard")({ component: DashboardLayout });

function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center gap-3 border-b border-border/50 px-4 sticky top-0 z-30 backdrop-blur-xl bg-background/60">
            <SidebarTrigger />
            <div className="hidden md:flex items-center gap-2 glass rounded-lg px-3 py-1.5 text-sm text-muted-foreground w-72">
              <Search className="h-3.5 w-3.5" />
              <span>Search notes, chats, quizzes…</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:bg-secondary/40 transition">
                <Bell className="h-4 w-4" />
              </button>
              <Link to="/dashboard/settings" className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center text-sm font-semibold text-primary-foreground shadow-glow">
                A
              </Link>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
