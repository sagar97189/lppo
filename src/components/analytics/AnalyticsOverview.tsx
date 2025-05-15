
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const trafficData = [
  { name: "Jan", value: 3400 },
  { name: "Feb", value: 2800 },
  { name: "Mar", value: 3200 },
  { name: "Apr", value: 4700 },
  { name: "May", value: 5400 },
  { name: "Jun", value: 6100 },
  { name: "Jul", value: 7400 },
  { name: "Aug", value: 8200 },
  { name: "Sep", value: 9100 },
  { name: "Oct", value: 8700 },
  { name: "Nov", value: 7500 },
  { name: "Dec", value: 8200 },
];

const engagementData = [
  { name: "Movies", views: 4000, likes: 2400, comments: 1800 },
  { name: "Series", views: 3000, likes: 1398, comments: 1100 },
  { name: "Docs", views: 2000, likes: 980, comments: 700 },
  { name: "Sports", views: 2780, likes: 1508, comments: 900 },
  { name: "News", views: 1890, likes: 800, comments: 600 },
  { name: "Kids", views: 2390, likes: 1100, comments: 500 },
];

const deviceData = [
  { name: "Desktop", value: 38 },
  { name: "Mobile", value: 42 },
  { name: "Tablet", value: 14 },
  { name: "TV", value: 6 },
];

const COLORS = ["#4f46e5", "#8B5CF6", "#EC4899", "#10B981"];

const retentionData = [
  { name: "Week 1", retention: 100 },
  { name: "Week 2", retention: 82 },
  { name: "Week 3", retention: 73 },
  { name: "Week 4", retention: 65 },
  { name: "Week 5", retention: 58 },
  { name: "Week 6", retention: 52 },
  { name: "Week 7", retention: 48 },
  { name: "Week 8", retention: 45 },
];

export function AnalyticsOverview() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Traffic</CardTitle>
          <CardDescription>Monthly unique visitors to your platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={trafficData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#4f46e5"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Engagement</CardTitle>
            <CardDescription>
              Views, likes and comments by content type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="bar">
              <TabsList className="mb-4">
                <TabsTrigger value="bar">Bar</TabsTrigger>
                <TabsTrigger value="line">Line</TabsTrigger>
              </TabsList>
              <TabsContent value="bar" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="views" fill="#4f46e5" />
                    <Bar dataKey="likes" fill="#8B5CF6" />
                    <Bar dataKey="comments" fill="#EC4899" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="line" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="views"
                      stroke="#4f46e5"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="likes" stroke="#8B5CF6" />
                    <Line type="monotone" dataKey="comments" stroke="#EC4899" />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Distribution</CardTitle>
            <CardDescription>User access by device type</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {deviceData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Retention</CardTitle>
          <CardDescription>Weekly user retention rate</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, 'Retention Rate']} />
                <Line
                  type="monotone"
                  dataKey="retention"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
