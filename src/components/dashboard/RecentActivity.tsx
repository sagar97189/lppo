
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ActivityType = "signup" | "upload" | "comment" | "login";

interface Activity {
  id: number;
  type: ActivityType;
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  content?: string;
  timestamp: string;
}

const mockActivities: Activity[] = [
  {
    id: 1,
    type: "signup",
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    timestamp: "10 minutes ago",
  },
  {
    id: 2,
    type: "upload",
    user: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    content: "Summer Vacation Photos",
    timestamp: "25 minutes ago",
  },
  {
    id: 3,
    type: "comment",
    user: {
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
    },
    content: "Great tutorial, very helpful!",
    timestamp: "1 hour ago",
  },
  {
    id: 4,
    type: "login",
    user: {
      name: "Emily Williams",
      email: "emily.williams@example.com",
    },
    timestamp: "2 hours ago",
  },
];

function ActivityIcon({ type }: { type: ActivityType }) {
  switch (type) {
    case "signup":
      return <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">New User</span>;
    case "upload":
      return <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">Upload</span>;
    case "comment":
      return <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded">Comment</span>;
    case "login":
      return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">Login</span>;
    default:
      return null;
  }
}

export function RecentActivity() {
  const renderActivityItem = (activity: Activity) => {
    return (
      <div key={activity.id} className="flex items-start gap-4 py-3">
        <Avatar>
          <AvatarFallback>
            {activity.user.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm truncate">{activity.user.name}</p>
            <ActivityIcon type={activity.type} />
          </div>
          {activity.content && (
            <p className="text-sm text-gray-600 mt-1 truncate">
              {activity.content}
            </p>
          )}
          <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
        </div>
      </div>
    );
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0 divide-y">
        {mockActivities.map(renderActivityItem)}
      </CardContent>
    </Card>
  );
}
