
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

const data = [
  { day: "Mon", signups: 12 },
  { day: "Tue", signups: 19 },
  { day: "Wed", signups: 15 },
  { day: "Thu", signups: 27 },
  { day: "Fri", signups: 21 },
  { day: "Sat", signups: 36 },
  { day: "Sun", signups: 42 },
];

interface UserSignupsChartProps {
  className?: string;
}

export function UserSignupsChart({ className }: UserSignupsChartProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>User Signups</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="signups" 
                fill="#4f46e5" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
