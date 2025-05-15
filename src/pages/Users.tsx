
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { UsersTable } from "@/components/users/UsersTable";

const Users = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
          <p className="text-muted-foreground mt-2">
            Manage your users, assign roles, and track their activities.
          </p>
        </div>
        
        <UsersTable />
      </div>
    </DashboardLayout>
  );
};

export default Users;
