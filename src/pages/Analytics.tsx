
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AnalyticsOverview } from "@/components/analytics/AnalyticsOverview";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground mt-2">
            Track user engagement and monitor platform performance.
          </p>
        </div>
        
        <AnalyticsOverview />
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
