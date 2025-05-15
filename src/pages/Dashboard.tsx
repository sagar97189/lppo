
import { Users, LayoutDashboard, FileText, BarChart } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { OverviewChart } from "@/components/dashboard/OverviewChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UserSignupsChart } from "@/components/dashboard/UserSignupsChart";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground mt-2">
            Welcome to your admin dashboard. Here's what's happening today.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Users"
            value="12,543"
            description="Total registered users"
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 12, positive: true }}
          />
          <StatCard
            title="Content Items"
            value="8,234"
            description="Total content uploaded"
            icon={<FileText className="h-5 w-5" />}
            trend={{ value: 8, positive: true }}
          />
          <StatCard
            title="Active Sessions"
            value="1,287"
            description="Current active sessions"
            icon={<LayoutDashboard className="h-5 w-5" />}
          />
          <StatCard
            title="Revenue"
            value="$24,698"
            description="This month's revenue"
            icon={<BarChart className="h-5 w-5" />}
            trend={{ value: 4, positive: true }}
          />
        </div>
        
        <div className="grid gap-6 md:grid-cols-7">
          <OverviewChart className="md:col-span-4" />
          <RecentActivity className="md:col-span-3" />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <UserSignupsChart className="md:col-span-1" />
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-admin-primary text-white px-4 py-2 rounded hover:bg-admin-primary/90 transition-colors">
                Add New Content
              </button>
              <button className="w-full bg-white border border-gray-200 text-admin-text px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                View Reports
              </button>
              <button className="w-full bg-white border border-gray-200 text-admin-text px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                Export Data
              </button>
              <button className="w-full bg-white border border-gray-200 text-admin-text px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                Manage Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
