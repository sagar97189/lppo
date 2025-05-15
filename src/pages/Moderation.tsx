
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ContentTable } from "@/components/moderation/ContentTable";

const Moderation = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Content Moderation</h2>
          <p className="text-muted-foreground mt-2">
            Review, approve, or reject user-submitted content.
          </p>
        </div>
        
        <ContentTable />
      </div>
    </DashboardLayout>
  );
};

export default Moderation;
