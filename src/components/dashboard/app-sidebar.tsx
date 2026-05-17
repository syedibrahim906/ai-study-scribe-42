import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Upload, MessageSquare, FileText, Layers,
  Brain, PenLine, Settings, Sparkles, CalendarClock,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Upload Notes", url: "/dashboard/upload", icon: Upload },
  { title: "AI Chat", url: "/dashboard/chat", icon: MessageSquare },
  { title: "Assignment Solver", url: "/dashboard/assignments", icon: FileText },
  { title: "Flashcards", url: "/dashboard/flashcards", icon: Layers },
  { title: "Quiz Generator", url: "/dashboard/quiz", icon: Brain },
  { title: "Handwriting", url: "/dashboard/handwriting", icon: PenLine },
  { title: "Study Planner", url: "/dashboard/planner", icon: CalendarClock },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const path = useRouterState({ select: (r) => r.location.pathname });
  const isActive = (url: string) => url === "/dashboard" ? path === "/dashboard" : path.startsWith(url);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/dashboard" className="flex items-center gap-2 px-2 py-2">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center shadow-glow shrink-0">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          {!collapsed && <span className="font-display font-semibold tracking-tight">StudyMate <span className="gradient-text">AI</span></span>}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={item.title}>
                    <Link to={item.url} className="flex items-center gap-2.5">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        {!collapsed ? (
          <div className="glass rounded-xl p-3">
            <div className="text-xs text-muted-foreground">Study streak</div>
            <div className="font-display text-2xl font-bold gradient-text">7 days 🔥</div>
          </div>
        ) : (
          <div className="text-center text-lg">🔥</div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
