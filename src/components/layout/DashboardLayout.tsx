
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-admin-background">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-16">
        <Header />
        <main 
          className={cn(
            "flex-1 p-4 md:p-6 overflow-y-auto",
            className
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
