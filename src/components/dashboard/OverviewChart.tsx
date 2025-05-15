
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const data = [
  { name: "Jan", users: 400, content: 240 },
  { name: "Feb", users: 300, content: 139 },
  { name: "Mar", users: 500, content: 321 },
  { name: "Apr", users: 280, content: 180 },
  { name: "May", users: 590, content: 250 },
  { name: "Jun", users: 490, content: 190 },
  { name: "Jul", users: 690, content: 390 },
];

interface OverviewChartProps {
  title?: string;
  className?: string;
}

export function OverviewChart({ title = "Activity Overview", className }: OverviewChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorContent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#4f46e5"
                fillOpacity={1}
                fill="url(#colorUsers)"
              />
              <Area
                type="monotone"
                dataKey="content"
                stroke="#8B5CF6"
                fillOpacity={1}
                fill="url(#colorContent)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-admin-primary" />
            <span className="text-sm text-muted-foreground">Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-admin-secondary" />
            <span className="text-sm text-muted-foreground">Content</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
